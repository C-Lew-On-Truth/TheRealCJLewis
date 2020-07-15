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

    componentDidMount = () => {
        this.setState({
            tabActive: false
        })
    }

    showExpo1 = () => {
        this.setState({
            showExpo: <p className='tabActive'>{ExpoEntries[0].expo}</p>,
            tabActive: true
        })
    }

    showExpo2 = () => {
        this.setState({
            showExpo: <p className='tabActive'>{ExpoEntries[1].expo}</p>,
            tabActive: true
        })
    }

    showExpo3 = () => {
        this.setState({
            showExpo: <p className='tabActive'>{ExpoEntries[2].expo}</p>,
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

                        <h1 onClick={this.showExpo1}>Professional Foundation</h1>
                        <div onClick={this.noMoreExpo} >
                            {this.state.showExpo}
                        </div>

                    </div>

                    <div className="entryTrigger">
                         <h1 onClick={this.showExpo2}>Employment Growth</h1>
                        <div onClick={this.noMoreExpo} >
                            {this.state.showExpo}
                        </div>
                    </div>

                    <div className="entryTrigger">
                    <h1 onClick={this.showExpo3}>Seasoned Professional</h1>
                        <div onClick={this.noMoreExpo} >
                            {this.state.showExpo}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ExpoModal 