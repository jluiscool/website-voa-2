import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './ContactForm.scss'
function ContactForm() {
    const [state, handleSubmit] = useForm("mayzrpjk");
    if (state.succeeded) {
        return <p>Thanks for your submission! We'll get back to you shortly.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form__field'>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    className='contact-form__input'
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className='contact-form__field'>
                <textarea
                    id="name"
                    name="name"
                    placeholder='name'
                    className='contact-form__input'
                    required
                />
                <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className='contact-form__field'>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder='phone number'
                    className='contact-form__input'
                    required
                />
                <ValidationError
                    prefix="phone"
                    field="phone"
                    errors={state.errors}
                />
            </div>
            <div className='contact-form__field'>
                <textarea
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="type your message here"
                    className='contact-form__input'
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className='contact-form__button'
            >
                Submit
            </button>
        </form>
    );
}

export default ContactForm;