import Link from 'next/link';
import React from 'react';
import Appointment from '../../components/appointment/Appointment';
import styles from './dashboard.module.css';

const dashboard = () => {
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
                    Shastho
                </a>
                <button
                    className={`${'navbar-toggler d-md-none collapsed'} ${styles.menuIcon} `}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className={`${'navbar-toggler-icon'}`}></span>
                </button>
                <div className={`${'navbar-nav'} ${styles.signOut}`}>
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">
                            Sign out
                        </a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className={`${'col-md-3 col-lg-2 d-md-block  sidebar collapse'} ${
                            styles.sideBar
                        }`}>
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a
                                            className="nav-link active"
                                            style={{ color: '#02D6FF' }}
                                            aria-current="page">
                                            <span data-feather="home"></span>
                                            Doctors Appointment
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item d-md-none">
                                    <a
                                        className={`${'nav-link active'} ${styles.signOut2}`}
                                        aria-current="page"
                                        href="#">
                                        <span data-feather="home"></span>
                                        Sign Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Appointment />
                </div>
            </div>
        </div>
    );
};

export default dashboard;
