import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../styles/experience.css';
import {Accordion, ModalBody} from 'react-bootstrap';



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
                <header onClick={() => { alert(window.innerWidth) }}>Experience</header>

                <NavBar
                    goHome="Go Home"
                    goAboutMe="About Me"
                    goExpo={<ExpoPage page="Experience" />}
                    goProjects="Projects"
                />

                    <span className="resume">Resume</span>
                <div className="expoTemp">

                    <section className="expoSect">
                        <p>
                            <h1>Professional Foundation</h1>
                            My foundation as a Media Technology Professional started out as 
                            Format DJ at WNBY 91.3 FM. This happened to be the campus radio station 
                            at Buffalo State College. It was my first chance at creatively expressing myself
                            in a professional radio studio where I had to operate an audio board, 
                            follow on-air protocol, and show on-air listeners my smooth personality splashed
                            with my authentic musical taste! After a few more years I was able to secure an
                            internship at the local TV News station WIVB News Channel 4! I was able to apply 
                            my educational training in corparate news environment which required wearing 
                            many hats such as learning how to be producer, shooter, and editor in a limited 
                            amount of time! I knew what to expect and what was expected of me when stepping
                            into any media environment. I was able to secure my degree in Media Productions 
                            in 2014 while also participating as 4 year Student NCAA athlete on the Mens Hockey Team!    
                        </p>

                    </section>

                    <section className="expoSect">
                        <p>
                            <h1>Employment Growth</h1>
                        </p>
                    </section>

                    <section className="expoSect">
                        <p>
                            <h1>Technicial Knowledge</h1>
                        </p>
                    </section>

                </div>

            </div>
        )
    }
}


export default Experience;
