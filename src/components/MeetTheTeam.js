import TeamMemberCard from './TeamMemberCard';
import TeamMembers from '../assets/TeamMembers.json';

function MeetTheTeam() {

    return (
        <div className='w-[100%] flex flex-col justify-start items-center p-[1.5rem] tablet:p-[2rem] bg-[url("./assets/images/meet-the-team-background.jpg")] bg-cover desktop:px-[9vw]'>
            <h2 className='text-white'>Meet the Team</h2>
            <h3 className='text-white pb-[1rem] text-center'>Dedication. Expertise. Passion. Creativity.</h3>
            <p className='text-black font-[600] pb-[1rem] text-center tablet:pb-[2rem]'>The VOA Team combines more than 25 years of experience in the entertainment industry. Thanks to our expertise in the field of voice over and dubbing localization, VOA Studios Miami guarantees a high-level, quality result of all your audiovisual projects! Our expertise also includes personalized support from the beginning to the end of your project based on your specific needs.</p>
            <div className='w-[100%] flex flex-col gap-y-[1rem] flex-wrap tablet:flex-row tablet:justify-between tablet:gap-y-[2rem]'>
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