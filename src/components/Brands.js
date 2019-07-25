import React, { Component } from 'react';
import la from './images/la.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from './Carousel';

export default class Brands extends Component {
    render() {
        
        return (
            <div className="Brands" id="OurBrands">
                <hr/>
                <h1>Our Brands</h1>
                <Carousel />
            </div>
        );
    }
}