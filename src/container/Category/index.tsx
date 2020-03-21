import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import Confirm from '../../core/component/Confirm';
import Form from './Form';
import List from './List';

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
                    <List handleUpdate={handleFormShow} handleRemove={handleAlertShow}></List>
                </Col>
            </Row>
            <Form show={formShow} handleClose={handleFormClose}></Form>
            <Confirm
            show={alertShow}
            handleClose={handleAlertClose}
            title='Remove Category'
            text='Are you sure you want to remove this item?'></Confirm>
        </div>
    );
}

export default Category;