import React from 'react';
import '../styles/nav-style.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        
        return (
           
                <div className="navBar">
    
                    <Link className="button" to="/">
                        {this.props.goHome}
                    </Link>
    
                    <Link className="button" to="/AboutMe">
                        {this.props.goAboutMe}
                    </Link>

                    <Link className="button" to="/Experience">
                        {this.props.goExpo}
                    </Link>
    
                    <Link className="button" to="/Projects">
                        {this.props.goProjects}
                    </Link>

                </div>
    
        )
    }
}

export default NavBar