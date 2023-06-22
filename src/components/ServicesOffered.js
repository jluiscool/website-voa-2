import TranslationService from '../assets/images/translation-service-2.svg';
import DubbingService from '../assets/images/dubbing-service-3.svg';
import VoiceOverService from '../assets/images/voice-over-service.png';
import RecordingService from '../assets/images/recording-service.png';
import MixingService from '../assets/images/mixing-service.png';
import MasteringService from '../assets/images/mastering-service.png';
import SoundDesignService from '../assets/images/sound-design-service.svg';
import MusicService from '../assets/images/music-service.png';
import VideoPostService from '../assets/images/video-post-service.svg';

function ServicesOffered() {
    return (
        <div className='bg-hot-pink w-[100%] flex flex-wrap justify-between p-[24px] tablet:p-[2rem] tablet:py-[3rem] gap-x-[16px] gap-y-[4.5vw] desktop:px-[9vw]'>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]'>
                <img src={TranslationService} className='h-[5vw]' alt="Translation Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] translation-service'>
                    <p className="text-[8px]">TRANSLATION</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  dubbing-service'>
                <img src={DubbingService} className='h-[5vw]' alt="Dubbing Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] dubbing-service'>
                    <p className="text-[8px]">DUBBING</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  voice-over-service'>
                <img src={VoiceOverService} className='h-[5vw]' alt="Voice Over Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] voice-over-service'>
                    <p className="text-[8px]">VOICE OVER</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  recording-service'>
                <img src={RecordingService} className='h-[5vw]' alt="Recording Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] recording-service'>
                    <p className="text-[8px]">RECORDING</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  mixing-service'>
                <img src={MixingService} className='h-[5vw]' alt="Mixing Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] mixing-service'>
                    <p className="text-[8px]">MIXING</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  mastering-service'>
                <img src={MasteringService} className='h-[5vw]' alt="Mastering Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] mastering-service'>
                    <p className="text-[8px]">MASTERING</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  sound-design-service'>
                <img src={SoundDesignService} className='h-[5vw]' alt="Sound Design Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] sound-design-service'>
                    <p className="text-[8px]">SOUND DESIGN</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  music-service'>
                <img src={MusicService} className='h-[5vw]' alt="Music Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] music-service'>
                    <p className="text-[8px]">MUSIC</p>
                </button>
            </div>
            <div className='w-[29%] h-[3rem] tablet:h-[auto] tablet:justify-between flex flex-col items-center justify-between gap-y-[0.5rem]  video-post-service'>
                <img src={VideoPostService} className='h-[5vw]' alt="Video Post Production Service" />
                <button className='w-[90%] m-w-[9.375rem] bg-transparent border-black border-[1px] rounded-[12px] py-[.25rem] video-post-service'>
                    <p className="text-[8px]">VIDEO POST</p>
                </button>
            </div>
        </div>
    )
}

export default ServicesOffered;