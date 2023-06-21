import DubNTrans from '../assets/images/DubNTrans.webp';
import Rec from '../assets/images/Rec.webp';
import SDNMix from '../assets/images/SDNMix.webp';
import Triangle from '../assets/images/black-arrow-down.png'

function Services() {
    return (
        <div className="bg-black w-[100%] pt-[1.5rem] tablet:p-[2rem]">
            <div className='flex justify-between items-start px-[1.5rem] tablet:px-[2rem] pb-[.5rem] w-[100%] border-b-white border-b-[3px] border-solid'>
                <div className='w-[30%] flex flex-col justify-start items-center'>
                    <img src={DubNTrans} className='w-[66%] h-[auto] mb-[1rem]' alt="Dubbing & Translation" />
                    <h3 className='text-center text-hot-pink'>Dubbing & Translation</h3>
                </div>
                <div className='w-[30%] flex flex-col justify-start items-center'>
                    <img src={Rec} className='w-[66%] h-[auto] mb-[1rem]' alt="Recording" />
                    <h3 className='text-center text-hot-pink'>Recording</h3>
                </div>
                <div className='w-[30%] flex flex-col justify-start items-center'>
                    <img src={SDNMix} className='w-[66%] h-[auto] mb-[1rem]' alt="sound design and mixing" />
                    <h3 className='text-center text-hot-pink'>Sound Design & Mixing</h3>
                </div>
            </div>
            <div className='flex px-[0.75rem] justify-around relative top-[-10px]'>
                <img src={Triangle} className='w-[30px] invert' alt="triangle" />
                <img src={Triangle} className='w-[30px] invert' alt="triangle" />
                <img src={Triangle} className='w-[30px] invert' alt="triangle" />
            </div>
            <div className='p-[1.5rem] tablet:p-[2rem] pt-[0.1rem]'>
                <div className='flex justify-between gap-[0.5rem]'>
                    <p className='w-[30%] text-center text-white'>Localize your audiovisual project  all around the world, translating it into multiple languages.</p>
                    <p className='w-[30%] text-center text-white'>State of the art equipment to ensure the best vocal quality to meet the requirements of your project. </p>
                    <p className='w-[30%] text-center text-white'>Industry standards specs for your audio post-production needs.</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={Triangle} className='w-[5rem] h-[2rem] relative top-[20px] tablet:top-[70px] tablet:w-[7rem] tablet:h-[4rem]' alt='triangle'/>
            </div>
        </div >
    )
}

export default Services;