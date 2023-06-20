import GoogleMapsFrame from '../GoogleMapsFrame/GoogleMapsFrame';

function LocationSection() {
    return (
        <div className='location-section'>
            <div className='location-section__info'>
                <div className='location-section__contact'>
                    <div>
                        <p>1150 SW 22nd St. Miami, FL 33129</p>
                    </div>
                    <div>
                        <p>Info@voamiami.com Cell: 1-786-527-5099</p>
                    </div>
                </div>
                <GoogleMapsFrame />
            </div>
            <div className='location-section__schedule'>
                <p>Our studio is open 7 days a week.</p>
                <p>Call us to schedule an appointment. </p>
            </div>
        </div>
    )
}

export default LocationSection;