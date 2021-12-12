import Image from 'next/image';
import React from 'react';
import styles from './OurServices.module.css';

const OurServices = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={`${styles.services}`}>
                <div className={styles.itemContainer}>
                    <div className="text-center pt-5">
                        <h2>How we can help you</h2>
                        <p>READ MORE ABOUT OUR SERVICES</p>
                    </div>
                    <div className={`${styles.serviceItem} ${'mt-5'}`}>
                        <div className="row">
                            <div
                                className={`${'col-xxl-4 col-md-4 col-12 mx-auto text-left'} ${
                                    styles.item
                                }`}>
                                <Image
                                    src={'/Images/Doctor-cuate-3.png'}
                                    className="img-fluid float-left "
                                    height={80}
                                    width={80}
                                    alt="Diagnostic"
                                />
                                <h5 className="mt-2">DOCTORS</h5>
                                <small>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    consectetur fuga odio.
                                </small>
                            </div>
                            {/* <div
                                className={`${'col-xxl-4 col-md-4 col-12 mx-auto text-left'} ${
                                    styles.item
                                }`}>
                                <Image
                                    src={'/Images/Medicine-pana.png'}
                                    className="img-fluid"
                                    height={80}
                                    width={80}
                                    alt="pharmacy"
                                />
                                <h5 className="mt-2">Pharmacy</h5>
                                <small>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    consectetur fuga.
                                </small>
                            </div> */}
                            <div
                                className={`${'col-xxl-4 col-md-4 col-12 mx-auto text-left'} ${
                                    styles.item
                                }`}>
                                <Image
                                    src={'/Images/Medicine-pana.png'}
                                    className="img-fluid mx-auto d-block"
                                    height={80}
                                    width={80}
                                    alt="blood"
                                />
                                <h5 className="mt-2">DIAGNOSTICS</h5>
                                <div>
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nostrum consectetur fuga.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
