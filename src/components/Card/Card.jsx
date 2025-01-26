/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import styles from './Card.module.scss'
import * as assets from "../../assets";
import { useHourlyStatuses } from '../../context/HourlyStatusContext';

const Card = ({ id, title, banner, logo, ubicacion, horario, link, labelLink }) => {

    const {hourStatuses} = useHourlyStatuses();
    const stateHour = hourStatuses[id] || "closed";


    return (

        <div className="card_item">
            <div className="card_banner_container">
                <img src={banner} alt={`${title} banner`} className="card_banner" />
                <img src={logo} alt={`${title} logo`} className="card_logo" />
            </div>

            <div className="card_body">
                <div className="card_title_content">
                    <h4 className="card_title">{title}</h4>
                </div>

                <div className="card_location_content">
                    <img src={assets.map} alt={`${title} location`} className="icon_location" />
                    <p className="card_text_location">{ubicacion}</p>
                </div>

                <div className="card_content_details">
                    <div className="card_content_details_item card_content_time">
                        <p>Horario {horario.dia}</p>
                        <p>{horario.inicio} a {horario.fin}</p>
                    </div>
                    <div
                        className={`card_content_details_item card_content_state ${stateHour ? stateHour.toLowerCase().replace(' ', '-') : 'unknown'
                            }`}
                    >
                        <p>{stateHour}</p>
                    </div>
                </div>

                <div className="card_more_info">
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {labelLink}
                    </a>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    banner: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
    horario: PropTypes.shape({
        dia: PropTypes.string.isRequired,
        inicio: PropTypes.string.isRequired,
        fin: PropTypes.string.isRequired,
    }).isRequired,
    labelLink: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Card;
