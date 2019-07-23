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
            <Modal.Title>Information Technology</Modal.Title>
          </Modal.Header>
          <Modal.Body>Information Technology provides strategic guidance, innovative technological solutions, customer service and information security to business units, brands and employees across NBCUniversal. NBCUniversal's IT teams simplify and improve our clients’ experiences with innovative technology, while developing solutions that transform how we shape the future of media and entertainment.</Modal.Body>
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
        <Button variant="primary" onClick={handleShow}>
            Engineering
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Engineering</Modal.Title>
          </Modal.Header>
          <Modal.Body>Engineering is responsible for the design, implementation and support of all technology, software and infrastructure for Global Media Operations and Production Operations, while ensuring reliable content delivery and linear origination across NBCUniversal’s operations.</Modal.Body>
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
            <Modal.Title>Global Media Operations</Modal.Title>
          </Modal.Header>
          <Modal.Body>Global Media Operations is responsible for building and supporting our content supply chain, globally delivering to TV screens and all other viewing platforms. </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" size="lg" className="mr-auto ml-auto" onClick={handleClose} block>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

class Experiences extends Component {
    render () {
        return (
            <div className="Experiences" id="Experiences">
                <h1>Intern Experiences</h1>
                <Container>
                    <Row>
                    <Col> {/* LEFT COLUMN */} 
                            <h2>Intern Projects</h2>
                            <br/>
                            <div id="intProjDesc">
                                <h4>2019</h4>
                                <p>Interns were tasked with redesigning the Media Tech website. They were divided into teams and were responsible for research, planning and development of the site.</p>
                                <h4>2018</h4>
                                <p>Interns were asked to design an interactive ad experience to promote NBC content. Groups used platforms such as Snapchat and partnered with NBC brands like Fandago and Universal Studios to achieve this.</p>
                                <h4>2017</h4>
                                <p>Interns were asked to create a mobile application incorporating Amazon Alexa and NBC Content. For example, one group designed an interactive app using augmented reality to promote the (then) upcoming movie, "How To Train Your Dragon 2."</p>
                            </div>
                            </Col>
                    <div className="border-mt"></div>
                    <Col> {/* RIGHT COLUMN */}
                        <h2>Experiences by Department</h2>
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

export default Experiences;