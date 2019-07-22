import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Experiences from './Experiences';
import APExperiences from './APExperiences';

class Clickable extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            mtColor: "SkyBlue",
            apColor: "#FFF",
        };
    }
    mtButton = () => {
        this.setState( {mtColor: "#87CEEB", apColor: "#FFF"} );
    }
    apButton = () => {
        this.setState( {mtColor: "#FFF", apColor: "#99FF99"} );
    }
    render() {
        return (
            <div className="Clickable">
                <Tabs>
                    <TabList>
                        <Tab onClick={this.mtButton}><h4>Internships</h4></Tab>  {/* style={{backgroundColor: this.state.mtColor}} */}
                        <Tab onClick={this.apButton}><h4>Associate Positions</h4></Tab> {/* style={{backgroundColor: this.state.apColor}} */}
                    </TabList>
                    <TabPanel>
                        <div className="MTContainer">
                            <div className="MediaTechInfo">
                                <Container>
                                    <Row>
                                        <Col> {/* LEFT COLUMN */} 
                                            <h2>Internships</h2>
                                            <br/>
                                            <h4><a href="#Experiences">Experiences</a></h4> {/* TODO: ADD SCROLL TO COMPONENT FUNCTIONALITY */}
                                            <h4><a href="#OurBrands">Our Brands</a></h4>
                                            <h4><a href="#FAQs">FAQs</a></h4>
                                        </Col>
                                        <div className="border-mt"></div>
                                        <Col> {/* RIGHT COLUMN */}
                                            <p>Here at NBCUniversal we constantly strive for innovation and discovery. To help us achieve these goals we are searching for talented technologists to be our MediaTech Interns. Our MediaTech program is a 10 week paid internship program which will expose interns to firsthand technical experiences within our vast Operations and Technology Department. Along with working on projects with employees and other interns, this program also serves as a direct line into our Associates Program.</p>
                                            <p><b>Fall Internships:</b> September - December (applications open in March)</p>
                                            <p><b>Spring Internships:</b> January - May (applications open in July)</p>
                                            <p><b>Summer Internships:</b> June - August (applications open in August)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <hr/>
                            <Experiences/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="APContainer">
                            <div className="AssociateInfo">
                                <Container>
                                    <Row>
                                    <Col> {/* LEFT COLUMN */} 
                                            <h2>Associate Positions</h2>
                                            <br/>
                                            <h4><a href="#Experiences">Experiences</a></h4> {/* TODO: ADD SCROLL TO COMPONENT FUNCTIONALITY */}
                                            <h4><a href="#OurBrands">Our Brands</a></h4>
                                            <h4><a href="#FAQs">FAQs</a></h4>
                                        </Col>
                                        <div className="border-ap"></div>
                                        <Col> {/* RIGHT COLUMN */}
                                            <p>As an early career development program, our Associate Program gives real world experience and exposure into NBCUniversal’s Operations and Technology department. This is a two year program where associates will have the opportunity to rotate within three different teams in locations around the country. This program offers technical certification programs, mentorships, and networking opportunities essential for jump starting your career!</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <hr/>
                            <APExperiences/>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        );
    }
}

export default Clickable;