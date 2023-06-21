import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mayzrpjk");
    if (state.succeeded) {
        return <p>Thanks for your submission! We'll get back to you shortly.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='w-[100%] flex flex-col items-start justify-start gap-y-[0.75rem]'>
            <div className='w-[100%]'>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    className='w-[100%] border-black border-[1px] px-[0.75rem] rounded-[3px] hover:border-hot-pink hover:bg-light-blue focus:outline-hot-pink'
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className='w-[100%]'>
                <input
                    type='text'
                    id="name"
                    name="name"
                    placeholder='name'
                    className='w-[100%] border-black border-[1px] px-[0.75rem] rounded-[3px] hover:border-hot-pink hover:bg-light-blue focus:outline-hot-pink'
                    required
                />
                <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className='w-[100%]'>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder='phone number'
                    className='w-[100%] border-black border-[1px] px-[0.75rem] rounded-[3px] hover:border-hot-pink hover:bg-light-blue focus:outline-hot-pink'
                    required
                />
                <ValidationError
                    prefix="phone"
                    field="phone"
                    errors={state.errors}
                />
            </div>
            <div className='w-[100%]'>
                <textarea
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="type your message here"
                    className='w-[100%] border-black border-[1px] px-[0.75rem] rounded-[3px] hover:border-hot-pink hover:bg-light-blue focus:outline-hot-pink'
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
                className='ml-auto bg-dark-gray text-white px-[1.5rem] rounded-[12px] hover:text-light-blue'
            >
                Submit
            </button>
        </form>
    );
}

export default ContactForm;