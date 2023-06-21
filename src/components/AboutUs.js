
function AboutUs() {
    return (
        <div className='bg-white flex flex-col px-[1.5rem] tablet:px-[2rem]'>
            <h1 className='text-hot-pink font-bold text-center my-[1rem] tablet:my-[1.5rem]'>VOA Miami</h1>
            <p className='mb-[1rem]'>VOA STUDIOS MIAMI is a boutique audio production house located in the heart of Miami, specializing in dubbing, voice over, audio post-production, mixing and all audio related work. ​</p>
            <p className='mb-[1rem]'>Founded in 2007, VOA STUDIOS became a major player in the audiovisual world in France and internationally. It quickly established itself as a benchmark in the communications and media world. Later, VOA STUDIOS MIAMI re-birthed in the late 2020's in the midst of the pandemic gaining independence from the France studio and is now a sister company. </p>
            <p className='mb-[1rem]'>VOA STUDIOS MIAMI has expertise in the field of audio production, and is notorious all around the world. We work with many different types of audiovisual content: podcasts, audiobooks, TV series, advertisement campaigns, toys, animation series, short films, applications, video games, feature films, and dubbing foreign live action content as well.</p>
            <p className='mb-[1.5rem] tablet:mb-[2rem]'>We offer full dubbing services in Miami from script adaptation, to casting, sound design and mixing. VOA MIAMI is the best place to localize your content wherever you need.</p>
            <iframe
                className="mb-[1.5rem] w-[100%] h-[45vw] tablet:mb-[2rem]"
                src="https://www.youtube.com/embed/WagefXarPhE"
                title="YouTube video player"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default AboutUs;