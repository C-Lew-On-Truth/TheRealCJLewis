import React from 'react';


class Experience extends React.Component{
    
    goHome() {
        window.location.href="/";
    }

    goAboutMe() {
        window.location.href="/AboutMe"
    }

    goProjects() {
        window.location.href="/Projects"
    }

    fireEvent2() {
        alert('Welcome to my Experience!')
    }

    render() {
    

        return(
           <div class="mainBox">
               <header>Experience</header>

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

                    <button onClick={this.fireEvent2}>
                        Do Event
                    </button>

                </div>

           </div>
        )
    }
}


export default Experience;
