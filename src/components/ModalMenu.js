// import { ReactComponent as CloseIcon } from '../assets/images/close-svgrepo-com.svg';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

function ModalMenu({ toggleModal }) {
    return ReactDom.createPortal(
        <div className='bg-black/[0.7] fixed top-0 left-0 right-0 bottom-0 z-10'>
            <div className="fixed top-0 left-0 w-[100%] h-[100%] z-10">
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
                        <Link>
                            <li className='hover:text-light-blue'>CONTACT US</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div >,
        document.getElementById('portal')
    )
}

export default ModalMenu;