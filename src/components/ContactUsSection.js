import ContactForm from '../ContactForm/ContactForm';

function ContactUsSection() {
    return (
        <div className='contact-us-section'>
            <h2 className='contact-us-section__title'>CONTACT US</h2>
            <h3 className='contact-us-section__subtitle'>Need more information?</h3>
            <h4 className='contact-us-section__info'>Call us at 1-786-527-5099 or fill out the contact form & we’ll get you started</h4>
            <ContactForm />
        </div>
    )
}

export default ContactUsSection;