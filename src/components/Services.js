import './Services.scss'

import DubNTrans from '../../assets/images/DubNTrans.webp';
import Rec from '../../assets/images/Rec.webp';
import SDNMix from '../../assets/images/SDNMix.webp';
import Triangle from '../../assets/images/black-arrow-down.png'

function Services() {
    return (
        <div className="services">
            <div className='services__container'>
                <div className='services__indv'>
                    <img src={DubNTrans} className='services__pic' alt="Dubbing & Translation" />
                    <h2 className='services__title'>Dubbing & Translation</h2>
                </div>
                <div className='services__indv'>
                    <img src={Rec} className='services__pic' alt="Recording" />
                    <h2 className='services__title'>Recording</h2>
                </div>
                <div className='services__indv'>
                    <img src={SDNMix} className='services__pic' alt="sound design and mixing" />
                    <h2 className='services__title'>Sound Design & Mixing</h2>
                </div>
            </div>
            <div className='services__triangles'>
                <img src={Triangle} className='services__triangle-pic' alt="triangle" />
                <img src={Triangle} className='services__triangle-pic' alt="triangle" />
                <img src={Triangle} className='services__triangle-pic' alt="triangle" />
            </div>
            <div className='services__description-container'>
                <div className='services__descriptions'>
                    <p className='services__paragraph'>Localize your audiovisual project  all around the world, translating it into multiple languages.</p>
                    <p className='services__paragraph'>State of the art equipment to ensure the best vocal quality to meet the requirements of your project. </p>
                    <p className='services__paragraph'>Industry standards specs for your audio post-production needs.</p>
                </div>
            </div>
            <div className='services__transition'>
                <img src={Triangle} className='services__transition-triangle' alt='triangle'/>
            </div>
        </div >
    )
}

export default Services;