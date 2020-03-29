import React from 'react';
import aboutMeStyles from '../stylesCSS/aboutme.module.css';
//import hockeyPic from '../aboutMePics/buffStatethrowBack.jpg';


class AboutMe extends React.Component {
    constructor() {
        super() 
        this.state = {
            name: "ClayDay",
            picTest: "./Pictures/exclamationMark.jpg",
            message: "You have an Alert",
            backgroundColor: "black",       
        }
        this.makeMessage = this.makeMessage.bind(this)    
    };

    makeMessage() {
         alert(this.state.message)
    }

    goHome(){
        window.location.href="/"
    }

    /*
    componentWillMount() {
        alert('its begun')
    }
    
   */


    render() {
       

        return(
            <div>
                <header>About Me</header>

                <div className={aboutMeStyles.playBar}>

                    <button onClick={this.makeMessage}>
                        
                    </button>

                    <button onClick={this.goHome}>
                        Go Home
                    </button>
                        
                </div>
                
                <div className={aboutMeStyles.introStyle}>
                    Hello This is Clayton Lewis and i want to see if these words will stay in the damn box!
                    Thats all I really need this element to do, is to keep the words in the fucking square!
                    This paragraph will be a few sentences about my upbring and background! I'm still working
                    out the kinks on what I really want to say, but whatever it is will definitely be compelling. 
                    I look forward to publising this site on GitHub so I can showcase my portfolio to the world!
                    First thing is first! I need to concentrate on ReactJS. Right now that is the KEY!
                  
                </div>

                <div className={aboutMeStyles.picHolder}>
                    <img src={this.state.picTest}  alt=""/>
                </div>

            </div>
        )
    }
}

export default AboutMe