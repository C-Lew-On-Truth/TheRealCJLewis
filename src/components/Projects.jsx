import React from "react";
import Slider from "react-slick";
import { Player, BigPlayButton } from "video-react";

import '../stylesCSS/project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css"; // import css

import SundayVid from '../assets/Sunday-Skate-Video.mp4';
import Food from '../aboutMePics/Food.JPG';
import Will from '../aboutMePics/willie.jpg';
import Amilion from '../aboutMePics/Amilion.JPG'
import ThrowBack from '../aboutMePics/BsThrowBack.jpg';


class Projects extends React.Component {


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
        };

        return (

            <div className="projectContainer">
                <header>Projects</header>

                <div className="projectIntro">

                </div>


                <Slider {...settings} className="sliderContainer">
                    <Player
                        playsInline={true}
                        fluid={false}
                        height={300}
                        width={550}
                        src={SundayVid}
                    >
                        <BigPlayButton position="center" />
                    </Player>

                    <div>
                        <img className="slideProjects" src={Will} />
                    </div>

                    <div>
                        <img className="slideProjects" src={Food} />
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
