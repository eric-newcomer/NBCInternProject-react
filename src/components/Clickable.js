import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MTInfo from './MTInfo';
import APInfo from './APInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

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
                <Tabs>
                    <TabList>
                        <Tab><h4>Media Tech Program</h4></Tab>
                        <Tab><h4>Associate's Program</h4></Tab>
                    </TabList>
                    <TabPanel>
                        <h2>This is Media Tech Program Information</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>This is Associate Program Information</h2>
                    </TabPanel>
                </Tabs>
                {/* <Container className="justify-content-md-center">
                    <Row>
                        <Col><button className="btn active" onClick={this.mtButton} active><h3>Media Tech Program</h3></button></Col>
                        <Col><button className="btn" onClick={this.apButton}><h3>Associate's Program</h3></button></Col>
                    </Row>
                </Container>
                {this.state.showMT ? <MTInfo/> : null}
                {this.state.showAP ? <APInfo/> : null} */}
            </div>

        );
    }
}

export default Clickable;