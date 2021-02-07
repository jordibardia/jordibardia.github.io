import React, {Fragment} from "react";
import {Image, Modal} from 'react-bootstrap';

const Modals = (param) => { 
    const [openAvatarModal, setOpenAvatarModal] = useState(false);
    const [openRRModal, setOpenRRModal] = useState(false);
    const [openNNModal, setOpenNNModal] = useState(false);
return(
    <Fragment>
    <Modal show={openAvatarModal} onHide={() => {setOpenAvatarModal(false);}} size = {'xl'}>
        <Modal.Header closeButton>
            <Modal.Title>myAvatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>Originally developed as a submission for the course "Deep Learning in Computer Graphics." In its current state,
            the user has the ability to take a picture of themself using a webcam and submit the picture into the machine learning model to
            generate a 3D model of their face. After generating the 3D model, the program automatically displays the result. The user also
            has the ability to view previous models.
        </Modal.Body>
        <Modal.Body>
            <h4>How it Works</h4>
            The program implements a Convolutional Neural Network developed by Yao Feng et. al, detailed in this <a rel = "noopener noreferrer" target="_blank" href="https://openaccess.thecvf.com/content_ECCV_2018/papers/Yao_Feng_Joint_3D_Face_ECCV_2018_paper.pdf">paper</a>.
            The neural network is trained using "position maps", which are essentially NxNx3 matrices of coordinates representing different points of the face in 3D space.
            These position maps are generated using the 300W-LP dataset, which contain images of faces in several alignments and matrices of values 
            denoting the coordinates and parameter values of key points in the face. These values are used to shape a base 3D model known as the "Basel Face Model"
            into the estimated face shape of the corresponding image.
            <br/>
            <br/>
            The network takes RGB matrices representing images as input and uses the generated position maps as ground truth. After generating a position map, its XYZ coordinates are
            then extrapolated to generate a 3D model and a texture to fit the model, which is then combined to give a final result. The whole process is summarized in the diagram below:
            <Image src="illustrative_diagram.png" className="modal-img"/>
            <br/>
            <br/>
            For the assignment, I trained the model following the methodology in the paper with some slight changes and evaluated the results using random sampling on the ALFW2000 dataset, which contains the same type of data as the 300W-LP dataset. I trained the model on my
            university's supercomputer (HiPerGator) and with ~40% of the 300W-LP dataset, due to resource and time constraints.
        </Modal.Body>
        <Modal.Body>
            <h4>Planned Features</h4>
            Features currently being worked on or will be worked on are:
            <br/>
            - Cosmetic additions (hats, clothes, etc.)
            <br/>
            - Saving full combined model
        </Modal.Body>
        <Modal.Body>
            <h4>Screenshots</h4>
            <div className="modal-img-rr-div">
                <Image src="ma_1.PNG" className = "modal-img-rr"/>
                <Image src="ma_2.PNG" className = "modal-img-rr"/>
                <Image src="ma_3.PNG" className = "modal-img-rr"/>
            </div>
        </Modal.Body>
        <Modal.Body>
            <h4>Languages/Libraries</h4>
            - Python 3.5/3.6
            <br/>
            - Tensorflow 1.14
            <br/>
            - OpenGL
            <br/>
            - Pygame
            <br/>
            - Pygame GUI
            <br/>
            - PyImGui

        </Modal.Body>
    </Modal>
    <Modal show={openRRModal} onHide = {() => {setOpenRRModal(false);}} size = {'xl'}>
        <Modal.Header closeButton>
            <Modal.Title>Rogue Royale</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            A 2D Battle Royale inspired by the <i>Hunger Games</i> and <i>Battle Royale</i> series, as well as the <i>PlayerUnknown's Battlegrounds</i> game. Given how pretty much every popular battle royale is a multiplayer experience, I wanted to make a battle royale game that focuses more on
            the single-player experience, with a unique "storyline" in every playthrough. In its current state, I have most of the fundamental mechanics down—a playable alpha will be ready sometime in the near future.
        </Modal.Body>
        <Modal.Body>
            <h4>Planned Features</h4>
            Features currently being worked on or will be worked on are:
            <br/>
            - NPC AI
            <br/>
            - Crafting System
            <br/>
            - Original character art
        </Modal.Body>
        <Modal.Body>
            <h4>Screenshots</h4>
            <div className="modal-img-rr-div">
                <Image src="rr_1.PNG" className="modal-img-rr"/>
                <Image src="rr_2.PNG" className="modal-img-rr"/>
            </div>
        </Modal.Body>
        <Modal.Body>
            <h4>Languages/Libraries</h4>
            - Python 3.8
            <br/>
            - Pygame
        </Modal.Body>
        <Modal.Body>
            <h4>Credits</h4>
            All terrain sprites come from <a rel = "noopener noreferrer" target="_blank" href="https://www.opengameart.org">OpenGameArt.org</a> and the character sprites come from <a rel = "noopener noreferrer" target="_blank" href="https://mythologicinteractive.com/Superfighters">Superfighters</a> by MythoLogic Interactive. I do intend to create my own sprites for the characters, and am merely using the Superfighters sprites as
            placeholders.
        </Modal.Body>
    </Modal>
    <Modal show={openNNModal} onHide={() => {setOpenNNModal(false);}} size = {'xl'}>
        <Modal.Header closeButton>
            <Modal.Title>Neuro Navigation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            This project was developed for my Software Engineering class in a team of 7 people (which we called "Health Tech"). For the project, we had to correspond with a "client", who was a neurosurgeon in the Neurosurgery department at my university, to develop a website where patients can check and manage their appointment times, and registrars can oversee all appointments and send reminders for appointments to the patients, which
            were intended to be sent through text using the Twilio API. The website was also intended to give directions to one of the two Neurosurgery clinics from the patient's current location.
            <br/>
            <br/>
            In this project, I mainly worked on the layout, design, and interactibility of the patient and admin account pages, as well as the mobile view of the entire site.
        </Modal.Body>
        <Modal.Body>
            <h4>Screenshots/GIFs</h4>
            <Image src="Homepage.gif" className="modal-img"/>
            Homepage Walkthrough
            <br/>
            <br/>
            <Image src="PatientPage.gif" className="modal-img"/>
            Patient Page Walkthrough
            <br/>
            <br/>
            <Image src="AdminPage.gif" className="modal-img"/>
            Admin Page Walkthrough
        </Modal.Body>
        <Modal.Body>
            <h4>Languages/Libraries/Frameworks</h4>
            - JavaScript
            <br/>
            - HTML
            <br/>
            - CSS
            <br/>
            - React
        </Modal.Body>
    </Modal>
    </Fragment>
)
};

export default Modals