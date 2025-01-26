/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useContext, useEffect, useState } from "react"

const HourlyStatusContext = createContext();

const calculateStatuses = async (cardData, setHourStatuses, setLoading) => {
    try {
        setLoading(true);
        const response = await fetch(
            "https://timeapi.io/api/Time/current/zone?timeZone=America/Santiago"
        );
        const data = await response.json();
        const { hour, minute, dayOfWeek } = data;

        const daysMap = {
            Sunday: "domingo",
            Monday: "lunes",
            Tuesday: "martes",
            Wednesday: "miércoles",
            Thursday: "jueves",
            Friday: "viernes",
            Saturday: "sábado",
        };

        const currentDay = daysMap[dayOfWeek];
        const currentTime = hour + minute / 60;

        const statuses = cardData.reduce((acc, card) => {


            if (card.horario.dia.toLowerCase() !== currentDay) {
                acc[card.id] = "closed";
            } else {

                const [initHour, initMinute] = card.horario.inicio.split(":").map(Number);
                const initTime = initHour + initMinute / 60;

                const [endHour, endMinute] = card.horario.fin.split(":").map(Number);
                const endTime = endHour + endMinute / 60;

               
                if (currentTime > endTime) {
                    acc[card.id] = "closed";
                } else if (currentTime >= endTime - 1 && currentTime <= endTime) {
                    acc[card.id] = "close soon"; 
                } else if (currentTime >= initTime && currentTime < endTime - 1) {
                    acc[card.id] = "open";
                } else {
                    acc[card.id] = "closed";
                }
            }

            return acc;
        }, {});

        setHourStatuses(statuses);
    } catch (error) {


        const fallbackStatuses = cardData.reduce((acc, card) => {
            acc[card.id] = "closed";

            return acc;
        }, {});
        setHourStatuses(fallbackStatuses);
    } finally {
        setLoading(false)
    }
};

export const HourlyStatusProvider = ({ children, cardData }) => {
    const [hourStatuses, setHourStatuses] = useState({});
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        calculateStatuses(cardData, setHourStatuses, setLoading);

        const intervalId = setInterval(() => {
            calculateStatuses(cardData, setHourStatuses, setLoading);
        }, 60 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, [cardData]);

    return (
        <HourlyStatusContext.Provider value={{ hourStatuses, loading }}>
            {children}
        </HourlyStatusContext.Provider>
    );
};


export const useHourlyStatuses = () => {
    return useContext(HourlyStatusContext)
}

