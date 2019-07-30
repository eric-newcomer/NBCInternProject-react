import React, { Component, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import USAMap from "react-usa-map";

import mtran from './images/mtran.jpg';
import luke from './images/luke.jpg';
import anders from './images/anders.jpg';
import donny from './images/donny.jpg';
import gabe from './images/gabe.jpg';

function ITModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mr-auto ml-auto mt-2 mb-2" variant="primary" onClick={handleShow}>
        Information Technology
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Information Technology</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Information Technology provides strategic guidance, innovative technological solutions, customer service and information security to business units, brands and employees across NBCUniversal. NBCUniversal's IT teams simplify and improve our clients’ experiences with innovative technology, while developing solutions that transform how we shape the future of media and entertainment.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="mr-auto ml-auto" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function EngModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mr-auto ml-auto mt-2 mb-2" variant="primary" onClick={handleShow}>
          Engineering
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Engineering</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Engineering is responsible for the design, implementation and support of all technology, software and infrastructure for Global Media Operations and Production Operations, while ensuring reliable content delivery and linear origination across NBCUniversal’s operations.
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={handleClose} block>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function GMOModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mr-auto ml-auto mt-2 mb-2" variant="primary" onClick={handleShow}>
      Global Media Operations
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Global Media Operations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Global Media Operations is responsible for building and supporting our content supply chain, globally delivering to TV screens and all other viewing platforms. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={handleClose} block>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

class APExperiences extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      showNJModal: false,
      showNYModal: false,
      showCAModal: false,
      showCOModal: false,
      showFLModal: false,
    };
  }

  toggleNJ = () => {
    this.setState({
      showNJModal: !this.state.showNJModal
    });
  }

  toggleNY = () => {
    this.setState({
      showNYModal: !this.state.showNYModal
    });
  }

  toggleCA = () => {
    this.setState({
      showCAModal: !this.state.showCAModal
    });
  }

  toggleCO = () => {
    this.setState({
      showCOModal: !this.state.showCOModal
    });
  }

  toggleFL = () => {
    this.setState({
      showFLModal: !this.state.showFLModal
    });
  }

  mapHandler = (event) => {
    if (event.target.dataset.name === "NJ") {
          this.toggleNJ();
    }
    else if (event.target.dataset.name === "NY") {
      this.toggleNY();
    }
    else if (event.target.dataset.name === "CA") {
      this.toggleCA();
    }
    else if (event.target.dataset.name === "CO") {
      this.toggleCO();
    }
    else if (event.target.dataset.name === "FL") {
      this.toggleFL();
    }
  };  

  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "#896EB1"
      },
      "NY": {
        fill: "#896EB1"
      },
      "CA": {
        fill: "#896EB1"
      },
      "CO": {
        fill: "#896EB1"
      },
      "FL": {
        fill: "#896EB1"
      },
    };
  };


  render () {
      console.log(window.innerWidth);
      return (
          <div className="APExperiences" id="Experiences">
              <h1>Associate Experiences</h1>
              <h2>Our Associate Departments</h2>
              <Container>
                <Row>
                  <Col><ITModal /></Col>
                  <br />
                  <Col><EngModal /></Col>
                  <Col><GMOModal /></Col>
                </Row>
              </Container>
              <br />
              <br />

              <h2>Hear from some of our associates across the country.</h2>
              <USAMap className="USA" width={(window.innerWidth > 500) ? 1000:400} customize={this.statesCustomConfig()} onClick={this.mapHandler}/>
  
              <br/>
              {/* NJ MODAL */}
              <Modal size="lg" show={this.state.showNJModal} onHide={this.toggleNJ} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Associate Profile: Englewood Cliffs, New Jersey</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      <Col>
                        <p><img width="*" height="200" src={mtran}/></p>
                        <p>Name: Marcie Tran</p>
                        <p>Program: Technology</p>
                        <p>Team: Media Engineering</p>
                        <p>Field: Software Development</p>
                        <p>Description: Integrated machine learning APIs into existing post-production workflows to enable automated video and audio analysis, such as facial recognition and video transcription.</p>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={this.toggleNJ} block>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* NY MODAL */}
              <Modal size="lg" show={this.state.showNYModal} onHide={this.toggleNY} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Associate Profile: New York City, New York</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      <Col>
                        <p><img width="*" height="200" src={luke}/></p>
                        <p>Name: Luke Casino</p>
                        <p>Program: Engineering</p>
                        <p>Team: Production Engineering</p>
                        <p>Description: Designed and managed implementation of various productions around 30 Rock. Implemented new video source in control room to help create new Virtual Machine system 
                          for running Grass Valley Router application. Helped design new room for the 31/32 floor which houses all graphics consoles and robotics/video shading consoles. 
                          Routinely used AutoCAD, Visio design and IT hardware config.</p>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={this.toggleNY} block>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* CA MODAL */}
              <Modal  size="lg" show={this.state.showCAModal} onHide={this.toggleCA} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Associate Profile: Universal City, California</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      <Col>
                        <p><img width="*" height="200" src={anders}/></p>
                        <p>Name: Anders Simmeth</p>
                        <p>Program: Technology</p>
                        <p>Team: Filmed Entertainment IT</p>
                        <p>Field: Data Science</p>
                        <p>Description: Worked with a team of data scientists to build models according to our research team’s needs and requirements. 
                          Mainly focused on two models. The first was a random forest model that predicted first weekend box office sales for upcoming releases. 
                          The second was a clustering model used to determine a list of comparable films for upcoming releases.</p>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={this.toggleCA} block>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* CO MODAL */}
              <Modal  size="lg" show={this.state.showCOModal} onHide={this.toggleCO} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Associate Profile: Dry Creek, Colorado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      <Col>
                        <p><img width="*" height="200" src={donny}/></p>
                        <p>Name: Donny Ta</p>
                        <p>Program: Engineering</p>
                        <p>Team: Media Technology Engineering</p>
                        <p>Description: Oversaw the new MOC, set up work stations, deployed apps using Ansible, and ensured work stations were ready for Operations to test/use 
                          (networking, hardware, etc). Assisted operations team in solving media issues involving post-production (file specs, audio normalization, playback issues, etc), 
                          storage, or delivery.</p>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={this.toggleCO} block>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* FL MODAL */}
              <Modal show={this.state.showFLModal} onHide={this.toggleFL} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Associate Profile: Orlando, Florida</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      <Col>
                        <p><img width="*" height="200" src={gabe}/></p>
                        <p>Name: Gabe Gamez</p>
                        <p>Program: Technology</p>
                        <p>Team: Advanced Resort Technology</p>
                        <p>
                          Description: Worked with the Television Distribution business to create a 
                          Master Data Management solution for all NBCU Film and TV titles. 
                          Goal was to streamline and track metadata to improve workflow processes with 
                          best practices in mind. Engagement with business leads to determine 
                          new governance workflow processes and improvement for future state. Learning 
                          about various applications and mapping attributes from their databases to a new one.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={this.toggleFL} block>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>


              {/* <Container>
                  <Row>
                  <Col> 
                      <h2>Hear From Our Associates</h2>
                      <br/>
                      <div id="intProjDesc">
                          <h5>Marcie Tran, Software Development, Media Engineering – Englewood Cliffs, NJ</h5>
                          <p>Integrated machine learning APIs into existing post-production workflows to enable automated video and audio analysis, such as facial recognition and video transcription.</p>

                          <h5>Tyler Schad, NOC Expansion, On-Air Operations-Englewood Cliffs, NJ</h5>
                          <p>Expanded On-Air operational capacity and refreshed the Network Operation Center & communal employee spaces.</p>

                          <h5>Nick Polsin, Information Security, Sports Business-Englewood Cliffs, NJ</h5>
                          <p>Responsible for leading the deployment of an endpoint patching/systems management solution throughout the NBC Sports teams, and starting up consistent vulnerability scans throughout the team's supported businesses (Sports, Owned Stations, RSNs, Golf, etc.). Also, managed inventory of loaned hardware for company travel and reporting on the patching status of the various Sports businesses. </p>
                      </div>
                  </Col>
                  <div className="border-ap"></div>
                  <Col> 
                      <h2>Experience by Location</h2>
                      <div className="expByDepartment">
                          <ITModal />
                      </div>
                      <div className="expByDepartment">
                          <EngModal />
                      </div>
                      <div className="expByDepartment">
                          <GMOModal />
                      </div>
                  </Col>
                  </Row>
              </Container> */}
          </div>
      );
    }
}

export default APExperiences;