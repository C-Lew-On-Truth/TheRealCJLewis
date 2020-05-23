import React from 'react';
import '../styles/home-page.css';

import QuestionMark from '../pictures/questionMark.jpg';
import Exclamation from '../pictures/exclamationMark.jpg';
import SmileyFace from '../pictures/smileyFace2.jpg';

class HomePageNavBox extends React.Component {
    render() {
        return (
            <div className="selectFlexBox">
                <section>
                    About Me
                    <div className="imageSwag">
                        <img
                            onClick={() => { window.location.href = "AboutMe" }}
                            src={QuestionMark}
                            alt=""
                        />
                    </div>
                </section>

                <section>
                    Experience
                    <div className="imageSwag">
                        <img
                            onClick={() => { window.location.href = "Experience" }}
                            src={Exclamation}
                            alt=""
                        />
                    </div>
                </section>

                <section>
                    Projects
                    <div className="imageSwag">
                        <img
                            onClick={() => { window.location.href = "Projects" }}
                            src={SmileyFace}
                            alt=""
                        />
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePageNavBox