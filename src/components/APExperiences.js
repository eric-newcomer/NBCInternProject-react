import React, { Component, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
// import useState from "react-dom";

function ITModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Information Technology
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Information Technology Locations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            The Information Technology organization architects and supports all technical infrastructure across NBCUniversal properties. Rotations are focused on data analytics and cyber security, with opportunities to build skills across software development, data science, security analysis, and platform engineering. Associates will also gain technical project management experience.
              <h5>Dry Creek, Colorado</h5>
              <h5>Los Angeles, California</h5>
              <h5>New York City, New York</h5>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
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
        <Button variant="primary" onClick={handleShow}>
            Engineering
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Engineering Locations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Engineering teams focus on building, customizing, and supporting media pipelines that services business units across the company. Rotations typically focus on encoding & video workflows in Media Engineering, migrating services to cloud infrastructure in Cloud Engineering, and Production Engineering in LA & 30 Rock studios.
              <h5>Dry Creek, Colorado</h5>
              <h5>Los Angeles, California</h5>
              <h5>New York City, New York</h5>
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
        <Button className="mr-auto ml-auto" variant="primary" onClick={handleShow}>
        Global Media Operations
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Global Media Operations Locations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Global Media Operations is responsible for building and supporting our content supply chain, globally delivering to TV screens and all other viewing platforms. Associates are deployed to high-priority projects across media fulfillment, distribution, and content management. Rotations have an emphasis on business analysis, workflow optimization, and project/product management.
              <h2>Dry Creek, Colorado</h2>
              <h2>Los Angeles, California</h2>
              <h2>New York City, New York</h2>
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
    render () {
        return (
            <div className="APExperiences" id="Experiences">
                <h1>Associate Experiences</h1>
                <Container>
                    <Row>
                    <Col> {/* LEFT COLUMN */} 
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
                    <Col> {/* RIGHT COLUMN */}
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
                </Container>
            </div>
        );
    }
}

export default APExperiences;