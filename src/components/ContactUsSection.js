import ContactForm from './ContactForm';

function ContactUsSection() {
    return (
        <div className='w-[100%] p-[1.5rem] bg-white flex flex-col  text-black tablet:p-[2rem] tablet:flex-row tablet:gap-y-[2rem] tablet:justify-between desktop:px-[9vw]'>
            <div className='items-center justify-start flex flex-col tablet:w-[45%] tablet:justify-center mb-[3rem]'>
                <h2 className='text-hot-pink font-[700] mb-[0.25rem]'>CONTACT US</h2>
                <h3 className='mb-[0.5rem] '>Need more information?</h3>
                <h4 className='text-[1rem] text-center font-[400] mb-[1.5rem]'>Call us at 1-786-527-5099 or fill out the contact form & we’ll get you started</h4>
            </div>
            <ContactForm isInHomePage={true}/>
        </div>
    )
}

export default ContactUsSection;