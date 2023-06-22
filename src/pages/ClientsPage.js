import Clients from '../assets/Clients.json'

function ClientsPage() {
    return (
        <main>
            <section className='flex justify-center items-center bg-black pt-[1rem]'>
                <h1 className='font-bold text-white'>CLIENTS</h1>
            </section>
            <section className='flex flex-col justify-start items-start p-[1.5rem] bg-black gap-y-[1rem] tablet:p-[2rem] tablet:flex-row tablet:flex-wrap tablet:gap-x-[2rem] tablet:justify-between desktop:px-[9vw]'>
                {
                    Clients.map((client, index) => {
                        return (
                            <img src={client.photo} key={index} alt={client.name} className='w-[100%] h-[40vw] border-light-blue border-[3px] tablet:w-[47%] tablet:h-[25vw]'/>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default ClientsPage;