import React from 'react';
import '../styles/nav-style.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        
        return (
           
                <div className="navBar">
    
                    <Link className="button" to="/TheRealCJLewis">
                        {this.props.goHome}
                    </Link>
    
                    <Link className="button" to="/TheRealCJLewis/AboutMe">
                        {this.props.goAboutMe}
                    </Link>

                    <Link className="button" to="/TheRealCJLewis/Experience">
                        {this.props.goExpo}
                    </Link>
    
                    <Link className="button" to="/TheRealCJLewis/Projects">
                        {this.props.goProjects}
                    </Link>

                </div>
    
        )
    }
}

export default NavBar