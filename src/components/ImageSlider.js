import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ig = [
    "https://www.instagram.com/p/B0TzvFWJT7G/media/?size=m", //0
    "https://www.instagram.com/p/B0On1KxJ7Mw/media/?size=m", //1
    "https://www.instagram.com/p/B0Bs0iIplhV/media/?size=m", //2
    "https://www.instagram.com/p/Bzdzc8npziI/media/?size=m", //3
    "https://www.instagram.com/p/BzvTs5sJ0FC/media/?size=m", //4
    "https://www.instagram.com/p/BzwEX9eFAZM/media/?size=m", //5
    "https://www.instagram.com/p/Bza72HRp3Ws/media/?size=m", //6
    "https://www.instagram.com/p/ByYilCbJyzE/media/?size=m", //7  
    "https://www.instagram.com/p/Bx2IrBIFWyO/media/?size=m", //8
]; 

class ImageSlider extends Component {
    render() {
        return (
            <div className="ImageSlider"> 
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={70}
                    totalSlides={9}
                    interval={3000}
                    isPlaying={true}
                    visibleSlides={3}>
                <Slider>
                    <Slide index={0} ><a href="https://www.instagram.com/p/B0TzvFWJT7G/" target="_blank"><img src={ig[0]} /></a></Slide>
                    <Slide index={1}><a href="https://www.instagram.com/p/B0On1KxJ7Mw/" target="_blank"><img src={ig[1]} /></a></Slide>
                    <Slide index={2}><a href="https://www.instagram.com/p/B0Bs0iIplhV/" target="_blank"><img src={ig[2]} /></a></Slide>
                    <Slide index={3}><a href="https://www.instagram.com/p/Bzdzc8npziI/" target="_blank"><img src={ig[3]} /></a></Slide>
                    <Slide index={4}><a href="https://www.instagram.com/p/BzvTs5sJ0FC/" target="_blank"><img src={ig[4]} /></a></Slide>
                    <Slide index={5}><a href="https://www.instagram.com/p/BzwEX9eFAZM/" target="_blank"><img src={ig[5]} /></a></Slide>
                    <Slide index={6}><a href="https://www.instagram.com/p/Bza72HRp3Ws/" target="_blank"><img src={ig[6]} /></a></Slide>
                    <Slide index={7}><a href="https://www.instagram.com/p/ByYilCbJyzE/" target="_blank"><img src={ig[7]} /></a></Slide>
                    <Slide index={7}><a href="https://www.instagram.com/p/Bx2IrBIFWyO/" target="_blank"><img src={ig[8]} /></a></Slide>
                </Slider>
            </CarouselProvider>
                    </div>
        );
    }
}

export default ImageSlider;