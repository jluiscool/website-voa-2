import './ServicesOffered.scss';
import TranslationService from '../../assets/images/translation-service-2.svg';
import DubbingService from '../../assets/images/dubbing-service-3.svg';
import VoiceOverService from '../../assets/images/voice-over-service.png';
import RecordingService from '../../assets/images/recording-service.png';
import MixingService from '../../assets/images/mixing-service.png';
import MasteringService from '../../assets/images/mastering-service.png';
import SoundDesignService from '../../assets/images/sound-design-service.svg';
import MusicService from '../../assets/images/music-service.png';
import VideoPostService from '../../assets/images/video-post-service.svg';

function ServicesOffered() {
    return (
        <div className='services-offered'>
            <div className='services-offered__service'>
                <img src={TranslationService} className='services-offered__img' alt="Translation Service"/>
                <button className='services-offered__button translation-service'>
                    <p className="services-offered__button-text">TRANSLATION</p>
                </button>
            </div>
            <div className='services-offered__service dubbing-service'>
                <img src={DubbingService} className='services-offered__img' alt="Dubbing Service"/>
                <button className='services-offered__button dubbing-service'>
                    <p className="services-offered__button-text">DUBBING</p>
                </button>
            </div>
            <div className='services-offered__service voice-over-service'>
                <img src={VoiceOverService} className='services-offered__img' alt="Voice Over Service"/>
                <button className='services-offered__button voice-over-service'>
                <p className="services-offered__button-text">VOICE OVER</p>
                </button>
            </div>
            <div className='services-offered__service recording-service'>
                <img src={RecordingService} className='services-offered__img' alt="Recording Service" />
                <button className='services-offered__button recording-service'>
                <p className="services-offered__button-text">RECORDING</p>
                </button>
            </div>
            <div className='services-offered__service mixing-service'>
                <img src={MixingService} className='services-offered__img' alt="Mixing Service"/>
                <button className='services-offered__button mixing-service'>
                <p className="services-offered__button-text">MIXING</p>
                </button>
            </div>
            <div className='services-offered__service mastering-service'>
                <img src={MasteringService} className='services-offered__img' alt="Mastering Service"/>
                <button className='services-offered__button mastering-service'>
                <p className="services-offered__button-text">MASTERING</p>
                </button>
            </div>
            <div className='services-offered__service sound-design-service'>
                <img src={SoundDesignService} className='services-offered__img' alt="Sound Design Service" />
                <button className='services-offered__button sound-design-service'>
                <p className="services-offered__button-text">SOUND DESIGN</p>
                </button>
            </div>
            <div className='services-offered__service music-service'>
                <img src={MusicService} className='services-offered__img' alt="Music Service" />
                <button className='services-offered__button music-service'>
                <p className="services-offered__button-text">MUSIC</p>
                </button>
            </div>
            <div className='services-offered__service video-post-service'>
                <img src={VideoPostService} className='services-offered__img' alt="Video Post Production Service"/>
                <button className='services-offered__button video-post-service'>
                <p className="services-offered__button-text">VIDEO POST</p>
                </button>
            </div>
        </div>
    )
}

export default ServicesOffered;