import React from 'react';
import VideoClips from '../side-components/VideoClips.jsx';
import '../stylesCSS/carouselStyle.css';





class VideoCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            length: VideoClips.length,
            landing: VideoClips,
            isPlaying: false,
        }
        this.mediaLogger = this.mediaLogger.bind(this)
    }

    goToPrevSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length

        if (index < 1) {
            index = length - 1
        } else {
            index--
        }

        this.setState({
            activeIndex: index,
        })
    }

    goToNextSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;

        if (index === length - 1) {
            index = 0
        } else {
            index++
        }

        this.setState({
            activeIndex: index,
        })
    }

    mediaLogger = () => {
        this.setState({
            isPlaying: true,
        })
        console.log(this.state.isPlaying)
    }

    render() {

        return (
            <div>

                <div className='slider'>
                    <div className='slider-items'>

                        <div className="backArrow" onClick={this.goToPrevSlide}>
                            Prev
                        </div>

                        <section>
                            {
                                this.state.landing.map((s, index) =>
                                    <div
                                        className={index === this.state.activeIndex ? 'active' : 'inactive'}
                                        key={index}
                                    >
                                        <h2>{s.title}</h2>
                                        <video
                                            src={s.video}
                                            onPlaying={
                                                () => {
                                                    if (s.video === VideoClips[0].video ) {
                                                       
                                                    }
                                                }
                                            }
                                            controls
                                        />
                                    </div>
                                )}
                        </section>

                        <div className="nextArrow" onClick={this.goToNextSlide}>
                            Next
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default VideoCarousel