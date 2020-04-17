import React from 'react';
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
            width: "400px",
            height: "300px",
        }

        return (
            <div>
                <header>
                    Clayton J. Lewis
               </header>

                <div className="topFlexBox">

                    <article className="topFlexboxItems">

                        <div
                            style={proImage}
                            onMouseEnter={this.changePic1}
                            onMouseLeave={this.changePicBack}
                        >
                            <img src={this.state.picOne} alt="" />
                        </div>

                    </article>

                    <div className="topFlexboxItems" style={{ width: "60%" }}>
                        <p style={{ padding: "10px" }}>
                            HELLO AND WELCOME TO MY PORTFOLIO!<br></br>
                            In this website you will find some history about myself, my experience,
                            and some of the video projects I've done in past so please feel free to take a look around!<br></br>
                            I've stashed some games and quizzes along the way to test out your skills!<br></br>
                            You may find something worth your wild!<br></br>
                            PEACE AND LOVE!


                        </p>
                    </div>
                </div>

                <div className="bottomFlexBox">

                    <div className="bottomFlexboxItems">

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