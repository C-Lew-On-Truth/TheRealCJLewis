import React from 'react';
import '../styles/home-page.css';
import HomePageNavBox from '../side-components/HomePageNavBox.jsx';

class HomePageBottomBox extends React.Component {
    render() {
        return (
            <div className="bottomBox">

                <div className="bottomBoxItems box1">
                    <p style={{ padding: "10px" }}>
                        <b style={{ fontSize: "30px" }}>CONTACT INFORMATION</b><br/>
                            Email:<br/>
                            lewisclayton89@gmail.com<br/>
                            Phone:<br/>
                            775-233-7630<br/>
                            Address:<br/>
                            614 W. 146th Street. Apt#4
                            New York, New York, 10031
                    </p>

                </div>

                <div className="bottomBoxItems box2">
                    <HomePageNavBox />
                </div>

            </div>
        )
    }
}

export default HomePageBottomBox