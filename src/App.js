import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Overview from './components/Overview';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Banner />  
          <Overview />     
      </div>
    );
  }
}

export default App;
