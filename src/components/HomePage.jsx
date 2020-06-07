import React from 'react';
import '../styles/home-page.css';
import HomePageTopBox from '../side-components/HomePageTopBox.jsx';
import HomePageBottomBox from '../side-components/HomePageBottomBox.jsx';

class HomePage extends React.Component {

    render() {

        return (
            <div>
                <header onClick={() => { alert(window.innerWidth) }}>
                    Clayton J. Lewis
               </header>
                <HomePageTopBox />
                <HomePageBottomBox />
            </div>

        );
    }
}

export default HomePage