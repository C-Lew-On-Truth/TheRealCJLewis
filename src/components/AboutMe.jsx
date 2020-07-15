import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import AutoSlides from '../side-components/AutoSlides.jsx';
import '../styles/about-me.css';
import AutoPics from '../side-components/AutoPics.jsx';


const AboutMePage = props => <span className="globalNavBar">{props.page}</span>

class AboutMe extends React.Component {

    render() {

        return (
            <div className="pageHolder">
                <header onClick={() => { alert(window.innerWidth) }}>About Me</header>

                <NavBar
                    goHome="Go Home"
                    goAboutMe={<AboutMePage page="About Me" />}
                    goExpo="Experience"
                    goProjects="Projects"
                />

                <div className="mainSection">

                    <div className="sectionItems aboutMe">
                        <h1>Bio</h1>
                        <p>
                            I was originally born in Upland, California although, I was raised in Reno, Nevada in the later
                            stages of my youth! I consider myself to be a humble, multifaceted individual with 
                            a habit of always trying to improve in learn in any activities I choose to participate in. 
                            As a leader, I do my best to guide by example and make sure everyone on my team is well informed and well 
                            prepared! 
                            My interest include: Sports, Cooking, and Music! When I was a young child, I became very
                            fond of the game of hockey! So devoted in fact, I was completedly committed to the game for over 
                            15 years. More over, playing in the ranks of Junior A, NCAA and even a few appearance in minor pro in the 
                            FHL! I owe much gratitude to the sport of hockey. It gave me so many opportunities and taught me 
                            so much about how to succeed in life. In fact, if it wasn't for the sport of Hockey I would have 
                            never ended up living and working in New York City! I'm not done yet though! I will continue to improve my skills
                            and experience as I will never shy away from hardwork, dedication, and consistency!
                        </p>
                    </div>

                    <div className="sectionItems autoSlides">
                        <AutoSlides pictures={AutoPics} />
                    </div>

                </div>

            </div>
        )
    }
}

export default AboutMe