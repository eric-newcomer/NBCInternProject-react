import React, { Component } from 'react';
import la from './images/la.jpg';
import { Container, Row, Col } from 'react-bootstrap';

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
                <Container>
                    <Row>
                        <Col><img src={brandImages[0]}/></Col>
                        <Col><img src={brandImages[1]}/></Col>
                        <Col><img src={brandImages[2]}/></Col>
                        <Col><img src={brandImages[3]}/></Col>
                        <Col><img src={brandImages[4]}/></Col>
                        <Col><img src={brandImages[5]}/></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col><img src={brandImages[6]}/></Col>
                        <Col><img src={brandImages[7]}/></Col>
                        <Col><img src={brandImages[8]}/></Col>
                        <Col><img src={brandImages[9]}/></Col>
                        <Col><img src={brandImages[10]}/></Col>
                        <Col><img src={brandImages[11]}/></Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://www.nbcunicareers.com/brands" target="_blank"><h2>See More</h2></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Brands;