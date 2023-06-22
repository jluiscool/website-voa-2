import TeamMembers from '../assets/TeamMembers.json';
import TeamMemberCard from '../components/TeamMemberCard';

function TheTeamPage() {
    return (
        <main className='bg-[url("./assets/images/the-team-bg.jpg")] p-[1.5rem] bg-cover flex flex-col gap-y-[1rem] tablet:p-[2rem] tablet:justify-between tablet:flex-row tablet:flex-wrap tablet:gap-x-[2rem] tablet:items-start'>
            {
                TeamMembers.map((member, index) => {
                    return (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            title={member.title}
                            email={member.email}
                            phone={member.phone}
                            picture={member.photo}
                            facebook={member.facebook}
                            linkedin={member.linkedin}
                            twitter={member.twitter}
                            description={member.description}
                        />
                    )
                })
            }
        </main>
    )
}

export default TheTeamPage;