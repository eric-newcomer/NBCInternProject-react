import React, { Component } from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import logo_tagline from './images/NBCU_Logo_Tagline.svg';
import la from './images/unicity3.jpg';
import ny from './images/ny.jpg';
import ny2 from './images/ny2.jpg';
import ec from './images/ec.jpg';
import ec2 from './images/NOC2.png';

const fadeImages = [
    la,
    ny2,
    ec,
    ny, 
    ec2,
];
  
const fadeProperties = {
    duration: 5000,
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
                    <div className="Banner">
                        <h1 className="hereYouCan">Here you can</h1>
                        <h1 className="learnFromTheBest">learn from the best.</h1>
                        <div className="search-form-wrapper">
                            <form action="https://www.nbcunicareers.com/find-a-job" method="get">
                                <div className="search-form">
                                    <i className="far fa-search"></i>
                                    <input name="keyword" className="input-search" autocomplete="off" placeholder="Search jobs by keyword" />
                                    <i className="far fa-arrow-right"></i>
                                </div>
                            </form>
                        </div>
                        <div className="field field--name-field-banner-logo-small field--type-image field--label-hidden field__item"> 
                           <img width="" height="" src={logo_tagline} alt="NBCU_Logo_Tagline" typeof="foaf:Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-fade" >
                <div style={{'backgroundImage': `url(${fadeImages[1]})`}}>
                    <div className="Banner">
                        <h1 className="hereYouCan">Here you can</h1>
                        <h1 className="learnFromTheBest">learn from the best.</h1>
                        <div className="search-form-wrapper">
                            <form action="/find-a-job" method="get">
                                <div className="search-form">
                                    <i className="far fa-search"></i>
                                    <input name="keyword" className="input-search" autocomplete="off" placeholder="Search jobs by keyword" />
                                    <i className="far fa-arrow-right"></i>
                                </div>
                            </form>
                        </div>
                        <div className="field field--name-field-banner-logo-small field--type-image field--label-hidden field__item"> 
                            <img width="" height="" src={logo_tagline} alt="NBCU_Logo_Tagline" typeof="foaf:Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-fade" >
                <div style={{'backgroundImage': `url(${fadeImages[2]})`}}>
                    <div className="Banner">
                        <h1 className="hereYouCan">Here you can</h1>
                        <h1 className="learnFromTheBest">learn from the best.</h1>
                        <div className="search-form-wrapper">
                            <form action="/find-a-job" method="get">
                                <div className="search-form">
                                    <i className="far fa-search"></i>
                                    <input name="keyword" className="input-search" autocomplete="off" placeholder="Search jobs by keyword" />
                                    <i className="far fa-arrow-right"></i>
                                </div>
                            </form>
                        </div>
                        <div className="field field--name-field-banner-logo-small field--type-image field--label-hidden field__item"> 
                            <img width="" height="" src={logo_tagline} alt="NBCU_Logo_Tagline" typeof="foaf:Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-fade" >
                <div style={{'backgroundImage': `url(${fadeImages[3]})`}}>
                    <div className="Banner">
                        <h1 className="hereYouCan">Here you can</h1>
                        <h1 className="learnFromTheBest">learn from the best.</h1>
                        <div className="search-form-wrapper">
                            <form action="/find-a-job" method="get">
                                <div className="search-form">
                                    <i className="far fa-search"></i>
                                    <input name="keyword" className="input-search" autocomplete="off" placeholder="Search jobs by keyword" />
                                    <i className="far fa-arrow-right"></i>
                                </div>
                            </form>
                        </div>
                        <div className="field field--name-field-banner-logo-small field--type-image field--label-hidden field__item"> 
                            <img width="" height="" src={logo_tagline} alt="NBCU_Logo_Tagline" typeof="foaf:Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-fade" >
                <div style={{'backgroundImage': `url(${fadeImages[4]})`}}>
                    <div className="Banner">
                        <h1 className="hereYouCan">Here you can</h1>
                        <h1 className="learnFromTheBest">learn from the best.</h1>
                        <div className="search-form-wrapper">
                            <form action="/find-a-job" method="get">
                                <div className="search-form">
                                    <i className="far fa-search"></i>
                                    <input name="keyword" className="input-search" autocomplete="off" placeholder="Search jobs by keyword" />
                                    <i className="far fa-arrow-right"></i>
                                </div>
                            </form>
                        </div>
                        <div className="field field--name-field-banner-logo-small field--type-image field--label-hidden field__item"> 
                            <img width="" height="" src={logo_tagline} alt="NBCU_Logo_Tagline" typeof="foaf:Image" />
                        </div>
                    </div>
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