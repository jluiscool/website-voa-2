// import { ReactComponent as CloseIcon } from '../assets/images/close-svgrepo-com.svg';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

function ModalMenu({ toggleModal }) {
    return ReactDom.createPortal(
        <div className='bg-black/[0.5] fixed top-0 left-0 right-0 bottom-0 z-10'>
            <div className="fixed top-0 left-0 w-[100%] h-[100%] z-10">
                <svg
                    onClick={toggleModal}
                    className='absolute top-[0.6rem] right-[0.5rem]'
                    width="75px"
                    height="75px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_SM">
                        <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
                <nav className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <ul className='flex flex-col gap-y-[1.5rem]'>
                        <Link to="/" onClick={toggleModal}>
                            <li>HOME</li>
                        </Link>
                        <Link to="/services" onClick={toggleModal}>
                            <li>SERVICES</li>
                        </Link>
                        <Link>
                            <li>STUDIOS</li>
                        </Link>
                        <Link>
                            <li>THE TEAM</li>
                        </Link>
                        <Link>
                            <li>CLIENTS</li>
                        </Link>
                        <Link>
                            <li>CONTACT US</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default ModalMenu;