import React from "react";

function CoupleIntros() {
    return (
        <section className="p-5">
            <div className="container pt-4 pb-5">
                <div className="row mb-3">
                    <div className="text-center">
                        <h2 className="sacramento-regular p-0" style={{fontSize: "50px", color: "#c7aa23", fontWeight: "bold"}}>The Bride and Groom!</h2>
                        <p className="p-0">Know your bride and groom</p>
                    </div>
                </div>
                <div className="alt-pic position-relative d-lg-none">
                    <div className="position-absolute"
                         style={{left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                        <span className="text-danger heart" style={{fontSize: '50px'}}>&#10084;&#65039;</span>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="groom-pic col-6 p-0 d-flex justify-content-center align-items-center">
                            <div className="pic-wrapper">
                                <img src="/images/couple/1.jpeg" alt="Emmanuel Mwinama"
                                     style={{width: '100%', borderRadius: '100%', border: '5px solid #c7aa23'}}/>
                            </div>
                        </div>
                        <div className="bride-pic col-6  p-0 d-flex justify-content-center align-items-center">
                            <div className="pic-wrapper">
                                <img src="/images/couple/3.jpeg" alt="Midian Mulungu"
                                     style={{width: '100%', borderRadius: '100%', border: '5px solid #c7aa23'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="couple-introsec position-relative">
                    <div className="position-absolute d-none d-lg-flex"
                         style={{left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                        <span className="text-danger heart" style={{fontSize: '50px'}}>&#10084;&#65039;</span>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 py-4 px-0">
                            <div className="groom p-2 row">
                                <div className="groom-text col-lg-8 col-12">
                                    <div className="groom-name">
                                        <span className="text-lg-end text-sm-center d-block sacramento-regular"
                                              style={{fontSize: "30px", fontWeight: 700}}>Emmanuel Mwinama</span>
                                    </div>
                                    <div className="groom-desc text-lg-end text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi beatae,
                                        doloribus et eveniet ex illo incidunt libero maxime minima officia, recusandae
                                        rerum
                                        voluptas. A aut blanditiis commodi dolorem ducimus eius error facilis hic,
                                        impedit
                                        incidunt ipsa laudantium nisi officiis omnis pariatur porro quidem reiciendis,
                                        rem,
                                        repellendus repudiandae saepe unde.
                                    </div>
                                </div>
                                <div className="groom-pic col-lg-4 d-none d-lg-inline p-0 justify-content-center align-items-center">
                                    <div className="pic-wrapper">
                                        <img src="/images/couple/1.jpeg" alt="Emmanuel Mwinama"
                                             style={{width: '100%', borderRadius: '100%', border: '5px solid #c7aa23'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 py-4 px-0">
                            <div className="bride p-2 row d-lg-flex flex-lg-row-reverse flex-sm-row">
                                <div className="bride-text col-lg-8 col-sm-12">
                                    <div className="bride-name">
                                    <span className="text-lg-start text-sm-center d-block sacramento-regular"
                                          style={{fontSize: "30px", fontWeight: 700}}>Midian Mulungu</span>
                                    </div>
                                    <div className="bride-desc text-lg-start text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi beatae,
                                        doloribus et eveniet ex illo incidunt libero maxime minima officia, recusandae
                                        rerum
                                        voluptas. A aut blanditiis commodi dolorem ducimus eius error facilis hic,
                                        impedit
                                        incidunt ipsa laudantium nisi officiis omnis pariatur porro quidem reiciendis,
                                        rem,
                                        repellendus repudiandae saepe unde.
                                    </div>
                                </div>
                                <div className="bride-pic col-4 d-none d-lg-flex  p-0 justify-content-center align-items-center">
                                    <div className="pic-wrapper">
                                        <img src="/images/couple/3.jpeg" alt="Midian Mulungu"
                                             style={{width: '100%', borderRadius: '100%', border: '5px solid #c7aa23'}}/>
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

export default CoupleIntros;