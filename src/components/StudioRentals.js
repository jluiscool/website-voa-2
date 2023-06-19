import './StudioRentals.scss';

function StudioRentals() {
    return (
        <div className='studio-rentals'>
            <h2 className='studio-rentals__title'>RENTALS</h2>
            <div className='studio-rentals__button-section'>
                <button className='studio-rentals__button'>
                    <p className='studio-rentals__button-text'>SUNBOX</p>
                </button>
                <button className='studio-rentals__button'>
                    <p className='studio-rentals__button-text'>PURPLEBOX</p>
                </button>
                <button className='studio-rentals__button'>
                    <p className='studio-rentals__button-text'>MOONBOX</p>
                </button>
            </div>
        </div>
    )
}

export default StudioRentals;