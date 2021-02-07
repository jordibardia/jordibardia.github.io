import React from "react";
import {Button, Navbar, Image, Container, Col, Row, Card, Collapse, CardDeck, ListGroup, ListGroupItem, Modal} from 'react-bootstrap';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
return(
    <Document file = "resume_cs_2_website.pdf" onLoadError={console.error}>
        <Page pageNumber={1} scale = {2.0} renderTextLayer = {false} className="testing-page"/>
    </Document>
)
};

export default Resume;