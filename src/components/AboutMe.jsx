import React from 'react';
import AutoSlides from '../side-components/AutoSlides.jsx';
import '../stylesCSS/aboutMe.css';

import Food from '../assets/Food.JPG';
import Lizard from '../assets/Amilion.jpg';
import BShockey from '../assets/BsThrowBack.jpg'
import Willie from '../assets/willie.jpg'

const ImageKey = [
    {
        image: Food
    },
    {
        image: Lizard
    },
    {
        image: BShockey
    },
    {
        image: Willie
    }

];

class AboutMe extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "You have an Alert",
        }

    }
    goHome() {
        window.location.href = "/";
    }

    goExperience() {
        window.location.href = "/Experience"
    }

    goProjects() {
        window.location.href = "/Projects"
    }

    render() {

        return (
            <div className="mainBox">
                <header>About Me</header>

                <div className="playBar">

                    <button onClick={this.goHome}>
                        Go Home
                    </button>

                    <button onClick={this.goExperience}>
                        Experience
                    </button>

                    <button onClick={this.goProjects}>
                        Projects
                    </button>

                </div>
   
                <div className="mainSection">

                    <div className="sectionItems" style={{border:"white dashed 5px"}}>
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

                    <div className="sectionItems">
                        <AutoSlides pictures={ImageKey} />
                    </div>

                </div>

            </div>
        )
    }
}

export default AboutMe