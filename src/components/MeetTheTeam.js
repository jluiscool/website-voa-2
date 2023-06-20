import TeamMemberCard from './TeamMemberCard';
import TeamMembers from '../assets/TeamMembers.json';

function MeetTheTeam() {

    return (
        <div className='w-[100%] flex flex-col justify-start items-center p-[1rem] bg-[url("./assets/images/meet-the-team-background.jpg")] bg-cover'>
            <h2 className='text-white text-[1.5rem]'>Meet the Team</h2>
            <h3 className='text-white text-[1rem] pb-[1rem]'>Dedication. Expertise. Passion. Creativity.</h3>
            <p className='text-black text-[0.75rem] font-[600] pb-[1rem] text-center'>The VOA Team combines more than 25 years of experience in the entertainment industry. Thanks to our expertise in the field of voice over and dubbing localization, VOA Studios Miami guarantees a high-level, quality result of all your audiovisual projects! Our expertise also includes personalized support from the beginning to the end of your project based on your specific needs.</p>
            <div className='w-[100%]'>
                {TeamMembers.map((member, index) => {
                    return (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            title={member.title}
                            email={member.email}
                            phone={member.phone}
                            picture={member.picture}
                            facebook={member.facebook}
                            linkedin={member.linkedin}
                            twitter={member.twitter}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MeetTheTeam;