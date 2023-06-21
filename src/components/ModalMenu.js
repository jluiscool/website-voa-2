// import { ReactComponent as CloseIcon } from '../assets/images/close-svgrepo-com.svg';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import TwitterLogo from '../assets/images/twitter-logo-round.png'
import FacebookLogo from '../assets/images/facebook-logo-round.png'
import LinkedinLogo from '../assets/images/linkedin-logo.png'
import YoutubeLogo from '../assets/images/youtube-logo.png'
import InstagramLogo from '../assets/images/instagram-logo.png'

function ModalMenu({ toggleModal }) {
    return ReactDom.createPortal(
        <div className='bg-black/[0.7] fixed top-0 left-0 right-0 bottom-0 z-100'>
            <div className="fixed top-0 left-0 w-[100%] h-[100%] z-100">
                <svg
                    onClick={toggleModal}
                    className='absolute top-[0.6rem] right-[0.5rem] cursor-pointer w-[70px] h-[70px] stroke-current text-white hover:text-light-blue'
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 16-4-4m0 0L8 8m4 4 4-4m-4 4-4 4" />
                </svg>
                <nav className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[500] text-[1.5rem]'>
                    <ul className='flex flex-col gap-y-[1.5rem] text-center '>
                        <Link to="/" onClick={toggleModal}>
                            <li className='hover:text-light-blue'>HOME</li>
                        </Link>
                        <Link to="/services" onClick={toggleModal}>
                            <li className='hover:text-light-blue'>SERVICES</li>
                        </Link>
                        <Link to="/studios" onClick={toggleModal}>
                            <li className='hover:text-light-blue'>STUDIOS</li>
                        </Link>
                        <Link to="/the-team" onClick={toggleModal}>
                            <li className='hover:text-light-blue'>THE TEAM</li>
                        </Link>
                        <Link to="/clients" onClick={toggleModal}>
                            <li className='hover:text-light-blue'>CLIENTS</li>
                        </Link>
                        <Link to="/contact-us" onClick={toggleModal}>
                            <li className='hover:text-light-blue'>CONTACT US</li>
                        </Link>
                    </ul>
                    <div className='flex items-center justify-center gap-x-[0.5rem] mt-[1.5rem]'>
                        <a href='https://www.linkedin.com/company/voa-studios-miami/' target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinLogo} alt="linkedin logo" className='w-[1.5rem] invert' />
                        </a>
                        <a href="https://www.instagram.com/voastudiosmiami/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramLogo} alt="instagram logo" className='w-[1.5rem] ' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCeL3ZfUFNI_myrD3N2yxFUA" target="_blank" rel="noopener noreferrer">
                            <img src={YoutubeLogo} alt="youtube logo" className='w-[1.5rem] ' />
                        </a>
                        <a href="https://www.facebook.com/VoaVoiceStudios" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookLogo} alt="facebook logo" className='w-[1.5rem] ' />
                        </a>
                        <a href="https://twitter.com/voavoicestudios" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterLogo} alt="twitter logo" className='w-[1.5rem]' />
                        </a>
                    </div>
                </nav>

            </div>
        </div >,
        document.getElementById('portal')
    )
}

export default ModalMenu;