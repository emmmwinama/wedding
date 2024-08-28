import React from 'react';

function HeroHome() {

    return (
        <div className="heroStory">
            <div className="container py-5">
                <div className="d-flex align-items-center flex-lg-row flex-column" style={{minHeight: '40vh'}}>
                    <div className="" style={{ flex: 1}}>
                        <div className="border text-center d-flex justify-content-center justify-content-lg-start align-items-center">
                            <img src="/images/story/17.jpeg" alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="" style={{flex: 1}} >
                        <div className="sacramento-regular text-light text-center"
                             style={{fontSize: '50px', fontWeight: 700, flex: 1}}>Our Love Memory Lane
                        </div>
                        <p className="text-center text-light" style={{ fontWeight: 500 }}>Below are the pictures have take with/of each other through out the time we have been
                            together </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHome;