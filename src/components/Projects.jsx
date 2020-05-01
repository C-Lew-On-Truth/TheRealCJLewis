import React from "react";
import '../stylesCSS/project.css';

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

            <div className="mainBox">
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


            </div >


        )
    }
}


export default Projects;
