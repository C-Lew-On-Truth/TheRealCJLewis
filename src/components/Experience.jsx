import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../stylesCSS/experience.css';


const ExpoPage = props => <span className="globalNavBar">{props.page}</span>

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
                    goExpo={<ExpoPage page="Experience"/>}
                    goProjects="Projects"
                />

            </div>
        )
    }
}


export default Experience;
