import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../styles/experience.css';
import ExpoEntries from '../side-components/ExpoEntries';


const ExpoPage = props => <span className="globalNavBar">{props.page}</span>

class ExpoModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showExpo: '',
            tabActive: false
        }
    }

    showExpo1 = () => {
        this.setState({
            showExpo:
                <p className='tabActive'>
                    {ExpoEntries[0].expo}
                    <button
                        onClick={this.noMoreExpo}
                        className='exit'
                    >
                        Back to Menu
                 </button>
                </p>,

            tabActive: true
        })
    }

    showExpo2 = () => {
        this.setState({
            showExpo: <p className='tabActive'>
                {ExpoEntries[1].expo}
                <button
                    onClick={this.noMoreExpo}
                    className='exit'
                >
                    Back to Menu
                </button>
            </p>,

            tabActive: true
        })
    }

    showExpo3 = () => {
        this.setState({
            showExpo: <p className='tabActive'>
                {ExpoEntries[2].expo}
                <button
                    onClick={this.noMoreExpo}
                    className='exit'
                >
                    Back to Menu
                    </button>
            </p>,
            tabActive: true
        })
    }

    noMoreExpo = () => {
        this.setState({
            showExpo: '',
            tabActive: false
        })
    }

    render() {
        return (
            <div className='expoPage'>
                <header>Experience</header>

                <NavBar
                    goHome="Go Home"
                    goAboutMe="About Me"
                    goExpo={<ExpoPage page="Experience" />}
                    goProjects="Projects"
                />

                <div className="expoContainer">

                    <div className="entryTrigger">
                        <h1 onClick={this.showExpo1} className='header'>Professional Foundation</h1>
                        <div>
                            {this.state.showExpo}
                        </div>
                    </div>

                    <div className="entryTrigger">
                        <h1 onClick={this.showExpo2} className='header'>Employment Growth</h1>
                        <div>
                            {this.state.showExpo}
                        </div>
                    </div>

                    <div className="entryTrigger">
                        <h1 onClick={this.showExpo3} className='header'>Seasoned Professional</h1>
                        <div>
                            {this.state.showExpo}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ExpoModal 