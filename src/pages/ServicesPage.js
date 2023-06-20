function ServicesPage() {
    return (
        <main>
            <section className='bg-[url("./assets/images/services-page-bg.jpg")] bg-cover h-[9rem] flex justify-center items-center'>
                <h1 className="text-white font-bold text-[2rem]">SERVICES</h1>
            </section>
            <section className="bg-black text-white flex flex-col p-[1.5rem] gap-y-[1rem]">
                <p>VOA STUDIOS MIAMI is a professional recording studio located in the hearth of Miami, FL.</p>
                <p>Featuring the best digital tools, VOA offers high quality services to adapted and localized all types of audiovisual formats and platforms.</p>
                <p>Our team is driven by passion and creativity, they focus on making a big sound in an intimate setting.</p>
                <section className="flex justify-between items-center text-[0.75rem] text-light-blue gap-x-[0.5rem]">
                    <button className="border-light-blue border-[1px] hover:border-light-pink">DUBBING, VO & ADAPTATION</button>
                    <button className="border-light-blue border-[1px] hover:border-light-pink">RECORDING, MIXING, & MASTERING</button>
                    <button className="border-light-blue border-[1px] hover:border-light-pink">SOUND DESIGN & VIDEO POST-PROD</button>
                </section>
            </section>
        </main>
    )
}

export default ServicesPage;