function VOSection() {
    return (
        <section className="bg-black">
            <div className='bg-[url("./assets/images/vo-section-bg.webp")] p-[1.5rem]'>
                <div className="text-center relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
                    <h1 className="text-white relative z-10 pb-[1rem]">DUBBING & VOICE OVER</h1>
                    <h2 className="text-light-blue relative z-10">
                        Animated series, short films, audiobooks, feature films, live-action content, podcast, video games, educational videos, commercials...
                    </h2>
                </div>
            </div>
            <div className="text-white text-center p-[1.5rem] flex flex-col gap-y-[0.75rem]">
                <h3>Voice Casting in multiple languages</h3>
                <h3>Script Translation, localization, and adaptation for screen</h3>
                <h3>Dialogue Recording with state of the art thecnology </h3>
                <h3>Editing, mixing, and mastering</h3>
                <h3>Music & Effects recreation</h3>
            </div>
            <iframe className="p-[1.5rem] w-[100%] h-[100%]" src="https://www.youtube.com/embed/Zk6gr0Un1vs" title="YouTube video player" allow="accelerometer; autoplay; picture-in-picture; web-share"></iframe>
            <iframe className="p-[1.5rem] w-[100%] h-[100%]" src="https://www.youtube.com/embed/FaOyc_xPUM8" title="YouTube video player" allow="accelerometer; autoplay; picture-in-picture; web-share"></iframe>
        </section>
    );
}

export default VOSection;