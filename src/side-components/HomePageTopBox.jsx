import React from 'react';
import '../styles/home-page.css';

import ProfilePic from '../pictures/profile-pic.jpg';
import Cheesin from '../pictures/StraightCheesin.jpg';

class HomePageTopBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picOne: ProfilePic,
        }
        this.changePic = this.changePic.bind(this)
        this.changePicBack = this.changePicBack.bind(this)
    }

    changePic =() => {
        this.setState(
            {
                picOne: Cheesin
            }
        )
    }

    changePicBack =() => {
        this.setState(
            {
                picOne: ProfilePic
            }
        )
    }


    render() {
        return (
            <div 
            className="topBox"
            >
                <div 
                className="topBoxItems top1"
                onMouseEnter={this.changePic}
                onMouseLeave={this.changePicBack}
                >
                        <img src={this.state.picOne} alt=""/>
                </div>

                <div className="topBoxItems top2">
                    <p style={{ padding: "10px" }}>
                        HELLO AND WELCOME TO MY PORTFOLIO!<br/>
                        In this website you will find some history about myself, my experience,
                        and some of the video projects I've done in the past so please feel free to take a look around!<br></br>
                        You may find something worth your wild!<br/>
                        PEACE AND LOVE!
                </p>
                </div>

            </div>
        )
    }
}

export default HomePageTopBox