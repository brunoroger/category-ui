import React from 'react';
import { Modal, Form as Formboots, Button } from 'react-bootstrap';

type FormProps = { show: boolean, handleClose: () => void }

function Form({ show, handleClose }: FormProps){
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Save Category</Modal.Title>
            </Modal.Header>
            <Formboots>
                <Modal.Body> 
                    <Formboots.Group controlId="name">
                        <Formboots.Label>Name</Formboots.Label>
                        <Formboots.Control type="text" />
                    </Formboots.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Formboots>
        </Modal>
    );
}

export default Form;