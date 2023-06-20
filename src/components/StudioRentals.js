

function StudioRentals({ newHeight }) {
    return (
        <div className={`bg-[url("./assets/images/microphone-studio-rentals.jpg")] bg-cover bg-no-repeat w-[100%] flex flex-col items-center p-[1.5rem] ${newHeight ? `h-[${newHeight}vh] justify-center` : ""}`}>
            <h2 className='text-light-blue mb-[1rem] font-[700] text-[2rem] bg-black/[0.5] rounded-[12px] px-[0.5rem]'>
                RENTALS
            </h2>
            <div className='flex justify-between w-[100%]'>
                <button className='bg-light-blue rounded-[3px] shadow-md shadow-black py-[0.25rem] px-[0.60rem]'>
                    <p className='text-[0.75rem] font-[500]'>SUNBOX</p>
                </button>
                <button className='bg-light-blue rounded-[3px] shadow-md shadow-black py-[0.25rem] px-[0.60rem]'>
                    <p className='text-[0.75rem] font-[500]'>PURPLEBOX</p>
                </button>
                <button className='bg-light-blue rounded-[3px] shadow-md shadow-black py-[0.25rem] px-[0.60rem]'>
                    <p className='text-[0.75rem] font-[500]'>MOONBOX</p>
                </button>
            </div>
        </div>
    )
}

export default StudioRentals;