import "./Home.scss";

import HeroImgVideo from "./HeroImgVideo/HeroImgVideo";
import IntroBlurb from "./IntroBlurb/IntroBlurb";
// import NewsWidget from "./NewsWidget/NewsWidget";
import NewWine from "./NewWine/NewWine";


function Home() {
    return (
        <div className="p-home">
            {/* <NewsWidget /> */}
            <HeroImgVideo />
            <IntroBlurb />
            <NewWine />
        </div>
    );
}

export default Home