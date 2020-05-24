import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
//import 'react-awesome-slider/dist/styles.css';
import '../styles/awesome-styles.css'



import SundayVid from '../videos/Sunday-Skate-Movie.mp4';
import BuffaloDemo from '../videos/Channel-4-Sabres-PKG.mp4';
import BuffSpyVid from '../videos/SPOR_original.mp4'

class VideoExpos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sunVidPlaying: false,
            buffVidPlaying: false,
            bsSpyVidPlaying: false,
        }
        this.sunVid = React.createRef();
        this.buffVid = React.createRef();
        this.bsSpyVid = React.createRef()
    }

    onSunVidPlay = () => {
        this.setState(
            {
                sunVidPlaying: true,
            }
        )
        console.log(this.state.sunVidPlaying);
        console.log('Sunday Skate video is playing');
    }

    onBuffVidPlay = () => {
        this.setState(
            {
                buffVidPlaying: true,
            }
        )
        console.log(this.state.buffVidPlaying);
        console.log('WIVB news demo is playing');
    }

    onBsSpyVidPlay = () => {
        this.setState(
            {
                bsSpyVidPlaying: true,
            }
        )
        console.log(this.state.bsSpyVidPlaying);
        console.log('Buff State Spy Vid is playig');
    }
  
    render() {

        return (

            <AwesomeSlider
                bullets={false}
                onTransitionStart={this.mediaControl}
            >
                <div className="slideHolder">
                    <h1>Sunday Skate Video</h1>
                    <p className="videoInfo">

                        This is a video I worked on when I was in my Senior year in College!<br />
                            I decided to do a documentary on a local Skate Shop and how its existence
                            has influenced the neighboring community and the city of Buffalo as a whole!
                     </p>
                <section className="videoHolder">
                <video
                        src={SundayVid}
                        ref={this.sunVid}
                        onPlay={this.onSunVidPlay}
                        controls
                    />
                </section>

                </div>

                <div className="slideHolder">
                    <h1>Buffalo Demo</h1>
                    <p className="videoInfo">
                        I was fortunate enough to land an internship at WIVB Channel 4 Buffalo as a
                        sports production assistant! During my time I learned a lot about the news industry
                        and when I was asked to create a package of my own, I COULD NOT REFUSE!
                    </p>

                  <section className="videoHolder">
                  <video
                        src={BuffaloDemo}
                        ref={this.buffVid}
                        onPlay={this.onBuffVidPlay}
                        controls
                    />
                  </section>
                </div>

                <div className="slideHolder">
                    <h1>Buffalo Spy Video</h1>
                    <p className="videoInfo"> 
                        This is the first video I've ever produced! In my first Basic Production class
                        our professor assigned us all to pick a name out a hat and to make a creative video
                        from the specific name!
                    </p>
                 <section section className="videoHolder">
                 <video
                        src={BuffSpyVid}
                        ref={this.bsSpyVid}
                        onPlay={this.onBsSpyVidPlay}
                        controls
                    />
                 </section>
                </div>
            </AwesomeSlider>

        )
    }
}

export default VideoExpos