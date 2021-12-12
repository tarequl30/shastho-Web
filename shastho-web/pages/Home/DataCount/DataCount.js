import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { CountUp } from 'use-count-up';
import styles from './DataCount.module.css';

const DataCount = () => {
    const [doctors, setDoctors] = useState('');
    console.log(doctors);
    return (
        <section className={styles.count_container}>
            <div style={{ width: '100%' }}>
                <div className="row">
                    <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                        <div className={styles.item_container}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div
                                        // style={{ height: 100, marginLeft: '50px' }}
                                        className={styles.number_count}>
                                        {isVisible ? (
                                            <CountUp isCounting start={0} end={55} duration={2.2} />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                            <div className={styles.line_out}>
                                <div className={styles.line}></div>
                            </div>
                            <p className="fs-6 ms-2 mt-2">
                                Certified <br /> Doctors
                            </p>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                        <div className={styles.item_container}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 120 }}>
                                {({ isVisible }) => (
                                    <div
                                        // style={{ height: 100, marginLeft: '50px' }}
                                        className={styles.number_count}>
                                        {isVisible ? (
                                            <CountUp isCounting start={0} end={45} duration={2.2} />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                            <div className={styles.line_out}>
                                <div className={styles.line}></div>
                            </div>
                            <p className="fs-6 ms-2 mt-2">
                                Medical <br /> Services
                            </p>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                        <div className={styles.item_container}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div
                                        // style={{ height: 100, marginLeft: '50px' }}
                                        className={styles.number_count}>
                                        {isVisible ? (
                                            <CountUp isCounting start={0} end={15} duration={2.2} />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                            <div className={styles.line_out}>
                                <div className={styles.line}></div>
                            </div>
                            <p className="fs-6 ms-2 mt-2">
                                Different <br /> Affiliates
                            </p>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                        <div className={styles.item_container}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div
                                        // style={{ height: 100, marginLeft: '50px' }}
                                        className={styles.number_count}>
                                        {isVisible ? (
                                            <CountUp isCounting start={0} end={92} duration={2.2} />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                            <div>
                                <div className={styles.line_out}>
                                    <div className={styles.line}></div>
                                </div>
                                <p className="fs-6 ms-2 mt-2">
                                    Offered <br /> Programs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataCount;
