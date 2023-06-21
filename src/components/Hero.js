import Carousel from './Carousel';

function Hero() {

    const slides = [
        '/carousel/voa-neon-logo.png',
        '/carousel/voa-outside-pic.png',
        '/carousel/voa-inside-pic.png',
        '/carousel/voa-inside-lobby.png',
        '/carousel/voa-purplebox-booth.png',
        '/carousel/voa-sunbox-booth.png',
    ]

    return (
        <section className="w-[100%] bg-black flex justify-center items-center">
            <Carousel autoSlide={true}>
                {
                    slides.map((slide, index) => {
                        return (
                            <img
                                key={index}
                                src={slide}
                                alt={slide}
                            />
                        )
                    })
                }
            </Carousel>
        </section>
    )
}

export default Hero;