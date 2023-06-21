import StudioRentals from "../components/StudioRentals";
import sunbox1 from '../assets/images/sunbox-1.webp'
import sunbox2 from '../assets/images/sunbox-2.webp'
import sunbox3 from '../assets/images/sunbox-3.webp'
import moonbox1 from '../assets/images/moonbox-1.webp'
import moonbox2 from '../assets/images/moonbox-2.webp'
import moonbox3 from '../assets/images/moonbox-3.webp'
import moonbox4 from '../assets/images/moonbox-4.webp'
import purplebox1 from '../assets/images/purplebox-1.webp'
import purplebox2 from '../assets/images/purplebox-2.webp'
import purplebox3 from '../assets/images/purplebox-3.webp'
import purplebox4 from '../assets/images/purplebox-4.webp'
import { useRef } from "react";


function StudiosPage() {

    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const sectionThreeRef = useRef(null);

    const handleScrollToSection = (section) => {
        let ref;
        switch (section) {
            case 'sectionOne':
                ref = sectionOneRef;
                break;
            case 'sectionTwo':
                ref = sectionTwoRef;
                break;
            case 'sectionThree':
                ref = sectionThreeRef;
                break;
            default:
                ref = null;
        }

        if (ref) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const newHeight = 70;

    return (
        <main>
            <StudioRentals newHeight={newHeight} handleScroll={handleScrollToSection} />
            <div className="bg-light-pink flex flex-col gap-y-[0.3rem] pt-[0.3rem]">
                <div ref={sectionOneRef}>
                    <div className="bg-[url('./assets/images/sunbox-bg.jpg')] bg-cover h-[20vw] flex justify-center items-center">
                        <h2 className="font-bold text-black-pink text-[1.5rem] text-sunbox drop-shadow-title">SUNBOX</h2>
                    </div>
                    <div>
                        <img src={sunbox1} alt="sunbox room" />
                        <img src={sunbox2} alt="sunbox room" />
                        <img src={sunbox3} alt="sunbox room" />
                    </div>
                </div>
                <div ref={sectionTwoRef}>
                    <div className="bg-[url('./assets/images/moonbox-bg.jpg')] bg-cover h-[20vw] flex justify-center items-center">
                        <h2 className="font-bold text-black-pink text-[1.5rem] text-light-blue drop-shadow-title">MOONBOX</h2>
                    </div>
                    <div>
                        <img src={moonbox1} alt="moonbox room" />
                        <img src={moonbox2} alt="moonbox room" />
                        <img src={moonbox3} alt="moonbox room" />
                        <img src={moonbox4} alt="moonbox room" />
                    </div>
                </div>
                <div ref={sectionThreeRef}>
                    <div className="bg-[url('./assets/images/moonbox-bg.jpg')] bg-cover h-[20vw] flex justify-center items-center">
                        <h2 className="font-bold text-purplebox text-[1.5rem] drop-shadow-title-purplebox">PURPLEBOX</h2>
                    </div>
                    <div>
                        <img src={purplebox1} alt="purplebox room" />
                        <img src={purplebox2} alt="purplebox room" />
                        <img src={purplebox3} alt="purplebox room" />
                        <img src={purplebox4} alt="purplebox room" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default StudiosPage;