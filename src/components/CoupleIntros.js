import React from "react";

function CoupleIntros() {
    return (
        <section className="p-5">
            <div className="container pt-4 pb-5">
                <div className="row mb-3">
                    <div className="text-center">
                        <h2 className="sacramento-regular p-0" style={{fontSize: "50px", color: "crimson", fontWeight: "bold"}}>Who are Emmanuel & Midian</h2>
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
                                     style={{width: '100%', borderRadius: '100%', border: '5px solid crimson'}}/>
                            </div>
                        </div>
                        <div className="bride-pic col-6  p-0 d-flex justify-content-center align-items-center">
                            <div className="pic-wrapper">
                                <img src="/images/couple/3.jpeg" alt="Midian Mulungu"
                                     style={{width: '100%', borderRadius: '100%', border: '5px solid crimson'}}/>
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
                            <div className="groom p-2 row d-flex align-items-center">
                                <div className="groom-text col-lg-8 col-12">
                                    <div className="groom-name">
                                        <span className="text-lg-end text-center d-block sacramento-regular"
                                              style={{fontSize: "30px", fontWeight: 700}}>Emmanuel Mwinama</span>
                                    </div>
                                    <div className="groom-desc text-lg-end text-center">
                                        Emmanuel, the eldest in a family of four, is a passionate software developer with a deep love for technology. He honed his skills at the University of Malawi - The Polytechnic, now the Malawi University of Business and Applied Sciences.

                                        Beyond coding, Emmanuel enjoys sports, whether dribbling on the basketball court or pushing his limits in bodybuilding. His life is a blend of intellect and physicality, driven by dedication and passion. Emmanuel's journey reflects his gratitude for the family, education, and passions that continue to shape his growth.
                                    </div>
                                </div>
                                <div className="groom-pic col-lg-4 d-none d-lg-inline p-0 justify-content-center align-items-center">
                                    <div className="pic-wrapper">
                                        <img src="/images/couple/1.jpeg" alt="Emmanuel Mwinama"
                                             style={{width: '100%', borderRadius: '100%', border: '5px solid crimson'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 py-4 px-0">
                            <div className="bride p-2 row d-lg-flex align-items-center flex-lg-row-reverse flex-sm-row">
                                <div className="bride-text col-lg-8 col-sm-12">
                                    <div className="bride-name">
                                    <span className="text-lg-start text-center d-block sacramento-regular"
                                          style={{fontSize: "30px", fontWeight: 700}}>Midian Mulungu</span>
                                    </div>
                                    <div className="bride-desc text-lg-start text-center">
                                        Midian, the cherished firstborn in a family of four, guides her siblings with love. She earned a BSc in Animal Science from Lilongwe University of Agriculture and Natural Resources, showcasing her passion for life sciences. A dynamic entrepreneur, Midian's interests span fashion, agriculture, technology, and real estate. She loves music and romantic comedies, and enjoys joining her beloved gentleman in sports, embodying the spirit of a queen by her king's side. Midian brings intellect, creativity, and joy to all she does, embracing life with gratitude and zest.
                                    </div>
                                </div>
                                <div className="bride-pic col-4 d-none d-lg-flex  p-0 justify-content-center align-items-center">
                                    <div className="pic-wrapper">
                                        <img src="/images/couple/3.jpeg" alt="Midian Mulungu"
                                             style={{width: '100%', borderRadius: '100%', border: '5px solid crimson'}}/>
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