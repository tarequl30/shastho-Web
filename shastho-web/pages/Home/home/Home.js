import React from 'react';
import AboutUs from '../about_us/AboutUs';
import DataCount from '../DataCount/DataCount';
import Doctors from '../doctors/Doctors';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import OurServices from '../ourServices/OurServices';
import TopBanner from '../topBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <AboutUs />
            <OurServices />
            <Doctors />
            <DataCount />
            <Footer />
            {/* <PatientsTestimonial /> */}
        </div>
    );
};

export default Home;
