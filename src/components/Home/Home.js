import "./Home.css";

import backgroundVideo from '../../assets/video/background-video.mp4';
import IntroBlurb from "./IntroBlurb/IntroBlurb";
import NewsWidget from "./NewsWidget/NewsWidget";
import NewWine from "./NewWine/NewWine";


function Home() {
    return (
        <div className="p-home">
            <NewsWidget />
            <video className="o-background-video" playsInline autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <h1>Home page here</h1>
            <IntroBlurb />
            <NewWine />
        </div>
    );
}

export default Home