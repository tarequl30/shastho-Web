import Image from 'next/image';
import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
    return (
        <section className={styles.about_container}>
            <div className="row">
                <div className="col-xxl-6 col-lg-6 col-md-6 col-12">
                    <Image src={'/Images/Doctors-pana.png'} width={647} height={620} />
                </div>
                <div className={`${'col-xxl-6 col-lg-6 col-md-6 col-12'} ${styles.about_detail}`}>
                    <p style={{ fontSize: '40px', fontWeight: '200' }}>
                        <span style={{ fontSize: '40px', fontWeight: '800' }}>About Shastho</span>
                    </p>
                    <small style={{ color: '#02D3FF' }}>PROFESSIONAL CARE</small>

                    <div className="mt-5">
                        <small style={{ color: '#363636' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci
                            ex, pulvinar nec finibus ut, cursus eget libero. In dictum sem non
                            sapien condimentum aliquet. Nulla facilisi. Mauris efficitur dolor
                            dolor, id porta nulla interdum vitae.
                        </small>
                    </div>

                    <div className={styles.drop_down}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button
                                        className={`${'accordion-button collapsed'} ${
                                            styles.accordion_btn
                                        }`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Medial Consulting
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className={`${'accordion-collapse collapse'}`}
                                    aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className={`${'accordion-body'} ${styles.accordion_body}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                        pharetra, urna non pellentesque sollicitudin, felis lorem
                                        porta nibh, suscipit lacinia ante augue venenatis nibh.
                                        Nullam tristique ornare lorem at
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button
                                        className={`${'accordion-button collapsed'} ${
                                            styles.accordion_btn
                                        }`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Laboratory Analysis
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                        pharetra, urna non pellentesque sollicitudin, felis lorem
                                        porta nibh, suscipit lacinia ante augue venenatis nibh.
                                        Nullam tristique ornare lorem at
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button
                                        className={`${'accordion-button collapsed'} ${
                                            styles.accordion_btn
                                        }`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Diagnostic Clinic
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                        pharetra, urna non pellentesque sollicitudin, felis lorem
                                        porta nibh, suscipit lacinia ante augue venenatis nibh.
                                        Nullam tristique ornare lorem at
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
