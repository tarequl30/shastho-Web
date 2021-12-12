import React from 'react';
import MakeAnAppointMent from '../make-an-appointment/MakeAnAppointment';
import styles from './TopBanner.module.css';

const TopBanner = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.banner_title}>
                <h1 className={styles.TopLine}>
                    {' '}
                    <span className={styles.HealthColor}> Health Solution In </span>
                    <br /> Finger Tips
                </h1>
                <button className={styles.AppBtn}>GET THE APP </button>
            </div>
            <div>
                <MakeAnAppointMent />
            </div>
        </section>
    );
};

export default TopBanner;
