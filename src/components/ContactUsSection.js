import ContactForm from './ContactForm';

function ContactUsSection() {
    return (
        <div className='w-[100%] p-[1.5rem] bg-white flex flex-col items-center justify-start text-black '>
            <h2 className='text-hot-pink font-[700] text-[1.5rem] mb-[0.25rem]'>CONTACT US</h2>
            <h3 className='text-[1rem] mb-[0.5rem] '>Need more information?</h3>
            <h4 className='text-[0.75rem] text-center font-[600]'>Call us at 1-786-527-5099 or fill out the contact form & we’ll get you started</h4>
            <ContactForm />
        </div>
    )
}

export default ContactUsSection;