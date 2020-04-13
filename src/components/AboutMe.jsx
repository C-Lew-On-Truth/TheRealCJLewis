import React, { useState } from 'react';
import { useEffect } from 'react';
import '../stylesCSS/aboutMe.css';

//Imported Images
import Food from '../assets/Food.JPG';
import Lizard from '../assets/Amilion.jpg';
import BShockey from '../assets/BsThrowBack.jpg'
import Willie from '../assets/willie.jpg'

const ImageKey = [
    {
        image: Food
    },
    {
        image: Lizard
    },
    {
        image: BShockey
    },
    {
        image: Willie
    }

];

function SlidesFunc( {pictures} ) {

    const [presImg, setPresImg] = useState(0)
    const { length } = pictures
    //console.log(presImg)
    
    const nextPic = () => {
        
        setPresImg( presImg === length - 1 ? 0 : presImg + 1 )
    }

    useEffect(() => {
        setTimeout(nextPic, 1000)
    })

    if(!Array.isArray(pictures) || length <= 0) {
        return null
    }

    return(
        <div>
             <section className="slider">
                    {pictures.map((s, i) => (   
                        
                    <div className={i === presImg ? "active" : "slide"}>
                        <img className="image" src={s.image} alt=""/>
                    </div>
                    ))}
                </section>
        </div>
    );
}

class AboutMe extends React.Component {
    constructor() {
        super() 
        this.state = {
            message: "You have an Alert",      
        }
            this.eventFired = this.eventFired.bind(this)
   
    }
    goHome() {
        window.location.href="/";
    }

    goExperience() {
        window.location.href="/Experience"
    }

    goProjects() {
        window.location.href="/Projects"
    }

    eventFired() {
       alert('You did something buddy') 
    }

    render() {

        return(
            <div className="mainBox">
                <header>About Me</header>

                <div className="playBar">

                    <button onClick={this.goHome}>
                        Go Home
                    </button>

                    <button onClick={this.goExperience}>
                        Experience
                    </button>

                    <button onClick={this.goProjects}>
                        Projects
                    </button>   

                    <button onClick={this.eventFired}>
                        Do Event
                    </button>
                        
                </div>
                
                <div className="introStyle">
                    Hello This is Clayton Lewis and i want to see if these words will stay in the damn box!
                    Thats all I really need this element to do, is to keep the words in the fucking square!
                    This paragraph will be a few sentences about my upbring and background! I'm still working
                    out the kinks on what I really want to say, but whatever it is will definitely be compelling. 
                    I look forward to publising this site on GitHub so I can showcase my portfolio to the world!
                    First thing is first! I need to concentrate on ReactJS. Right now that is the KEY!
                  
                </div>
          
                <div className="picHolder">       
                    <SlidesFunc pictures={ImageKey} />
                </div>
           
            </div>
        )
    }
}



export default AboutMe