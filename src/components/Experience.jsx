import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../stylesCSS/experience.css';



class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: "blue"
        }

    }

    render() {
   
   


           return (
            
            <div className="expoPage">
                <header>Experience</header>

                <NavBar 
              
                />

            </div>
        )
    }
}


export default Experience;
