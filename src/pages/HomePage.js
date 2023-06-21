import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ServicesOffered from '../components/ServicesOffered';
import StudioRentals from '../components/StudioRentals';
import MeetTheTeam from '../components/MeetTheTeam';
import ContactUsSection from '../components/ContactUsSection';
import LocationSection from '../components/LocationSection';
import ContactButton from '../components/ContactButton';

function HomePage({ navbarHeight }) {
    const contactSectionRef = useRef(null);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
        if (shouldScroll) {
            const targetSectionOffset = contactSectionRef.current.offsetTop;

            window.scrollTo({ top: targetSectionOffset, behavior: 'smooth' });

            setShouldScroll(false);
        }
    }, [shouldScroll]);

    const handleButtonClick = () => {
        setShouldScroll(true);
    };

    return (
        <main className="relative">
            <ContactButton handleButtonClick={handleButtonClick} />
            <Hero />
            <Services />
            <AboutUs />
            <ServicesOffered />
            <StudioRentals />
            <MeetTheTeam />
            <div ref={contactSectionRef}>
                <ContactUsSection />
            </div>
            <LocationSection />
        </main>
    );
}

export default HomePage;