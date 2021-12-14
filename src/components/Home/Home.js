import "./Home.css";

import HeroImgVideo from "./HeroImgVideo/HeroImgVideo";
import IntroBlurb from "./IntroBlurb/IntroBlurb";
// import NewsWidget from "./NewsWidget/NewsWidget";
import NewWine from "./NewWine/NewWine";


function Home() {
    return (
        <div className="p-home">
            {/* <NewsWidget /> */}
            <HeroImgVideo />
            <h1>Home page here</h1>
            <IntroBlurb />
            <NewWine />
            <div className="block1">
                <div className="gridblock1"></div>
            </div>
            <div className="block2">
                <div className="gridblock2"></div>
            </div>
        </div>
    );
}

export default Home