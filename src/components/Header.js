import Logo from '../assets/images/voa-logo.png';
import Hamburger from '../assets/images/menu.svg'

function Header({ toggleMenu }) {
    return (
        <header class='bg-hot-pink flex justify-between items-center w-full h-[12vh] p-6'>
            <img src={Logo} alt="voa logo" class="h-[15vw] max-h-[4rem]" />
            <img src={Hamburger} alt="menu" class="w-[15%] max-w-[4rem]" onClick={toggleMenu} />
        </header>
    )
}

export default Header;