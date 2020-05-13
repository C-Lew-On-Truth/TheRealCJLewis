import React from 'react';

function NavBar() {

    goHome = () => {
        window.location.href = "/";
    }

    goAboutMe = () => {
        window.location.href = "/AboutMe"
    }

    goProjects = () => {
        window.location.href = "/Projects"
    }
    
    return (
        <div className="mainBox">
            <div className="playBar">

                <button onClick={this.goHome}>
                    Go Home
                </button>

                <button onClick={this.goAboutMe}>
                    About Me
                </button>

                <button onClick={this.goProjects}>
                    Projects
                </button>

            </div>
        </div>
    )
}

export default NavBar