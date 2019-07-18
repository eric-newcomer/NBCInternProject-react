import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h4>2018</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h4>2017</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            </Col>
                    <div className="border-black"></div>
                    <Col> {/* RIGHT COLUMN */}
                        <h2>Experiences by Department</h2>
                        <div className="expByDepartment">
                            <div id="deptButton"><button className="btn">Information Technology</button></div>
                            <div id="deptButton"><button className="btn">Engineering</button></div>
                            <div id="deptButton"><button className="btn">Global Media Operations</button></div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Experiences;