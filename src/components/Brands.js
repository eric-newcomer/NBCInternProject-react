import React, { Component } from 'react';
import la from '../images/LA.jpg';
import { Container, Row, Col } from 'react-bootstrap';


class Brands extends Component {
    render() {
        return (
            <div className="Brands" id="OurBrands">
                <h1>Our Brands</h1>
                <Container>
                    <Row>
                        <Col><img src={la}/></Col>
                        <Col><img src={la}/></Col>
                        <Col><img src={la}/></Col>
                        <Col><img src={la}/></Col>
                        <Col><img src={la}/></Col>
                        <Col><img src={la}/></Col>
                        <Col><img src={la}/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Brands;