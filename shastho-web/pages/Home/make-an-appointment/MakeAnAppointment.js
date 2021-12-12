import React from 'react';
import styles from './MakeAnAppointment.module.css';

const MakeAnAppointMent = () => {
    return (
        <section className={styles.appointment_container}>
            <div className="row">
                <div
                    className={`${'col-xxl-4 col-lg-4 col-md-4 col-12'} ${
                        styles.appointment_first_card
                    }`}>
                    <h3 style={{ color: '#0078aa' }}>9-3849-832</h3>
                    <h6 className="mt-4 mb-4">CONTACT US </h6>
                    <p style={{ fontSize: '12px', color: '#363636' }}>
                        Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio
                        mattis in. Quisque dapibus aliquet dictum. Integer dapibus ullamcorper est,
                        ac .
                    </p>
                    <button className={styles.btn}>See more</button>
                </div>
                <div
                    className={`${'col-xxl-4 col-lg-4 col-md-4 col-12'} ${
                        styles.appointment_second_card
                    }`}>
                    <h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            fill="currentColor"
                            className={`${'bi bi-calendar'} ${styles.appointment_icon}`}
                            viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                    </h3>
                    <h6 className="mt-4 mb-4">DO YOU WANT TO MAKE AN APPOINTMENT </h6>
                    <p style={{ fontSize: '12px', color: '#363636' }}>
                        Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio
                        mattis in. Quisque dapibus aliquet dictum. Integer dapibus ullamcorper est,
                        ac .
                    </p>
                    <button className={styles.btn}>Book now</button>
                </div>
                <div
                    className={`${'col-xxl-4 col-lg-4 col-md-4 col-12'} ${
                        styles.appointment_first_card
                    }`}>
                    <h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            fill="currentColor"
                            className={`${'bi bi-clock'} ${styles.appointment_icon}`}
                            viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                    </h3>
                    <h5 className="mt-4 mb-4" style={{ fontSize: '12px', color: '#363636' }}>
                        OPENING HOURS
                    </h5>
                    <div style={{ fontSize: '12px', color: '#363636' }}>
                        <p>Monday – Friday</p>
                        <p>Saturtay – Sunday</p>
                    </div>
                    <button className={styles.btn}>See More</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAnAppointMent;
