// import { ReactComponent as CloseIcon } from '../assets/images/close-svgrepo-com.svg';
import ReactDom from 'react-dom';

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
                        <li>HOME</li>
                        <li>SERVICES</li>
                        <li>STUDIOS</li>
                        <li>THE TEAM</li>
                        <li>CLIENTS</li>
                        <li>CONTACT US</li>
                    </ul>
                </nav>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default ModalMenu;