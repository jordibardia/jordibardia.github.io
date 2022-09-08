import Projects from './projects';
import Experience from './experience';
import React, {useEffect, useState} from "react";
import {Navbar, Image, Container, Col, Row, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Homepage = () => {
    return (
        <div style={{width:'100%', margin: 'auto'}}>
            <Container className = "homepageContainer">
                <Row>
                    <Col>
                        <h1 className = "container_name">Jordi Bardia</h1>
                        <Image src="profile_pic1.jpg" className = "profileImg" roundedCircle/>
                        <Navbar>
                            <div className="social-links">
                                <a href="tel:7862122520" rel = "noopener noreferrer" target="_blank">
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                </a>

                                <a href="mailto:jordi.bardia@gmail.com" rel = "noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                                </a>

                                <a href="https://www.github.com/jordibardia" rel = "noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </Navbar>
                        <Tabs defaultActiveKey="resume" className="mb-3" justify={true}>
                            <Tab eventKey="resume" title="Resume">
                                <div className="resume-div">
                                    <iframe src = "https://drive.google.com/file/d/1aq2rJm62fyxApQymHJfPUugdwAsEthmA/preview" width = "640" height = "480" className = "resume-iframe"/>
                                </div>
                            </Tab>
                            <Tab eventKey="experience" title="Experience">
                                <Experience/>
                            </Tab>
                            <Tab eventKey="projects" title="Projects">
                                <Projects/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Homepage;