import IntroBlurb from "./IntroBlurb/IntroBlurb";
import NewsWidget from "./NewsWidget/NewsWidget";
import NewWine from "./NewWine/NewWine";

import backgroundVideo from '../../assets/video/background-video.mp4';

export default function Home() {
    return (
        <div className="c-logo">
            <h1>Home page here</h1>
            <video playsInline autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <NewsWidget />
            <IntroBlurb />
            <NewWine />
        </div>
    );
}