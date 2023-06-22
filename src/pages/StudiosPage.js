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
        <main className="">
            <StudioRentals newHeight={newHeight} handleScroll={handleScrollToSection} />
            <div className="bg-light-blue flex-col gap-y-[0.3rem] pb-[1rem] pt-[0.25rem]">
                <div ref={sectionOneRef}>
                    <div className="bg-[url('./assets/images/sunbox-bg.jpg')] bg-cover h-[20vw] flex justify-center items-center relative tablet:max-h-[175px]">
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <h2 className="font-bold text-black-pink text-[1.5rem] text-sunbox drop-shadow-title">SUNBOX</h2>
                    </div>
                    <div className="flex flex-col gap-y-[0.5rem] px-[1.5rem] pt-[1rem] tablet:px-[2rem] tablet:pt-[2rem] desktop:px-[9vw]">
                        <img src={sunbox1} alt="sunbox room" className="border-[3px] border-light-pink" />
                        <img src={sunbox2} alt="sunbox room" className="border-[3px] border-light-pink" />
                        <img src={sunbox3} alt="sunbox room" className="border-[3px] border-light-pink" />
                    </div>
                </div>
                <div ref={sectionThreeRef} className="pt-[1rem] tablet:pt-[2rem]">
                    <div className="bg-[url('./assets/images/moonbox-bg.jpg')] bg-cover h-[20vw] flex justify-center items-center relative tablet:max-h-[175px]">
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <h2 className="font-bold text-black-pink text-[1.5rem] text-light-blue drop-shadow-title">MOONBOX</h2>
                    </div>
                    <div className="flex flex-col gap-y-[0.5rem] px-[1.5rem] py-[1rem] tablet:px-[2rem] tablet:py-[2rem] desktop:px-[9vw]">
                        <img src={moonbox1} alt="moonbox room" className="border-[3px] border-light-pink" />
                        <img src={moonbox2} alt="moonbox room" className="border-[3px] border-light-pink" />
                        <img src={moonbox3} alt="moonbox room" className="border-[3px] border-light-pink" />
                        <img src={moonbox4} alt="moonbox room" className="border-[3px] border-light-pink" />
                    </div>
                </div>
                <div ref={sectionTwoRef}>
                    <div className="bg-[url('./assets/images/moonbox-bg.jpg')] bg-cover h-[20vw] flex justify-center items-center relative tablet:max-h-[175px]">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <h2 className="font-bold text-purplebox text-[1.5rem] drop-shadow-title">PURPLEBOX</h2>
                    </div>
                    <div className="flex flex-col gap-y-[0.5rem] px-[1.5rem] py-[1rem] tablet:px-[2rem] tablet:py-[2rem] desktop:px-[9vw]">
                        <img src={purplebox1} alt="purplebox room" className="border-[3px] border-light-pink" />
                        <img src={purplebox2} alt="purplebox room" className="border-[3px] border-light-pink" />
                        <img src={purplebox3} alt="purplebox room" className="border-[3px] border-light-pink" />
                        <img src={purplebox4} alt="purplebox room" className="border-[3px] border-light-pink" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default StudiosPage;