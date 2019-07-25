import React, { Component } from 'react';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal';
import Flip from 'react-reveal';
import Banner from './components/Banner';
import Overview from './components/Overview';
import Clickable from './components/Clickable';
import Brands from './components/Brands';
import Faqs from './components/Faqs';
import ImageSlider from './components/ImageSlider';

class App extends Component {
  render() {
    return (
      <Zoom >
        <div className="App">
            <Banner />  
            <LightSpeed left>
              <Overview />  
            </LightSpeed>
            <ImageSlider />
            <Clickable />  
            
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
