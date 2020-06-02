import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../styles/experience.css';



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
                <div className="expoTemp">

                    <section className="expoSect">
                        <h1>Professional Foundation</h1>
                        <p>
                            During my Junior Year at
                            <a 
                            href="https://suny.buffalostate.edu/"  
                            target="_blank" 
                            rel="noopener noreferrer"
                            > Buffalo State College</a>, <br/>I made a conscious decision to earn a degree
                            in Communications with a specific focus in Media Productions.
         
                      </p>

                    </section>

                    <section className="expoSect">
                        <h1>Employment Growth</h1>
                    </section>

                    <section className="expoSect">
                        <h1>Technicial Knowledge</h1>
                    </section>

                </div>

            </div>
        )
    }
}


export default Experience;
