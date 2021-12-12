import Image from 'next/image';
import React from 'react';
import styles from './Doctors.module.css';

function Doctors() {
    return (
        <section className={styles.doctors_container}>
            <div style={{ width: '99%' }}>
                <div className="row">
                    <div className={`${'col-xxl-6 col-lg-6 col-md-6 col-12'}`}>
                        <div className={styles.doctors}>
                            <h6 style={{ fontWeight: '300', fontSize: '30px' }}>
                                <span style={{ fontWeight: '600', fontSize: '30px' }}>Dr</span> Shan
                            </h6>
                            <small style={{ color: '#02D3FF' }}>PROFESSIONAL DOCTOR</small>
                            <p
                                style={{
                                    color: '#363636',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    marginTop: '30px'
                                }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum
                                quae expedita illo sed aliquid sit odio tempore. Sed, quasi?
                            </p>
                            <div>
                                <p
                                    style={{
                                        color: '#363636',
                                        fontSize: '12px',
                                        fontWeight: '400'
                                    }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Suscipit ratione natus tenetur earum consequuntur dolor beatae
                                    ipsa facere necessitatibus in adipisicing elit. Suscipit ratione
                                    natus.
                                </p>
                            </div>
                            <button className={styles.doctors_btn}>View All Doctors</button>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6 col-12">
                        <div className={styles.doctor_img}>
                            <Image
                                className={styles.doctor_img_res}
                                src={'/Images/pro_doctor.jpg'}
                                width={677}
                                height={497}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Doctors;
