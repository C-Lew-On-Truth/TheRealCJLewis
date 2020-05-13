import React from 'react';
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
            <div className="expoPage">
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


            </div>
        )
    }
}


export default Experience;
