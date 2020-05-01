import React from 'react';
import VideoExpos from '../side-components/VideoExpos.jsx';
import '../stylesCSS/experience.css';


class Experience extends React.Component {
 
    goHome() {
        window.location.href = "/";
    }

    goAboutMe() {
        window.location.href = "/AboutMe"
    }

    goProjects() {
        window.location.href = "/Projects"
    }

    render() {

    
        return (
            <div className="mainBox">
                <header>Experience</header>

                <div className="playBar">

                    <button onClick={this.goHome}>
                        Go Home
                    </button>

                    <button onClick={this.goAboutMe}>
                        About Me
                    </button>

                    <button onClick={this.goProjects}>
                        Projects
                    </button>

                </div>

                <div className="flexBox1">

                    <div className="flexBoxItems1"></div>

                    <div className="flexBoxItems1">
                      <VideoExpos/>
                    </div>
                </div>

            </div>
        )
    }
}


export default Experience;
