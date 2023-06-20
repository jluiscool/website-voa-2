import TwitterLogo from '../assets/images/twitter-logo.png';
import FacebookLogo from '../assets/images/facebook-logo.png';
import LinkedinLogo from '../assets/images/linkedin-logo.png';

function TeamMemberCard({ name, email, phone, title, twitter, linkedin, facebook, picture }) {

    return (
        <div className="bg-dark-gray/[0.8] pb-[0.75rem] w-[100%] flex flex-col mb-[1rem] rounded-[3px]">
            <img src={picture} className='rounded-full mx-auto my-[0.75rem] w-[60%]' alt={name} />
            <div className='flex flex-wrap gap-y-[0.5rem] text-white justify-between px-[0.75rem] text-[0.75rem]'>
                <div className='flex justify-between w-[100%]'>
                    <h3 className='team-member-card__title'>{title}</h3>
                    <h2 className='team-member-card__name'>{name}</h2>
                </div>
                <div className='flex justify-between w-[100%]'>
                    <p className='team-member-card__email'>{email}</p>
                    <p className='team-member-card__phone'>{phone}</p>
                </div>
                <div className='flex justify-center w-[100%] gap-x-[1rem] items-center'>
                    <button><p>Read More</p></button>
                    <div className='flex align-center'>
                        <img src={FacebookLogo}  alt="facebook logo" className='invert'/>
                        <img src={TwitterLogo} alt="twitter logo" className='invert'/>
                        <img src={LinkedinLogo} alt="linkedin logo" className='invert'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard;