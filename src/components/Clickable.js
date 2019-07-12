import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MTInfo from './MTInfo';
import APInfo from './APInfo';

class Clickable extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            showMT: true,
            showAP: false,
        };
    }
    mtButton = () => {
        this.setState( {showMT: true, showAP: false} );
    }
    apButton = () => {
        this.setState( {showMT: false, showAP: true} );
    }
    render() {
        return (
            <div className="Clickable">
                <Container className="justify-content-md-center">
                    <Row>
                        <Col><button className="btn active" onClick={this.mtButton} active><h3>Media Tech Program</h3></button></Col>
                        <Col><button className="btn" onClick={this.apButton}><h3>Associate's Program</h3></button></Col>
                    </Row>
                </Container>
                {this.state.showMT ? <MTInfo/> : null}
                {this.state.showAP ? <APInfo/> : null}
            </div>
        );
    }
}

export default Clickable;