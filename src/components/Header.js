import Logo from '../assets/images/voa-logo.png';
import Hamburger from '../assets/images/menu.svg';
import TwitterLogo from '../assets/images/twitter-logo-round.png';
import FacebookLogo from '../assets/images/facebook-logo-round.png';
import LinkedinLogo from '../assets/images/linkedin-logo.png';
import YoutubeLogo from '../assets/images/youtube-logo.png';
import InstagramLogo from '../assets/images/instagram-logo.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

function Header({ toggleModal }) {

    const { page } = useParams();
    const [activePage, setActivePage] = useState(page || '/');

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const isPageActive = (page) => {
        return activePage === page ? 'bg-light-pink' : '';
    };

    return (
        <div>
            <header className='bg-hot-pink flex justify-between items-center w-full h-[20vw] max-h-[125px] p-6 fixed top-0 z-50 tablet:p-[2rem] tablet:justify-start'>
                <Link to="/">
                    <img src={Logo} alt="voa logo" className="h-[15vw] max-h-[4rem] tablet:w-[6rem]" />
                </Link>
                <nav className='hidden text-white tablet:flex justify-start items-center h-[4rem] gap-x-[1rem] mx-auto'>
                    <Link to="/"
                        className={`h-[100%] px-[1rem] flex justify-center items-center hover:underline ${isPageActive('/')}`}
                        onClick={() => handlePageChange('/')}
                    >
                        <button className=''>
                            <p className='tablet:text-[1rem]'>HOME</p>
                        </button>
                    </Link>
                    <Link to="/services"
                        className={`h-[100%] px-[1rem] flex justify-center items-center hover:underline ${isPageActive('/services')}`}
                        onClick={() => handlePageChange('/services')}
                    >
                        <button>
                            <p className='tablet:text-[1rem]'>SERVICES</p>
                        </button>
                    </Link>
                    <Link to="/studios"
                        className={`h-[100%] px-[1rem] flex justify-center items-center hover:underline ${isPageActive('/studios')}`}
                        onClick={() => handlePageChange('/studios')}
                    >
                        <button>
                            <p className='tablet:text-[1rem]'>STUDIOS</p>
                        </button>
                    </Link>
                    <Link to="/the-team"
                        className={`h-[100%] px-[1rem] flex justify-center items-center hover:underline ${isPageActive('/the-team')}`}
                        onClick={() => handlePageChange('/the-team')}
                    >
                        <button>
                            <p className='tablet:text-[1rem]'>THE TEAM</p>
                        </button>
                    </Link>
                    <Link to="/clients"
                        className={`h-[100%] px-[1rem] flex justify-center items-center hover:underline ${isPageActive('/clients')}`}
                        onClick={() => handlePageChange('/clients')}
                    >
                        <button>
                            <p className='tablet:text-[1rem]'>CLIENTS</p>
                        </button>
                    </Link>
                    <Link to="/contact-us"
                        className={`h-[100%] px-[1rem] flex justify-center items-center hover:underline ${isPageActive('/contact-us')}`}
                        onClick={() => handlePageChange('/contact-us')}
                    >
                        <button>
                            <p className='tablet:text-[1rem]'>CONTACT US</p>
                        </button>
                    </Link>
                </nav>
                {/* <div className='h-[4rem] w-[88.615px] hidden tablet:inline desktop:hidden'>

                </div> */}
                <div className="items-center justify-center gap-2 h-[64px] hidden desktop:flex">
                    <a className="h-[50%]" href="https://www.linkedin.com/company/voa-studios-miami/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinLogo} alt="linkedin logo" className="h-[100%] invert" />
                    </a>
                    <a className="h-[50%]" href="https://www.instagram.com/voastudiosmiami/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramLogo} alt="instagram logo" className="h-[100%]" />
                    </a>
                    <a className="h-[50%]" href="https://www.youtube.com/channel/UCeL3ZfUFNI_myrD3N2yxFUA" target="_blank" rel="noopener noreferrer">
                        <img src={YoutubeLogo} alt="youtube logo" className="h-[100%]" />
                    </a>
                    <a className="h-[50%]" href="https://www.facebook.com/VoaVoiceStudios" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookLogo} alt="facebook logo" className="h-[100%]" />
                    </a>
                    <a className="h-[50%]" href="https://twitter.com/voavoicestudios" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterLogo} alt="twitter logo" className="h-[100%]" />
                    </a>
                </div>
                <img src={Hamburger} alt="menu" className="w-[15%] max-w-[4rem] tablet:hidden" onClick={toggleModal} />
            </header>
            <div className="h-[20vw] max-h-[125px]"></div>
        </div>
    );
}

export default Header;