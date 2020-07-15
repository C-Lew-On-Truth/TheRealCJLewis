import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../styles/experience.css';




const ExpoPage = props => <span className="globalNavBar">{props.page}</span>

const ExpoModal = () => {
    return(
        <div className='expoPage'>
            <header onClick={() => { alert(window.innerWidth) }}>Experience</header>

            <NavBar
                    goHome="Go Home"
                    goAboutMe="About Me"
                    goExpo={<ExpoPage page="Experience" />}
                    goProjects="Projects"
                />

            <div className="expoContainer">
                <div className="entryTrigger">
                    <h1>Professional Foundation</h1>
                    <div>
                            
                    </div>
                </div>
                <div className="entryTrigger">
                    <h1>Employment Growth</h1>
                </div>
                <div className="entryTrigger">
                    <h1>Seasoned Professional</h1>
                </div>
            </div>
        </div>
    )
}

export default ExpoModal 