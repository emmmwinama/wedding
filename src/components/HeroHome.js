import React, { useState, useEffect } from 'react';

function HeroHome() {
    const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    useEffect(() => {
        const weddingDate = new Date('2024-08-31T09:00:00');
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = weddingDate - now;

            if (timeDiff < 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setTimeLeft({days, hours, minutes, seconds});
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heroHome">
            <div className="container py-5">
                <div className="row d-flex align-items-center" style={{minHeight: '50vh'}}>
                    <div
                        className="col-md-12 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <div className="text-center">
                            <h1 className="sacramento-regular" style={{color: "crimson", fontSize: '50px'}}>We're getting married!</h1>
                            <p>Count down with us to our special date.</p>
                            <div className="countdown d-flex justify-content-center">
                                <div className="days count-wrapper">
                                    <span className="count">{timeLeft.days}</span>
                                    <span>Days</span>
                                </div>
                                <div className="hours count-wrapper">
                                    <span className="count">{timeLeft.hours}</span>
                                    <span>Hours</span>
                                </div>
                                <div className="minutes count-wrapper">
                                    <span className="count">{timeLeft.minutes}</span>
                                    <span>Minutes</span>
                                </div>
                                <div className="seconds count-wrapper">
                                    <span className="count">{timeLeft.seconds}</span>
                                    <span>Seconds</span>
                                </div>
                            </div>
                            <div className="">
                                <a
                                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Emmanuel+and+Midian&dates=20240831T053000Z/20240831T160000Z&details=Join+us+as+we+join+our+hands+marriage+Officiation+at+Dowa+CCAP+and+Wedding+Reception+at+Manac+Events+Garden+in+Dowa&location=Dowa"
                                    className="calendar-button m-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Add to Google Calendar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="row flex-fill p-0">
                            <div className="col-md-6 col-sm-6 px-0 m-0">
                                <div className="aspect-ratio">
                                    <img src="/images/Cropped/2.jpeg" alt="Us" className="p-1"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 px-0 m-0">
                                <div className="aspect-ratio">
                                    <img src="/images/Cropped/3.jpeg" alt="Us" className="p-1"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 px-0 m-0 d-none d-lg-inline">
                                <div className="aspect-ratio">
                                    <img src="/images/Cropped/4.jpeg" alt="Us" className="p-1"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 px-0 m-0 d-none d-lg-inline">
                                <div className="aspect-ratio">
                                    <img src="/images/Cropped/5.jpeg" alt="Us" className="p-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroHome;