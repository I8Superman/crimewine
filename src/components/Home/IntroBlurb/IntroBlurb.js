import './Introblurb.scss';

import introblurbMultiImage from '../../../assets/images/introblurb.png';

// import backgroundImage from '../../../../public/images/introblurb-background.jpg';

export default function IntroBlurb() {
    return (
        <div className="c-introblurb">
            <div className="c-introblurb-content">
                <h1 className="c-introblurb-content__header"><span>Skandaløst gode vine til røverpriser</span></h1>
                <p className="c-introblurb-content__top-paragraph"><span>Det nye Bourgogne.</span> Således er Kaiserstuhl, der ligger i Baden i Sydtyskland, blevet omtalt. Det er et naturskønt, gammelt vulkanområde, omgivet af Schwarzwald på den ene side og franske Alsace med Vogeserne på den anden.</p>
                <img className="c-introblurb-content__img" src={introblurbMultiImage} alt="" />
                <p className="c-introblurb-content__bottom-paragraph">Det er det varmeste sted i Tyskland, og forudsætningerne for vindyrkning er optimale. Her frembringes tørre vine af verdensklasse - bl.a. den "klassiske", og i Danmark underkendte, Müller-Thurgau, og "bourgognevine" baseret på pinot-druen - til priser der ligger langt under de tilsvarende franske.</p>
            </div>
        </div>
    );
}