import Projects from './projects';
import Experience from './experience';
import React, {useEffect, useState} from "react";
import {Button, Navbar, Image, Container, Col, Row, Card, Collapse, CardDeck, ListGroup, ListGroupItem, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Homepage = () => {
    const [openProjects, setOpenProjects] = useState(false);
    const [openExperience, setOpenExperience] = useState(false);
    const [openResume, setOpenResume] = useState(false);
    //const [openAvatarModal, setOpenAvatarModal] = useState(false);
    //const [openRRModal, setOpenRRModal] = useState(false);
    //const [openNNModal, setOpenNNModal] = useState(false);

    const switchContent = (param) => { //For instant switching if another selection is open
        switch(param){
            case 'projects':
                {
                    if (openResume){
                        return 0;
                    }
                    return 300;
                }
            case 'experience':
                {
                    if (openExperience){
                        return 0;
                    }
                    return 300;
                }
            case 'resume':
                {
                    if (openProjects){
                        return 0;
                    }
                    return 300;
                }
            default:
                return 0;
        }
    }

    return (
        <div style={{width:'100%', margin: 'auto'}}>
            <Container className = "homepageContainer">
                <Row>
                    <Col>
                        <h1 className = "container_name">Jordi Bardia</h1>
                        <Image src="profile_pic.JPG" className = "profileImg" roundedCircle/>
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
                        <Navbar>
                            <div className = "site-links">
                                <Button variant = "link" size = "lg" onClick={() => {setOpenProjects(false);
                                                                                    setOpenExperience(false);
                                                                                    setOpenResume(!openResume)}}>Resume</Button>
                                <Button variant = "link" size = "lg" onClick={() => {setOpenProjects(false);
                                                                                    setOpenExperience(!openExperience);
                                                                                    setOpenResume(false);}}>Experience</Button>
                                <Button variant = "link" size = "lg" onClick={() => {setOpenProjects(!openProjects);
                                                                                    setOpenExperience(false);
                                                                                    setOpenResume(false);}}>Projects</Button>
                            </div>
                        </Navbar>
                        <Collapse in={openProjects} timeout = {switchContent('projects')}>
                            <div>
                                <Projects/>
                            </div>
                        </Collapse>
                        <Collapse in={openExperience} timeout = {switchContent('experience')}>
                            <div>
                                <Experience/>
                            </div>
                        </Collapse>
                        <Collapse in={openResume} timeout = {switchContent('resume')}>
                            <div className="resume-div">
                                <iframe src = "https://drive.google.com/file/d/1aq2rJm62fyxApQymHJfPUugdwAsEthmA/preview" width = "640" height = "480" className = "resume-iframe"/>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Homepage;