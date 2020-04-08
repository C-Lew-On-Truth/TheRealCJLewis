import React, { Component } from "react";
import Slider from "react-slick";

import '../stylesCSS/project.css';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Food from '../aboutMePics/Food.jpg';
import Will from '../aboutMePics/Willie.jpg';
import Amilion from '../aboutMePics/Amilion.jpg'
import ThrowBack from '../aboutMePics/BsThrowBack.jpg';


class Projects extends React.Component{
    
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(

         <div className="projectContainer">
                <header>Projects</header>

                <div className="projectIntro">
               
                </div>

            
            <Slider {...settings} className="sliderContainer">
                <div>
                    <img className="slideProjects" src={Food} />
                </div>

                <div>
                    <img className="slideProjects" src={Will} />
                </div>

                <div>
                    <img className="slideProjects" src={Amilion} />
                 </div>

                <div>
                    <img className="slideProjects" src={ThrowBack} />
                </div>
            </Slider>
         
            
         </div>
                    
            
        )
    }
}


export default Projects;
