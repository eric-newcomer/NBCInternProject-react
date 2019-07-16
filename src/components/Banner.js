import React, { Component } from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import logo_tagline from '../images/NBCU_Logo_Tagline.svg'
import makeCarousel from 'react-reveal/makeCarousel';
//import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';


const fadeImages = [
    "https://static1.squarespace.com/static/5813cddb8419c25c3b42eacd/5c8995696e9a7f44b8ee4dc0/5b92ba172b6a2848d3a935ca/1536349903295/Downtown+Los+Angeles+Skyline+Day+to+Night+Pink+Sunset+Wide.png",
    "https://wallpapercave.com/wp/wp3594884.jpg",
    "https://cdn.coxandkings.com/cnkus/resources/images/countries/england.jpg"
];
  
const fadeProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }

const Slideshow = () => {
    return (
        <Fade {...fadeProperties}>
            <div className="each-fade" >
                <div style={{'backgroundImage': `url(${fadeImages[0]})`}}>
                    <h1 className="Banner">Here you can.</h1>
                </div>
            </div>
            <div className="each-fade" >
                <div style={{'backgroundImage': `url(${fadeImages[1]})`}}>
                    <h1 className="Banner">Here you can.</h1>
                </div>
            </div>
            <div className="each-fade" >
                <div style={{'backgroundImage': `url(${fadeImages[2]})`}}>
                    <h1 className="Banner">Here you can.</h1>
                </div>
            </div>
        </Fade>
    )
}

class Banner extends Component {
    render() {
        return (
            <div>
                <Slideshow />
            </div> 
        );
    }
}

export default Banner;