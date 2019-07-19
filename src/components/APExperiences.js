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
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Information Technology</Modal.Title>
          </Modal.Header>
          <Modal.Body>NBCUniversal is the fastest growing media company. We’re constantly innovating, and with that comes a plethora of opportunities. Here you can learn how to power amazing events like the Olympics, FIFA World Cup and more! You’ll get to see how we keep your TV favorites like SNL and The Tonight Show Starring Jimmy Fallon on-air and running smoothly.</Modal.Body>
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
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Engineering</Modal.Title>
          </Modal.Header>
          <Modal.Body>NBCUniversal is the fastest growing media company. We’re constantly innovating, and with that comes a plethora of opportunities. Here you can learn how to power amazing events like the Olympics, FIFA World Cup and more! You’ll get to see how we keep your TV favorites like SNL and The Tonight Show Starring Jimmy Fallon on-air and running smoothly.</Modal.Body>
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
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Global Media Operations</Modal.Title>
          </Modal.Header>
          <Modal.Body>NBCUniversal is the fastest growing media company. We’re constantly innovating, and with that comes a plethora of opportunities. Here you can learn how to power amazing events like the Olympics, FIFA World Cup and more! You’ll get to see how we keep your TV favorites like SNL and The Tonight Show Starring Jimmy Fallon on-air and running smoothly.</Modal.Body>
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
                                <h4>Marcie Tran, Software Development, Media Engineering – Englewood Cliffs, NJ</h4>
                                <p>"Integrated machine learning APIs into existing post-production workflows to enable automated video and audio analysis, such as facial recognition and video transcription."</p>

                                <h4>Tyler Schad, NOC Expansion, On-Air Operations-Englewood Cliffs, NJ</h4>
                                <p>Expanded On-Air operational capacity and refreshed the Network Operation Center & communal employee spaces.</p>

                                <h4>Third Associate</h4>
                                <p>somethingggggggggggggggggggggggg</p>
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