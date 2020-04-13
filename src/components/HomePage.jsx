import React from 'react';
import homeStyles from '../stylesCSS/homepage.module.css';
import '../stylesCSS/homePage.css';

//Imported Pictures
import QuestionMark from '../assets/questionMark.jpg';
import Exclamation from '../assets/exclamationMark.jpg';
import SmileyFace from '../assets/smileyFace2.jpg';
import ProfilePic from '../assets/profile-pic.jpg';
import Cheesin from '../assets/StraightCheesin.jpg';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picOne: ProfilePic,
        }
        this.changePic1 = this.changePic1.bind(this)
        this.changePicBack = this.changePicBack.bind(this)
    }

    changePic1() {
        this.setState(
            {
                picOne: Cheesin
            }
        )
    }

    changePicBack() {
        this.setState(
            {
                picOne: ProfilePic
            }
        )
    }

    render() {
        const imageSwag = {
            marginTop: "4px",
            border: "white ridge 5px",
            width: "150px",
            height: "150px",
            cursor: "pointer"
        }

        const proImage = {
            width: "300px",
            height: "300px",
        }

        return (
            <div>
                <header>
                    Clayton J. Lewis
               </header>

                <div className="topFlexBox">

                    <article className="topFlexboxItems">

                        <div style={proImage} onMouseEnter={this.changePic1} onMouseLeave={this.changePicBack}>
                            <img src={this.state.picOne} />
                        </div>

                    </article>

                    <div className="topFlexboxItems">
                        <p style={{ padding: "20px" }}>
                            Hello this is a test and I want to make sure my grid is functioning the right way.<br></br>
                    It feels great to be productive while being creative at the same time! <br></br>
                    Learning to code has been a struggle, but I feel that I am learning something new <br></br>
                    everyday! I consider myself a jack of all trades, and have experience in media, <br></br>
                    sports, and the culinary arts! Now I'm expanding my horizon in the world of technology!<br></br>
                    I am now learning how to be a professional coder! This site is a glimpse of my skills!
                        </p>
                    </div>
                </div>

                <div className="bottomFlexBox">

                    <div className={homeStyles.bottomFlexboxItems}>

                        <p style={{ padding: "10px" }}>

                            <b style={{ fontSize: "30px" }}>CONTACT INFORMATION</b><br></br>

                            Email:<br></br>
                            lewisclayton89@gmail.com<br></br>
                            Phone:<br></br>
                            775-233-7630<br></br>
                            Address:<br></br>
                            614 W. 146th Street. Apt#4
                            New York, New York, 10031

                        </p>

                    </div>

                    <div className="bottomFlexboxItems" style={{ width: "60%" }}>

                        <div className="selectFlexBox">
                            <section>
                                About Me
                                <div style={imageSwag}>
                                    <img
                                        onClick={() => { window.location.href = "AboutMe" }}
                                        src={QuestionMark}
                                        alt=""
                                    />
                                </div>

                            </section>

                            <section>
                                Experience
                                <div style={imageSwag}>
                                    <img
                                        onClick={() => { window.location.href = "Experience" }}
                                        src={Exclamation}
                                        alt=""
                                    />
                                </div>

                            </section>

                            <section>
                                Projects
                                <div style={imageSwag}>
                                    <img
                                        onClick={() => { window.location.href = "Projects" }}
                                        src={SmileyFace}
                                        alt=""
                                    />
                                </div>

                            </section>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default HomePage