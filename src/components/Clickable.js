import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MTInfo from './MTInfo';
import APInfo from './APInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class Clickable extends Component {
    constructor(props) {
        super(props);
        this.programs = {
            mt : { color: "SkyBlue"},
            "Associate Program": { color: "#896EB1"}
        }
        this.state =  {
            mt: true,
            "Associate Program": false,
        };
    }
    mtButton = () => {
        this.setState( {mt: true, "Associate Program": false} );
    }
    apButton = () => {
        this.setState( {mt: false, "Associate Program": true} );
    }
    render() {
        return (
            <div className="Clickable">
                <Tabs>
                    <TabList>
                        <Tab style={{backgroundColor: 'SkyBlue'}}><h4>Media Tech Program</h4></Tab>
                        <Tab><h4>Associate's Program</h4></Tab>
                    </TabList>
                    <TabPanel style={{backgroundColor: 'SkyBlue'}}>
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