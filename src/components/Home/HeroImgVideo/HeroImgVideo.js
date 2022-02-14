import './HeroImgVideo.scss';

import backgroundVideo from '../../../assets/video/background-video.mp4';

export default function HeroImgVideo() {
    return (
        <div className='o-background-video__container'>
            <video className="o-background-video" playsInline autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
        </div>
    )
}