import React, { useState } from 'react';
import { Row, Col, Button, Table, Modal, Form } from 'react-bootstrap'

function Category(){
    const [formShow, setFormShow] = useState(false);
    const handleFormClose = () => setFormShow(false);
    const handleFormShow = () => setFormShow(true);

    const [alertShow, setAlertShow] = useState(false);
    const handleAlertClose = () => setAlertShow(false);
    const handleAlertShow = () => setAlertShow(true);

    return (
        <div>
            <Row>
                <Col md={{ span: 2, offset: 10 }}>
                    <Button variant="success" onClick={handleFormShow}>Add</Button>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td>
                                    <Button variant="primary" onClick={handleFormShow}>Update</Button>
                                    &nbsp;
                                    <Button variant="danger" onClick={handleAlertShow}>Remove</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Modal show={formShow} onHide={handleFormClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Save Category</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body> 
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleFormClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleFormClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Modal show={alertShow} onHide={handleAlertClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Category</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    Are you sure you want to remove this item?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleAlertClose}>
                        NO
                    </Button>
                    <Button variant="danger" onClick={handleAlertClose}>
                        YES
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Category;