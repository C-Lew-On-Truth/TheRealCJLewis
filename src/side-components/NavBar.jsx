import React from 'react';
import '../styles/nav-style.css';

class NavBar extends React.Component {
    
    goHome = () => { window.location.href = "/TheRealCJLewis" }

    goAboutMe = () => { window.location.href = "/TheRealCJLewis/AboutMe" }

    goExperience = () => { window.location.href = "/TheRealCJLewis/Experience" }

    goProjects = () => { window.location.href = "/TheRealCJLewis/Projects" }    

    render() {
        
        return (
           
                <div className="navBar">
    
                    <button onClick={this.goHome}>
                        {this.props.goHome}
                    </button>
    
                    <button onClick={this.goAboutMe}>
                        {this.props.goAboutMe}
                    </button>

                    <button onClick={this.goExperience} >
                        {this.props.goExpo}
                    </button>
    
                    <button onClick={this.goProjects}>
                        {this.props.goProjects}
                    </button>

                </div>
    
        )
    }
}

export default NavBar