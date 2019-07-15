import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

import makeCarousel from 'react-reveal/makeCarousel';
//import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';


const slideImages = [
    "https://static1.squarespace.com/static/5813cddb8419c25c3b42eacd/5c8995696e9a7f44b8ee4dc0/5b92ba172b6a2848d3a935ca/1536349903295/Downtown+Los+Angeles+Skyline+Day+to+Night+Pink+Sunset+Wide.png",
    "https://wallpapercave.com/wp/wp3594884.jpg",
    "https://pmcdeadline2.files.wordpress.com/2018/04/telemundocenter_buildingfront2.jpg?w=681&h=383&crop=1",
    "https://cdn.coxandkings.com/cnkus/resources/images/countries/england.jpg"
];

const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}
   
const Slideshow = () => {
    return (
    <Slide {...properties}>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <h1 className="Banner">Here you can.</h1>
            </div>
        </div>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <h1 className="Banner">Here you can.</h1>
            </div>
        </div>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                <h1 className="Banner">Here you can.</h1>
            </div>
        </div>
    </Slide>
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