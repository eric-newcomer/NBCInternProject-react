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
            mtColor: "#896EB1",
            apColor: "#FFF",
        };
    }
    mtButton = () => {
        this.setState( {mtColor: "#896EB1", apColor: "#FFF"} );
    }
    apButton = () => {
        this.setState( {mtColor: "#FFF", apColor: "SkyBlue"} );
    }
    render() {
        return (
            <div className="Clickable" >
                <Tabs>
                    <TabList>
                        <Tab onClick={this.mtButton} style={{backgroundColor: this.state.mtColor}}><h4>Media Tech Program</h4></Tab>
                        <Tab onClick={this.apButton} style={{backgroundColor: this.state.apColor}}><h4>Associate's Program</h4></Tab>
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