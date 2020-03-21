import React from 'react';
import { Table, Button } from 'react-bootstrap';

type ListProps = {
    handleUpdate: () => void,
    handleRemove: () => void
}

function List({ handleUpdate, handleRemove }: ListProps){
    return (
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
                        <Button variant="primary" onClick={handleUpdate}>Update</Button>
                        &nbsp;
                        <Button variant="danger" onClick={handleRemove}>Remove</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default List;