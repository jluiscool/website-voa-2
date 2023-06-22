function GoogleMapsFrame() {
    return (
        <div className="flex justify-center items-center w-[100%] tablet:w-[45%] tablet:my-auto tablet:order-3 tablet:h-[275px] h-[50vw]">
            <iframe
                title="Google Maps"
                className='w-[100%] h-[100%] tablet:max-h-[90%]'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.5968779590667!2d-80.21652302372958!3d25.750841509052247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b65c69676e6b%3A0xee7167a334683f3!2sVOA%20Studios%20Miami!5e0!3m2!1sen!2sus!4v1687243687674!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default GoogleMapsFrame;