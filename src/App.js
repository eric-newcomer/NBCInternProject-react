import React, { Component } from 'react';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Banner from './components/Banner';
import Overview from './components/Overview';
import Clickable from './components/Clickable';
import LightSpeed from 'react-reveal';

class App extends Component {
  render() {
    return (
      <Zoom >
        <div className="App">
            <Banner />  
            <LightSpeed left>
              <Overview />  
              <Clickable />  
            </LightSpeed> 
        </div>
      </Zoom>
    );
  }
}

export default App;
