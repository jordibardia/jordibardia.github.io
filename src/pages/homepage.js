import React, {useEffect, useState} from "react";
import {Button, Navbar, Image, Container, Grid, Col, Row, Card, Collapse, CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import testImg from "./assets/2cool.jpg"
import './style.css';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//import Projects from './projects';

//const [open, setOpen] = useState(false);

const Homepage = () => {
    const [openProjects, setOpenProjects] = useState(false);
    const [openResume, setOpenResume] = useState(false);
    const [numPages, setNumPages] = useState(1);
    
    return (
        <div style={{width:'100%', margin: 'auto'}}>
            <Container className = "homepageContainer">
                <Row>
                    <Col>
                        <h1 className = "container_name">Jordi Bardia</h1>
                        <Image src={testImg} className = "testImg" roundedCircle/>
                        <Navbar>
                            <div className="social-links">
                                <a href="tel:3058511273" rel = "noopener noreferrer" target="_blank">
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                </a>

                                <a href="mailto:jbardia@ufl.edu" rel = "noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                                </a>

                                <a href="https://www.google.com" rel = "noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                <a href="https://www.github.com/jordibardia" rel = "noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </Navbar>
                        <Navbar>
                            <div className = "site-links">
                                <Button variant = "link" size = "lg" onClick={() => {setOpenProjects(false);
                                                                                     setOpenResume(!openResume)}}>Resume</Button>
                                <Button variant = "link" size = "lg" onClick={() => {setOpenResume(false);
                                                                                    setOpenProjects(!openProjects)}}>Projects</Button>
                            </div>
                        </Navbar>
                        <Collapse in={openProjects}>
                            <CardDeck>
                                <Card style = {{width: '18rem'}}>
                                    <Card.Body>
                                        <Card.Title>myAvatar</Card.Title>
                                        <Card.Text>
                                            GUI application that renders 3D models of faces from images using Machine Learning.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style = {{width: '18rem'}}>
                                    <Card.Body>
                                        <Card.Title>Rogue Royale</Card.Title>
                                        <Card.Text>
                                            2D single-player Battle Royale game built with Pygame.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Collapse>
                        <Collapse in={openResume}>
                            <Document file = "assets/resume_cs.pdf" onLoadError={console.error}>
                                <Page pageNumber={numPages}/>
                            </Document>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Homepage;