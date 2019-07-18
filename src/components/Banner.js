import React, { Component } from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import logo_tagline from '../images/NBCU_Logo_Tagline.svg'


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