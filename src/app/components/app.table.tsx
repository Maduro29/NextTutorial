'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';

interface IProps {
    authors: IAuthor[]
}

function TestTable(props: IProps) {

    const [author, setAuthor] = useState<IAuthor | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

    const { authors } = props;
    // console.log('check props:', authors)

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
                    {authors?.map(authorItem => {
                        return (
                            <tr>
                                <td>{authorItem.id}</td>
                                <td>{authorItem.name}</td>
                                {/* <td>{author.avatar}</td> */}
                                <td>
                                    <Button className='mx-4' variant='secondary'>
                                        <Link href={'/authors/' + authorItem.id} className='nav-link'>View</Link>
                                    </Button>
                                    <Button className='mx-4' variant='warning' onClick={() => {
                                        setAuthor(authorItem);
                                        setShowModalUpdate(true);
                                    }}>
                                        Edit
                                    </Button>
                                    <Button className='mx-4' variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <CreateModal showModal={showModal} setShowModal={setShowModal} />
            <UpdateModal showModal={showModalUpdate} setShowModal={setShowModalUpdate} author={author} setAuthor={setAuthor} />
        </>
    );
}

export default TestTable;