import React, { useState, useEffect } from 'react';

function HeroWedding() {
    return (
        <div className="heroWedding">
            <div className="container py-5">
                <div className="d-flex align-items-center flex-column flex-lg-row" style={{minHeight: '50vh'}}>
                    <div className="w-100 text-center wgalleryhero" style={{flex: 1}}>
                        <h1 className="sacramento-regular" style={{color: 'crimson', fontSize: '40px', fontWeight: 600}}>A message from Emmanuel and Midian</h1>
                        <p>We extend our deepest and most heartfelt gratitude to everyone who played a role in making our wedding truly unforgettable. Your generosity, support, and dedication have woven together the beautiful tapestry of our celebration. We are deeply moved by your kindness and the effort you put into every detail.
                            Your contributions have touched our hearts in ways words can scarcely express. May the blessings you have bestowed upon us be returned to you a thousandfold. Only God can truly replenish the love and resources you have generously shared with us.
                            From the bottom of our hearts, thank you for being a part of our special journey. Your presence and participation have made this day a cherished memory we will hold close forever.</p>
                        <p className="sacramento-regular" style={{fontSize: '60px',}} >With Love</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroWedding;