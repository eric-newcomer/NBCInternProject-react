import React, { Component } from 'react';
import  {Accordion, Card, } from 'react-bootstrap';

class Faqs extends Component {
    render() {
        return (
            <div className="Faqs" id="FAQs">
                <h1>FAQs</h1>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <a href="#faq">Who should apply for internship positions?<i className="material-icons">keyboard_arrow_down</i></a>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Rising juniors and rising seniors, who are currently enrolled at an accredited college/university and legally eligible to work in the U.S. may apply.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <a href="#faq">Who should apply for associate positions?<i class="material-icons">keyboard_arrow_down</i></a>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>If you are a recent graduate of a college/university and are legally eligible to work in the U.S., you may apply.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        <a href="#faq">Are interns provided with housing?<i class="material-icons">keyboard_arrow_down</i></a>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Interns are responsible for securing their own housing. However, the Campus team will provide suggestions where students can search for housing opportunities.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                        <a href="#faq">What opportunities are there outside of work?<i class="material-icons" id="arrow-down">keyboard_arrow_down</i></a>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Throughout the internship there are various planned events for interns to network and receive mentoring. For example, the NBCU TECHWomen Speed Mentoring event which allows MediaTech’s female interns to receive advice and talk to women in technology fields throughout the company.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                        <a href="#faq">What opportunities are there after the intern program?<i class="material-icons" id="arrow-down">keyboard_arrow_down</i></a>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>The intern program provides many contacts and allows students to grow their network. It also serves as a direct line into our associates program. Interns are able to apply and interview for the associates program while completing their internship.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                        <a href="#faq">What is the difference between the Intern and Associate’s program?<i class="material-icons" id="arrow-down">keyboard_arrow_down</i></a>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>Interns are currently enrolled college students while Associates are recent graduates. The associates program is also rotational and 2 years long while the intern program is only 10 weeks in one location. The associates program is an early career development path that leads to a job at NBCU.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default Faqs;