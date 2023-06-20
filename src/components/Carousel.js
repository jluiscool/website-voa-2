import { useEffect, useState, useCallback } from "react";
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

    const nextSlide = useCallback(() => {
        setCurrSlide((curr) => {
            return (
                curr === slides.length - 1 ? 0 : curr + 1
            )
        })
    }, [slides.length]);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlideInterval, autoSlide, nextSlide])

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-1000"
                style={{ transform: `translateX(-${currSlide * 100}%)` }}>
                {slides}
            </div>
            <div
                className="absolute inset-0 flex items-center justify-between p-[1rem]">
                <button className="rounded-full hover:bg-hot-pink" onClick={prevSlide}>
                    <ChevronLeft color="#5CC4ED" size="3rem" />
                </button>
                <button className="rounded-full hover:bg-hot-pink" onClick={nextSlide}>
                    <ChevronRight color="#5CC4ED" size="3rem" />
                </button>
            </div>
            <div className='absolute bottom-[1.5rem] flex justify-between items-center w-[100px] left-[50%] ' style={{ transform: `translateX(-50%)` }}>
                {slides.map((button, index) => {
                    return (
                        <div
                            key={index}
                            className={`transition-all duration-1000 rounded-full h-[0.5rem] w-[0.5rem] ${currSlide === index ? 'bg-light-blue p-2' : 'bg-white'}`}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel;