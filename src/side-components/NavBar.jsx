import React from 'react';
import '../stylesCSS/navStyle.css';

class NavBar extends React.Component {
    
    goHome = () => {
        window.location.href = "/";
    }

    goAboutMe = () => {
        window.location.href = "/AboutMe"
    }

    goExperience = () => {
        window.location.href = "/Experience"

    }

    goProjects = () => {
        window.location.href = "/Projects"
    }    

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