import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 4000,
}) {

    const [currSlide, setCurrSlide] = useState(0);

    const prevSlide = () => {
        setCurrSlide((curr) => {
            return (
                curr === 0 ? slides.length - 1 : curr - 1
            )
        })
    }

    const nextSlide = () => {
        setCurrSlide((curr) => {
            return (
                curr === slides.length - 1 ? 0 : curr + 1
            )
        })
    }

    useEffect(() => {
        if(!autoSlide) return;
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div class="overflow-hidden relative">
            <div
                class="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currSlide * 100}%)` }}>
                {slides}
            </div>
            <div
                class="absolute inset-0 flex items-center justify-between p-[1rem]">
                <button class="rounded-full hover:bg-hot-pink" onClick={prevSlide}>
                    <ChevronLeft color="#5CC4ED" size="3rem" />
                </button>
                <button class="rounded-full hover:bg-hot-pink" onClick={nextSlide}>
                    <ChevronRight color="#5CC4ED" size="3rem" />
                </button>
            </div>
            <div class='absolute bottom-[1.5rem] flex justify-between items-center w-[100px] left-[50%] ' style={{ transform: `translateX(-50%)` }}>
                {slides.map((button, index) => {
                    return (
                        <div
                            key={index}
                            class={`transition-all rounded-full h-[0.5rem] w-[0.5rem] bg-white ${currSlide === index ? 'bg-light-blue p-2' : 'bg-white'}`}

                        >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel;