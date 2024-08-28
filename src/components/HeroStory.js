import React from 'react';

function HeroHome() {

    return (
        <div className="heroStory">
            <div className="container py-5 px-0">
                <div className="d-flex align-items-center" style={{minHeight: '40vh'}}>
                    <div className="" style={{ flex: 1}}>
                        <div className="heart-shape text-center row d-flex justify-content-center align-items-center">
                            <img src="/images/story/17.jpeg" alt="" className="col-8" />
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