import React, { Component } from 'react';
import la from './images/la.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from './Carousel';


const brandImages = [
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-TelemundoStud-18.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-Universal-Pictures.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-OlympicChannel.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-CNBC_Intl.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Dreamworks.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-E_resized.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-fandango.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Universal-BrandDev.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Focus.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-msnbc17.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-syfy2017.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-usa.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-oxygen17.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCSports.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCNews.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-hulu.png",
]

class Brands extends Component {
    render() {
        
        return (
            <div className="Brands" id="OurBrands">
                <hr/>
                <h1>Our Brands</h1>
                <Carousel />
                <hr/>
            </div>
        );
    }
}

export default Brands;