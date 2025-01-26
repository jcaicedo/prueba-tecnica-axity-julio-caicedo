import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import cardData from "../../data/cardData";
import { HourlyStatusProvider } from "../../context/HourlyStatusContext";


describe("Card", () => {
  it("se renderiza con los datos proporcionados", () => {
    const cardProps = {
      id: 1,
      banner: cardData[0].banner,
      logo: cardData[0].logo,
      title: "SuperAutos",
      ubicacion: "Nivel 1",
      horario: {
        dia: "lunes",
        inicio: "10:00",
        fin: "17:00",
      },
      labelLink: "Más información",
      link: "https://www.google.com",
    };

    render(
      <HourlyStatusProvider cardData={cardData}>
        <Card {...cardProps} />
      </HourlyStatusProvider>
    );

    expect(screen.getByText("SuperAutos")).toBeInTheDocument();
    expect(screen.getByText("Nivel 1")).toBeInTheDocument();
    expect(screen.getByText("Horario lunes")).toBeInTheDocument();
    expect(screen.getByText("10:00 a 17:00")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Más información" })
    ).toHaveAttribute("href", "https://www.google.com");
  });
});