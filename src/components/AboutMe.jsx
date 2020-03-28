import React from 'react';
import aboutMeStyles from '../stylesCSS/aboutme.module.css';
import hockeyPic from '../aboutMePics/willie.jpg';

class AboutMe extends React.Component {
    constructor() {
        super() 
        this.state = {

        }
    };
    render() {
        return(
            <div>
                <header>About Me</header>

                <div className={aboutMeStyles.playBar}>
                    <button>Browser Party</button>
                    <button>Home</button>
                    <button>Experience</button>
                </div>

                <div className={aboutMeStyles.introStyle}>
                    Hello This is Clayton Lewis and i want to see if these words will stay in the damn box!
                    Thats all I really need this element to do, is to keep the words in the fucking square!
                    This paragraph will be a few sentences about my upbring and background! I'm still working
                    out the kinks on what I really want to say, but whatever it is will definitely be compelling. 
                    I look forward to publising this site on GitHub so I can showcase my portfolio to the world!
                    First thing is first! I need to concentrate on ReactJS. Right now that is the KEY!
                    Stay tuned for the next additions! My goal is to turn this project into a CLASSIC! 
                    You as the user will not be dissapointed! My goal in life it make and impact and 
                    have a hot damn time,
                    doing it!
                </div>

                <div className={aboutMeStyles.picHolder}>
                    <img src={hockeyPic}  alt=""/>
                </div>

            </div>
        )
    }
}

export default AboutMe