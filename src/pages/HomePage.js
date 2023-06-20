import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from '../components/AboutUs'
import ServicesOffered from '../components/ServicesOffered'
import StudioRentals from '../components/StudioRentals'
import MeetTheTeam from '../components/MeetTheTeam'
import ContactUsSection from "../components/ContactUsSection";
import LocationSection from '../components/LocationSection'

function HomePage() {

    return (
        <main>
            <Hero />
            <Services />
            <AboutUs />
            <ServicesOffered />
            <StudioRentals />
            <MeetTheTeam />
            <ContactUsSection />
            <LocationSection />
        </main>
    )
}

export default HomePage;