import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Overview from './components/Overview';
import Clickable from './components/Clickable';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Banner />  
          <Overview />  
          <Clickable />   
      </div>
    );
  }
}

export default App;
