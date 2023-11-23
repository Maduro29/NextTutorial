'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';

interface IProps {
    authors: IAuthor[]
}

function TestTable(props: IProps) {

    const [showModal, setShowModal] = useState<boolean>(false);

    const { authors } = props;
    console.log('check props:', authors)

    return (
        <>
            <Button variant="primary" onClick={() => setShowModal(true)}>Add New Author</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        {/* <th>Avatar</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors?.map(author => {
                        return (
                            <tr>
                                <td>{author.id}</td>
                                <td>{author.name}</td>
                                {/* <td>{author.avatar}</td> */}
                                <td>
                                    <Button className='mx-4' variant='secondary'>View</Button>
                                    <Button className='mx-4' variant='warning'>Edit</Button>
                                    <Button className='mx-4' variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <CreateModal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default TestTable;