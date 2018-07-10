import React, { Component } from 'react';
import SocialCard from './SocialCard';
import data from '../data';
import logo from '../resources/react-logo.png';
import portrait from '../resources/portrait.jpg';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div
                className="app"
                id="app"
            >
                <SocialCard
                    creditName={data.author}
                    headlineText={data.headline}
                    logoUrl={logo}
                    messageText={data.message}
                    portraitUrl={portrait}
                />
            </div>
        );
    }
}

export default App;
