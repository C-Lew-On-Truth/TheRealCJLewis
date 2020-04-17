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
                   <p style={{margin: "20px"}}>
                    Before I was introduced to the world of Media and Technology I was a Hockey Player!<br></br>
                    My hockey career took me all the way to Buffalo State College where I was introduced
                    to the world of Media! 
                    After I graduated I decided
                    to take my career to the next step by relocating to New York City where I currently reside!
                    I was able to accomplish my goals to becoming employed by a vareity of media corporations like
                    the NHL, Adobe, Meredith, and New York One News! However, it was at Adobe where I learned about
                    the practices of programming languages and writing code! The art of learning how to program in itself
                    can be discouraging and seem impossible, but if you stick with it your vision will indeed become a reality and 
                    fulfilling that reality makes it all worth it!
                   </p>
                </div>
          
                <div className="picHolder">       
                    <SlidesFunc pictures={ImageKey} />
                </div>
           
            </div>
        )
    }
}



export default AboutMe