import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import '../stylesCSS/experience.css';
import 'react-awesome-slider/dist/styles.css';


import SundayVid from '../assets/Sunday-Skate-Movie.mp4';
import BuffaloDemo from '../assets/Channel-4-Sabres-PKG.mp4';
import BuffSpyVid from '../assets/SPOR_original.mp4'



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

        //this.onSunVidPlay = this.onSunVidPlay.bind(this);
        //this.onBuffVidPlay = this.onBuffVidPlay.bind(this)
    }

    componentDidMount() {
        this.onSunVidPlay();
        this.onBuffVidPlay()
      this.onBsSpyVidPlay()
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
        const slideHolder = {
            width: '100%',
        };

     


        return (

            <div style={slideHolder}>

                <AwesomeSlider
                    bullets={false}
                >
                    <div>
                        <h1>Sunday Skate Video</h1>
                        <video
                            src={SundayVid}
                            ref={this.sunVid}
                            onPlay={this.onSunVidPlay}
                            controls
                        />

                    </div>

                    <div>

                        <video
                            src={BuffaloDemo}
                            ref={this.buffVid}
                            onPlay={this.onBuffVidPlay}
                            controls
                        />
                    </div>

                    <div>
                        <video
                            src={BuffSpyVid}
                            ref={this.bsSpyVid}
                            onPlay={this.onBsSpyVidPlay}
                            controls
                        />
                    </div>
                </AwesomeSlider>

            </div>

        )
    }
}

export default VideoExpos