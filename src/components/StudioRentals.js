function StudioRentals({ newHeight, handleScroll }) {

    function checkScroll(url) {
        if (!handleScroll) {
            window.location.href = '/studios';
        } else {
            handleScroll(url)
        }
    }

    return (
        <div className={`bg-[url("./assets/images/microphone-studio-rentals.jpg")] bg-cover bg-no-repeat w-[100%] flex flex-col items-start p-[1.5rem] tablet:p-[2rem] desktop:px-[9vw] ${newHeight ? `h-[${newHeight}vh] justify-center` : "h-[35vw]"} max-h-[150px] tablet:max-h-[200px] desktop:max-h-[300px]`}>
            <h2 className='text-light-blue mb-[6.5vw] font-[700] bg-black/[0.5] rounded-[12px] px-[0.5rem] mx-auto tablet:px-[2rem]'>
                RENTALS
            </h2>
            <div className='flex justify-between w-[100%]'>
                <button onClick={() => checkScroll("sectionOne")} className='bg-light-blue max-w-[175px] w-[30%] rounded-[3px] shadow-md shadow-black py-[0.25rem] px-[0.60rem]'>
                    <p className='text-[0.75rem] font-[500]'>SUNBOX</p>
                </button>
                <button onClick={() => checkScroll("sectionTwo")} className='bg-light-blue max-w-[175px] w-[30%] rounded-[3px] shadow-md shadow-black py-[0.25rem] px-[0.60rem]'>
                    <p className='text-[0.75rem] font-[500]'>PURPLEBOX</p>
                </button>
                <button onClick={() => checkScroll("sectionThree")} className='bg-light-blue max-w-[175px] w-[30%] rounded-[3px] shadow-md shadow-black py-[0.25rem] px-[0.60rem]'>
                    <p className='text-[0.75rem] font-[500]'>MOONBOX</p>
                </button>
            </div>
        </div>
    )
}

export default StudioRentals;