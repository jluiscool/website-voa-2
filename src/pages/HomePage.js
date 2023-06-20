import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from '../components/AboutUs'
import ServicesOffered from '../components/ServicesOffered'
import StudioRentals from '../components/StudioRentals'
import MeetTheTeam from '../components/MeetTheTeam'

function HomePage() {

    return (
        <main>
            <Hero />
            <Services />
            <AboutUs />
            <ServicesOffered />
            <StudioRentals />
            <MeetTheTeam />
            
        </main>
    )
}

export default HomePage;