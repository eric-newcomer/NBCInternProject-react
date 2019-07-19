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
                        <Tab onClick={this.mtButton} style={{backgroundColor: this.state.mtColor}}><h4>Media Tech Program</h4></Tab>
                        <Tab onClick={this.apButton} style={{backgroundColor: this.state.apColor}}><h4>Associate's Program</h4></Tab>
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
                                            <p>The NBCUniversal Internship Program is an experience like no other. We offer a diverse range of internships that provide a unique experience across our iconic portfolio of brands. Through unparalleled access to the best in the business, hands-on training and one-of-a-kind networking events, our interns have the chance to influence change. Our interns are ambitious, innovative and savvy. They shape the way we do things. Here you can contribute as content creators, problem solvers & innovators. Here you can learn the power and possibilities of media and technology. Here you can go far.</p>
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
                                            <h2>Associate's Program</h2>
                                            <br/>
                                            <h4><a href="#Experiences">Experiences</a></h4> {/* TODO: ADD SCROLL TO COMPONENT FUNCTIONALITY */}
                                            <h4><a href="#OurBrands">Our Brands</a></h4>
                                            <h4><a href="#FAQs">FAQs</a></h4>
                                        </Col>
                                        <div className="border-ap"></div>
                                        <Col> {/* RIGHT COLUMN */}
                                            <p>NBCUniversal's Media Tech Associate opportunities give early career technologists real world experience and exposure to one of the world’s leading media and entertainment companies! The Associate Program is a two year development program, which offers Associates the flexibility of rotating through 3 different business groups within Operations and Technology. These positions will promote technical breadth & depth through our technical certification programs, mentorship and networking opportunities to help you jump start your career.</p>
                                            <p><b>Fall Internships:</b> September - December (applications open in March)</p>
                                            <p><b>Spring Internships:</b> January - May (applications open in July)</p>
                                            <p><b>Summer Internships:</b> June - August (applications open in August)</p>
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