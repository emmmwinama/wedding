import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

function Locations(props) {
    return (
        <section className="locations">
            <div className="container-wrapper p-5">
                <div className="container py-4">
                    <div className="row mb-3">
                        <div className="text-center">
                            <p className="text-uppercase">our special events</p>
                            <h2 className="sacramento-regular p-0 pb-3"
                                style={{fontSize: "50px", color: "#f8f9fa", fontWeight: "bold"}}>Wedding Events</h2>
                        </div>
                    </div>
                    <div className="row d-lg-flex justify-content-lg-center d-sm-inline justify-content-sm-around align-items-center">
                        <div className="col-sm-8 col-lg-4 p-4 m-3 container-wrapper-min" style={{border: '2px solid #f8f9fa', borderRadius: '5px'}}>
                            <div className="mb-4" style={{borderBottom: '2px solid #f8f9fa'}}>
                                <p className="text-uppercase text-center" style={{ fontWeight: 600, fontSize: '20px' }}>Officiation</p>
                            </div>
                            <div className="row schedule-sec text-center">
                                <div className="col-6 d-flex flex-column">
                                    <p><FontAwesomeIcon icon={faClock} style={{color: '#f8f8fa', fontSize: '20px'}}/>
                                    </p>
                                    <p className="p-0">07:30 AM<br/>12:00 PM</p>
                                </div>
                                <div className="col-6 d-flex flex-column">
                                    <p><FontAwesomeIcon icon={faCalendar} style={{color: '#f8f8fa', fontSize: '20px'}}/>
                                    </p>
                                    <p className="p-0">31<sup>st</sup> August 2024<br/>Saturday</p>
                                </div>
                                <div className="col-6 d-flex flex-column">
                                    <p><FontAwesomeIcon icon={faMapMarkerAlt}
                                                        style={{color: '#f8f8fa', fontSize: '20px'}}/></p>
                                    <p className="p-0">Dowa CCAP<br/>Dowa</p>
                                </div>
                                <div className="col-12 d-flex flex-column">
                                    <a href="https://maps.app.goo.gl/ZtboSVfEye8rcDuMA" className="map-button" target="_blank" rel="noreferrer">View on Google Maps</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 col-lg-4 p-4 m-3 container-wrapper-min"
                             style={{border: '2px solid #f8f9fa', borderRadius: '5px'}}>
                            <div className="mb-4" style={{borderBottom: '2px solid #f8f9fa'}}>
                                <p className="text-uppercase text-center"
                                   style={{fontWeight: 600, fontSize: '20px'}}>Reception</p>
                            </div>
                            <div className="row schedule-sec text-center">
                                <div className="col-6 d-flex flex-column">
                                    <p><FontAwesomeIcon icon={faClock} style={{color: '#f8f8fa', fontSize: '20px'}}/>
                                    </p>
                                    <p className="p-0">07:30 AM<br/>12:00 PM</p>
                                </div>
                                <div className="col-6 d-flex flex-column">
                                    <p><FontAwesomeIcon icon={faCalendar} style={{color: '#f8f8fa', fontSize: '20px'}}/>
                                    </p>
                                    <p className="p-0">31<sup>st</sup> August 2024<br/>Saturday</p>
                                </div>
                                <div className="col-6 d-flex flex-column">
                                    <p><FontAwesomeIcon icon={faMapMarkerAlt}
                                                        style={{color: '#f8f8fa', fontSize: '20px'}}/></p>
                                    <p className="p-0">MANAC Hotel<br/>Dowa</p>
                                </div>
                                <div className="col-12 d-flex flex-column">
                                    <a href="https://maps.app.goo.gl/PyBHgRkVxtn75niE7" className="map-button" target="_blank" rel="noreferrer">View on
                                        Google Maps</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Locations;