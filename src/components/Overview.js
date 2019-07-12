import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Overview extends Component {
    render() {
        return (
            <div className="Overview">
                <div className="Overview1">
                    <h1>Media Tech Program Overview</h1>
                    <p>This will be a description of the Media Tech Program. lorem ipsum dolor blah blah blah</p>
                    <button className="btn apply" href="/" >
                        Apply Now <i class="material-icons">arrow_forward</i>
                    </button>
                    </div>
                <div className="Overview2">
                    <Container className="justify-content-md-center">
                        <Row>
                            <Col><button className="btn"><h3>Media Tech Program</h3></button></Col>
                            <Col><button className="btn"><h3>Associate's Program</h3></button></Col>
                        </Row>
                    </Container>
                </div>
            </div>
            
        );
    }
}

export default Overview;