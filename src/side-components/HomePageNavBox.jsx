import React from 'react';
import '../styles/home-page.css';

import { Link } from 'react-router-dom';

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
                        <Link to="/AboutMe">
                            <img
                                src={QuestionMark}
                                alt=""
                            />
                        </Link>
                    </div>
                </section>

                <section>
                    Experience
                    <div className="imageSwag">
                        <Link to="/Experience">
                            <img
                                src={Exclamation}
                                alt=""
                            />
                        </Link>
                    </div>
                </section>

                <section>
                    Projects
                    <div className="imageSwag">
                        <Link to="Projects">
                            <img
                                src={SmileyFace}
                                alt=""
                            />
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePageNavBox