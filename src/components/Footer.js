import TwitterLogo from '../assets/images/twitter-logo-round.png'
import FacebookLogo from '../assets/images/facebook-logo-round.png'
import LinkedinLogo from '../assets/images/linkedin-logo.png'
import YoutubeLogo from '../assets/images/youtube-logo.png'
import InstagramLogo from '../assets/images/instagram-logo.png'

function Footer() {
    return (
        <div className='w-[100%] bg-hot-pink flex flex-col items-between p-[1.5rem] gap-y-[1rem] text-white'>
            <div className='  flex justify-between'>
                <p className='font-[500]'>VOA Studios Miami</p>
                <div>
                    <a href="mailto:info@voamiami.com">info@voamiami.com</a>
                    <p>Tel: <a href="tel:+17865275099">1-786-527-5099</a></p>
                </div>
            </div>
            <a href='https://www.google.com/maps?output=search&q=voa+miami+maps&entry=mc&sa=X&ved=2ahUKEwjIuazeptH_AhXlk4kEHRXsBecQ0pQJegQIBhAB' target="_blank">
                <address className='text-center'>1150 SW 22nd St. Miami, FL 33129</address>
            </a>
            <div className='flex items-center justify-center gap-x-[0.5rem]'>
                <img src={LinkedinLogo} alt="linkedin logo" className='w-[1.5rem] invert hover:invert-0' />
                <img src={InstagramLogo} alt="instagram logo" className='w-[1.5rem] hover:invert' />
                <img src={YoutubeLogo} alt="youtube logo" className='w-[1.5rem] hover:invert' />
                <img src={FacebookLogo} alt="facebook logo" className='w-[1.5rem] hover:invert' />
                <img src={TwitterLogo} alt="twitter logo" className='w-[1.5rem] hover:invert' />
            </div>
        </div>
    )
}

export default Footer;