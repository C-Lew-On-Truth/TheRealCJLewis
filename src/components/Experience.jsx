import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../stylesCSS/experience.css';


const expoPage = props => <span className="globalNavBar">{props.style}</span>

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "blue"
        }
    } 

    render() {
     
           return (
            
            <div className="expoPage">
                <header>Experience</header>

                <NavBar 
                    goHome="Go Home"
                    goAboutMe="About Me"
                    goExpo={expoPage({style:'Experience'})}
                    goProjects="Projects"
                />

            </div>
        )
    }
}


export default Experience;
