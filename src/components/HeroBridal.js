import React, { useState, useEffect } from 'react';

function HeroBridal() {
    const [timeElapsed, setTimeElapsed] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    useEffect(() => {
        const showerDate = new Date('2024-08-25T17:00:00');
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = now - showerDate;

            if (timeDiff < 0) {
                 clearInterval(interval);
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setTimeElapsed({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heroBridal">
            <div className="container py-5">
                <div className="row d-flex align-items-center" style={{minHeight: '50vh'}}>
                    <div
                        className="col-md-12 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start pb-5">
                        <div className="text-center">
                            <h1 className="sacramento-regular fs-1" style={{color: "crimson", fontWeight: 500}}>Our Bridal Shower</h1>
                            <p>Days Since the Bridal Shower</p>
                            <div className="countdown d-flex justify-content-center">
                                <div className="days count-wrapper">
                                    <span className="count">{timeElapsed.days}</span>
                                    <span>Days</span>
                                </div>
                                <div className="hours count-wrapper">
                                    <span className="count">{timeElapsed.hours}</span>
                                    <span>Hours</span>
                                </div>
                                <div className="minutes count-wrapper">
                                    <span className="count">{timeElapsed.minutes}</span>
                                    <span>Minutes</span>
                                </div>
                                <div className="seconds count-wrapper">
                                    <span className="count">{timeElapsed.seconds}</span>
                                    <span>Seconds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-100 col-md-12 col-12 col-lg-6 d-flex align-items-center justify-content-center" style={{flex: 1}}>
                        <div className="row flex-fill p-0 d-flex">
                            <div className="col-md-6 col-6 px-0 m-0 d-flex align-items-start">
                                <div className="aspect-ration position-relative">
                                    <img src="/images/others/1.jpg" alt="Us"
                                         className="img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-cover"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 px-0 m-0 d-flex align-items-start">
                                <div className="aspect-ration position-relative">
                                    <img src="/images/others/2.jpg" alt="Us"
                                         className="img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroBridal;