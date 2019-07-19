import React, { Component } from 'react';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal';
import Flip from 'react-reveal';
import Banner from './components/Banner';
import Overview from './components/Overview';
import Clickable from './components/Clickable';
import Instagram from './components/Instagram';
import Experiences from './components/Experiences';
import Brands from './components/Brands';
import Faqs from './components/Faqs';


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
            <Flip>
              <Brands />
            </Flip>
            <Flip>
              <Faqs />
            </Flip>
        </div>
      </Zoom>
    );
  }
}

export default App;
