import React from "react";

function Theme(props) {
    return (
        <section className="themecolor">
            <div className="p-5">
                <div className="container px-0 my-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 py-3 d-flex">
                            <div className="text-center d-flex align-items-center justify-content-center align-items-center" style={{flex: 1}}>
                                <h2 className="sacramento-regular p-0 pb-3"
                                    style={{fontSize: "70px", color: "#db2e44"}}>Wedding Colors</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 py-3 p-0 d-flex">
                            <div className="colors-wrapper d-flex align-items-baseline justify-content-center"
                                 style={{flex: 1}}>
                                <div className="text-center position-relative m-2">
                                    <div className="colors text-uppercase text-light"
                                         style={{background: '#ffaaaa', fontWeight: 700, fontSize: '20px', padding: '1rem'}}>B
                                    </div>
                                </div>
                                <div className="text-center position-relative m-2">
                                    <div className="colors text-uppercase text-light"
                                         style={{background: '#ffd700', fontWeight: 700, fontSize: '20px', padding: '1rem'}}>G
                                    </div>
                                </div>
                                <div className="text-center position-relative m-2">
                                    <div className="colors text-uppercase"
                                         style={{background: '#ffffff', fontWeight: 700, fontSize: '20px', padding: '1rem', color: '#ffd700'}}>W
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Theme;
