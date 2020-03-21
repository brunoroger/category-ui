import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type ConfirmProps = {
    show: boolean,
    handleClose: () => void,
    title: string,
    text: string
};

function Confirm({show, handleClose, title, text}: ConfirmProps){
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                {text}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    NO
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    YES
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Confirm;