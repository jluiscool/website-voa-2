import ContactForm from "../components/ContactForm";
import TwitterLogo from '../assets/images/twitter-logo-round.png'
import FacebookLogo from '../assets/images/facebook-logo-round.png'
import LinkedinLogo from '../assets/images/linkedin-logo.png'
import YoutubeLogo from '../assets/images/youtube-logo.png'
import InstagramLogo from '../assets/images/instagram-logo.png'

function ContactUsPage() {
    return (
        <main className='bg-cover bg-no-repeat'>
            <div className='bg-[url("./assets/images/contact-us-bg.webp")] p-[1.5rem] text-center font-bold text-white'>
                <h1 className="">CONTACT US</h1>
            </div>
            <div className="tablet:flex tablet:flex-row tablet:flex-wrap bg-black tablet:justify-between tablet:py-[2rem] tablet:gap-[2rem]">
                <div className="text-white bg-black px-[1.5rem] flex flex-col gap-y-[0.5rem] pt-[1rem] tablet:w-[45%] tablet:p-0 tablet:pl-[2rem] tablet:flex-grow-[1]">
                    <h3>
                        Are you a voice actor? </h3>
                    <h3>
                        Are you a script translator?
                    </h3>
                    <h3>
                        Do you want your project localized?
                    </h3>
                    <h3>
                        Do you need to dub your audiovisual project in multiple languages?
                    </h3>
                    <h3 className="mt-[0.5rem]">
                        SEND US A MESSAGE!!
                    </h3>
                </div>
                <div className="bg-black px-[1.5rem] py-[1.5rem] tablet:p-0 tablet:w-[45%] tablet:pr-[2rem] tablet:flex-grow-[2] tablet:h-full">
                    <ContactForm />
                </div>
                <div className="bg-black px-[1.5rem] flex flex-col gap-y-[1rem] pb-[1.5rem] tablet:p-0 tablet:pl-[2rem] tablet:flex-grow-[1] tablet:text-center">
                    <div>
                        <p className="text-hot-pink">Phone</p>
                        <a href="tel:+17865275099" className="text-white">1-786-527-5099</a>
                    </div>
                    <div>
                        <p className="text-hot-pink">Email</p>
                        <a href="mailto:info@voamiami.com" className="text-white">info@voamiami.com</a>
                    </div>
                    <div className='flex items-center justify-center gap-x-[0.5rem]'>
                        <a href='https://www.linkedin.com/company/voa-studios-miami/' target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinLogo} alt="linkedin logo" className='w-[1.5rem] invert' />
                        </a>
                        <a href="https://www.instagram.com/voastudiosmiami/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramLogo} alt="instagram logo" className='w-[1.5rem]' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCeL3ZfUFNI_myrD3N2yxFUA" target="_blank" rel="noopener noreferrer">
                            <img src={YoutubeLogo} alt="youtube logo" className='w-[1.5rem]' />
                        </a>
                        <a href="https://www.facebook.com/VoaVoiceStudios" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookLogo} alt="facebook logo" className='w-[1.5rem]' />
                        </a>
                        <a href="https://twitter.com/voavoicestudios" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterLogo} alt="twitter logo" className='w-[1.5rem]' />
                        </a>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default ContactUsPage;