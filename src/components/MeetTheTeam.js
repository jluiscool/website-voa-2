import './MeetTheTeam.scss'
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import TeamMembers from '../assets/TeamMembers.json';

function MeetTheTeam() {

    return (
        <div className='meet-the-team'>
            <h2 className='meet-the-team__title'>Meet the Team</h2>
            <h3 className='meet-the-team__subtitle'>Dedication. Expertise. Passion. Creativity</h3>
            <p className='meet-the-team__description'>The VOA Team combines more than 25 years of experience in the entertainment industry. Thanks to our expertise in the field of voice over and dubbing localization, VOA Studios Miami guarantees a high-level, quality result of all your audiovisual projects! Our expertise also includes personalized support from the beginning to the end of your project based on your specific needs.</p>
            <div className='meet-the-team__members'>
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