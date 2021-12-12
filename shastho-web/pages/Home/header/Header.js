import Logo from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [scrollPosition, setSrollPosition] = useState(0);
    console.log(scrollPosition);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={styles.header_container}>
            <nav
                className={`${'navbar navbar-expand-lg navbar-light'} ${
                    scrollPosition > 13 ? styles.nav_container : styles.navContainer
                }`}>
                <div className={`${'container-fluid'} ${styles.sub_container}`}>
                    <a className="navbar-brand" href="/home">
                        <Logo src={'/Images/logo.png'} width={30} height={30} />
                    </a>
                    <button
                        className={`${'navbar-toggler'} ${styles.myToggler}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link href="/">
                                <a
                                    className="nav-link active text-bold"
                                    aria-current="page"
                                    href="/home">
                                    Home
                                </a>
                            </Link>
                            <Link href="/dashboard/dashboard">
                                <a className="nav-link text-bold" href="#">
                                    Dashboard
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;
