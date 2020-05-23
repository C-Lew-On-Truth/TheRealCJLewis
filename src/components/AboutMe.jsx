import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import AutoSlides from '../side-components/AutoSlides.jsx';
import '../styles/about-me.css';
import AutoPics from '../side-components/AutoPics.jsx';

const AboutMePage = props => <span className="globalNavBar">{props.page}</span>

class AboutMe extends React.Component {
  
    render() {

        return (
            <div className="mainBox">
                <header>About Me</header>

                <NavBar
                goHome="Go Home"
                goAboutMe={<AboutMePage page="About Me"/>}
                goExpo="Experience"
                goProjects="Projects"
                />
   
                <div className="mainSection">

                    <div className="sectionItems aboutMe">
                        <p style={{ padding: "20px"}}>
                            Before I was introduced to the world of Media and Technology I was a Hockey Player!
                            My hockey career took me all the way to Buffalo State College where I was introduced
                            to the world of Media!
                            After I graduated I decided
                            to take my career to the next step by relocating to New York City where I currently reside!
                            I was able to accomplish my goals to becoming employed by a vareity of media corporations like
                            the NHL, Adobe, Meredith, and New York One News! However, it was at Adobe where I learned about
                            the practices of programming languages and writing code! The art of learning how to program in itself
                            can be discouraging and seem impossible, but if you stick with it your vision will indeed become a reality and
                            fulfilling that reality makes it all worth it!
                            
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