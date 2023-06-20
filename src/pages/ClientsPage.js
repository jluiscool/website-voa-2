import Clients from '../assets/Clients.json'

function ClientsPage() {
    return (
        <main>
            <section className='flex justify-center items-center bg-black pt-[1rem]'>
                <h1 className='text-[2rem] font-bold text-white'>CLIENTS</h1>
            </section>
            <section className='flex flex-col justify-start items-start p-[1.5rem] bg-black'>
                {
                    Clients.map((client, index) => {
                        return (
                            <img src={client.photo} key={index} alt={client.name} className='w-[100%] h-[40vw]'/>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default ClientsPage;