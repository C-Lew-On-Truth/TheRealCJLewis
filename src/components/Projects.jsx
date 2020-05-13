import React from "react";
import '../stylesCSS/project.css';
import VideoCarousel from '../side-components/VideoCarousel.jsx';
//import VideoExpos from '../side-components/VideoExpos.jsx';

class Projects extends React.Component {

    goHome() {
        window.location.href = "/";
    };

    goAboutMe() {
        window.location.href = "/AboutMe";
    };

    goExperience() {
        window.location.href = "/Experience"
    }

    render() {

        return (

            <div className="projectContainer">
                <header>Projects</header>

                <div className="playBar">
                    <button onClick={this.goHome}>
                        Go Home
                    </button>

                    <button onClick={this.goAboutMe}>
                        About Me
                    </button>

                    <button onClick={this.goExperience}>
                        Experience
                    </button>
                </div>

                <div className="projectBox">
                    <div className="projectBoxItems1">
                        <h3>Sunday Skate Video</h3>
                        <p>
                            This is a video I worked on when I was in my Senior year in College!
                            I decided to do a documentary on a local Skate Shop and how its existence
                            has influenced the neighboring community and the city of Buffalo as a whole!
                        </p>
                        <h3>Buffalo Demo Package</h3>
                        <p>
                            I was fortunate enough to land an internship at WIVB Channel 4 Buffalo as a
                            sports production assistant! During my time I learned a lot about the news industry
                            and when I was asked to create a package of my own, I COULD NOT REFUSE!
                        </p>
                       <h3>Sweet Plans of Revenge</h3>
                       <p>
                           This is the first video I've ever produced! In my first Basic Production class
                           our professor assigned us all to pick a name out a hat and to make a creative video 
                           from the specific name! 
                       </p>
                      
                    </div>
                    <div className="projectBoxItems2">
                        <VideoCarousel />
                    </div>
                </div>

            </div >


        )
    }
}


export default Projects;
