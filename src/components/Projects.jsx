import React from "react";
import '../styles/project.css';
import NavBar from '../side-components/NavBar.jsx';
//import VideoCarousel from '../side-components/VideoCarousel.jsx';
import VideoExpos from '../side-components/VideoExpos.jsx';

const ProjectPage = props => <span className="globalNavBar">{props.page}</span>

class Projects extends React.Component {

    render() {

        return (

            <div className="projectPage">
                <header onClick={() => {alert(window.innerWidth)}}>Projects</header>

                <NavBar
                goHome="Go Home"
                goAboutMe="About Me"
                goExpo="Experience"
                goProjects={<ProjectPage page="Projects"/>}
                />

                <div className="projectBox">
                    <VideoExpos/>
                </div>

            </div >


        )
    }
}


export default Projects;
