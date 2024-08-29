import React from 'react';

function HeroHome() {

    return (
        <div className="heroStory">
            <div className="container py-5">
                <div className="d-flex align-items-center flex-lg-row flex-column" style={{minHeight: '40vh'}}>
                    <div className="" style={{ flex: 1}}>
                        <div className="text-center d-flex justify-content-center justify-content-lg-start align-items-center mb-4">
                            <img src="/images/story/17.jpeg" alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="" style={{flex: 1}} >
                        <div className="sacramento-regular text-center"
                             style={{fontSize: '50px', flex: 1, color: "crimson"}}>Our Love Memory Lane
                        </div>
                        <p className="text-center text-light" style={{ fontWeight: 400}}>Every picture tells a story, and these are the stories we've woven together over time. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHome;