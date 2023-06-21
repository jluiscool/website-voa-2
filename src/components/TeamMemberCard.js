import TwitterLogo from '../assets/images/twitter-logo.png';
import FacebookLogo from '../assets/images/facebook-logo.png';
import LinkedinLogo from '../assets/images/linkedin-logo.png';
import { Link } from 'react-router-dom';

function TeamMemberCard({ name, email, phone, title, twitter, linkedin, facebook, picture, description }) {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div id={name} className="bg-dark-gray/[0.8] w-[100%] flex flex-col rounded-[3px] items-start text-white hover:bg-light-blue hover:text-black">
            <img src={picture} className='rounded-full mx-auto my-[0.75rem] w-[55vw] h-[55vw]' alt={name} />
            <div className='flex flex-wrap gap-y-[0.5rem]  justify-between px-[0.75rem] text-[0.75rem]'>
                <div className='flex justify-between w-[100%]'>
                    <h3 className='text-[0.75rem]'>{title}</h3>
                    <h3 className='text-[0.75rem]'>{name}</h3>
                </div>
                {
                    description ? "" :
                        <div className='flex justify-between w-[100%]'>
                            <p className='text-[0.75rem]'>{email}</p>
                            <p className='text-[0.75rem]'>{phone}</p>
                        </div>
                }
                {description ?
                    <div>
                        <p>{description}</p>
                    </div> : ""
                }
                <div className='flex justify-center w-[100%] gap-x-[1rem] items-center pb-[0.75rem]'>
                    {
                        description ? "" :
                            <Link to={`/the-team`} onClick={handleLinkClick}>
                                <button><p>Read More</p></button>
                            </Link>
                    }
                    <div className='flex align-center'>
                        <img src={FacebookLogo} alt="facebook logo" className='invert hover:invert-0' />
                        <img src={TwitterLogo} alt="twitter logo" className='invert hover:invert-0' />
                        <img src={LinkedinLogo} alt="linkedin logo" className='invert hover:invert-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard;