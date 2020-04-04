import React from 'react';
import aboutMeStyles from '../stylesCSS/aboutme.module.css';
import Carousel from 'react-bootstrap/Carousel'
import hockeyPic from '../aboutMePics/buffStatethrowBack.jpg';
import SlideShowTesting from './SlideShowTesting.jsx'


function Images() {
    return(
        <div>
            <img src={hockeyPic} alt="" />
        </div>
    )
}

class AboutMe extends React.Component {
    constructor() {
        super() 
        this.state = {
            name: "ClayDay",
            picTest: "./Pictures/exclamationMark.jpg",
            message: "You have an Alert",
            backgroundColor: "black",  
            pictureCase: [
            './Pictures/exclamationMark.jpg', 
           './Pictures/questionMark.jpg',
            './Pictures/smileyFace2.jpg',
            ],
        }

            this.eventFired = this.eventFired.bind(this)
   
    }
    goHome() {
        window.location.href="/";
    }


    eventFired() {
       alert('You did something buddy')
    
    }

    render() {
       
        let image = <img src={this.state.pictureCase[0]} alt=""/>

        return(
            <div>
                <header>About Me</header>

                <div className={aboutMeStyles.playBar}>

                    <button onClick={this.eventFired}>
                        Do Event
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
                    <SlideShowTesting />
                </div>
           
            </div>
        )
    }
}



export default AboutMe