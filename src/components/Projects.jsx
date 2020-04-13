import React from "react";
import Slider from "react-slick";
import { Player, BigPlayButton } from "video-react";

import '../stylesCSS/project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css"; // import css

import SundayVid from '../assets/Sunday-Skate-Video.mp4';
import BuffaloDemo from '../assets/Channel-4-Sabres-PKG.mp4';
import BShockey from '../assets/BsThrowBack.jpg'


class Projects extends React.Component {

    goHome() {
        window.location.href="/";
    };

    goAboutMe() {
        window.location.href="/AboutMe";
    };

    goExperience() {
        window.location.href="/Experience"
    }

    fireEvent3() {
        alert('Welcome to my Projects!')
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
        };

        return (

            <div className="mainBox">
                <header>Projects</header>

                <div className="playBar">
                    <button onClick={this.goHome}>
                        Go Home
                    </button>

                    <button onClick={this.goAboutMe}>
                        About Me
                    </button>

                    <button onClick={this.goExperience}>
                        Experience
                    </button>

                    <button onClick={this.fireEvent3}>
                        Do Event
                    </button>

                </div>

                <div class="projectIntro">

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
                    <Player
                        playsInline={true}
                        fluid={false}
                        height={300}
                        width={550}
                        src={BuffaloDemo}
                    >
                        <BigPlayButton position="center" />
                    </Player>
                    <div class="slideProjects">
                        <img src={BShockey} alt=""/>
                    </div>
                 

                </Slider>


            </div>


        )
    }
}


export default Projects;
