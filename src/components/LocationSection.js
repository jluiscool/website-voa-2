import GoogleMapsFrame from './GoogleMapsFrame';

function LocationSection() {
    return (
        <div className='w-[100%] flex-col items-start p-[1.5rem] bg-black text-white'>
            <div className='flex flex-col justify-center items-start gap-x-[1rem] mb-[1rem] '>
                <div className='w-[100%] justify-center text-center text-[1.25rem] pb-[1rem]'>
                    <div>
                        <a href='https://www.google.com/maps?output=search&q=voa+miami+maps&entry=mc&sa=X&ved=2ahUKEwjIuazeptH_AhXlk4kEHRXsBecQ0pQJegQIBhAB' target="_blank">
                            <address className='text-center text-[1.5rem] font-[700]'>1150 SW 22nd St. Miami, FL 33129</address>
                        </a>
                    </div>
                    <div>
                        <a className='text-light-pink' href="mailto:info@voamiami.com">info@voamiami.com</a>
                        <p className='text-hot-pink'>Tel: <a href="tel:+17865275099">1-786-527-5099</a></p>
                    </div>
                </div>
                <GoogleMapsFrame />
            </div>
            <div className='flex flex-col justify-start items-center text-[1.25rem] pt-[1rem] text-center'>
                <p>Our studio is open 7 days a week.</p>
                <p>Call us to schedule an appointment. </p>
            </div>
        </div>
    )
}

export default LocationSection;