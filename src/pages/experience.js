import React, {Fragment} from "react";
import { Card, CardDeck, Nav, ListGroup, ListGroupItem } from "react-bootstrap";


const Experience = () => {
    return(
        <Fragment>
            <Card className="experience-card">
                <Card.Img src = "ironsoftware.png" className="experience-card-img"/>
                <Card.Body>
                    <Card.Title>Iron Software</Card.Title>
                    <Card.Text><i>Software Engineer</i></Card.Text>
                    <Card.Text>
                        Here I work on developing C# libraries (some with a C++ base) that are
                        used by thousands of software engineers, as well as internal testing and benchmarking tools. 
                        I primarily work with C#, C++, Python, Azure, and Avalonia UI. I've also interacted with customers
                        to gather and implement product feedback and conducted market research to guide plans for product development.
                    </Card.Text>
                    <Card.Text>
                        <b>Technologies/Languages:</b>
                            <br/>
                            C#, C++, Azure
                    </Card.Text>
                    <Card.Text>
                        <b><i>June 2023 - Present</i></b>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card className="experience-card">
                <Card.Img src="smilelab.png" className="experience-card-img"/>
                <Card.Body>
                    <Card.Title>SMILE Lab</Card.Title>
                    <Card.Text><i>Research Assistant</i></Card.Text>
                    <Card.Text>
                        I conducted research at the Smart Medical Informatics Learning and Evaluation Lab at the
                        University of Florida, under Dr. Ruogu Fang. I worked on projects related to medical image analysis
                        and image sentiment recognition.
                    </Card.Text>
                    <Card.Text>
                        <b>Technologies/Languages:</b>
                            <br/>
                            Python, PyTorch, Git, Linux
                    </Card.Text>
                    <Card.Text>
                        <b><i>December 2021 - April 2023</i></b>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card className="experience-card">
                <Card.Img src="ag_black.jpg" className="experience-card-img"/>
                <Card.Body>
                    <Card.Title>Amazon Games</Card.Title>
                    <Card.Text><i>Software Development Engineer Intern</i></Card.Text>
                    <Card.Text>
                        At Amazon Games, I worked on an internal tool that supported the development of games within the company.
                        More specifically, I worked on a tool for distributing files to multiple machines and running tests, adding functionality
                        to make the file distribution more quickly and efficiently. By utilizing the iSCSI (and later SMB) protocol and several AWS services,
                        I was able to achieve a 40% increase in operation rate (based on amount of data transferred within a given time period).
                    </Card.Text>
                    <Card.Text>
                        <b>Technologies/Languages:</b>
                            <br/>
                            C#, PowerShell, AWS (Systems Manager, CloudWatch, EC2, DynamoDB), Git, Linux
                    </Card.Text>
                    <Card.Text>
                        <b><i>May 2021 - August 2021</i></b>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
    };
    
    export default Experience;