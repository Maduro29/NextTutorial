'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'
import { useState } from 'react';
import { mutate } from 'swr';

interface IProps {
    showModal: boolean,
    setShowModal: (value: boolean) => void;
}

function CreateModal(props: IProps) {
    const { showModal, setShowModal } = props;
    const [name, setName] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');

    const handleAddNew = () => {
        // toast.error('Add successfully!')
        // setShowModal(false)
        const params = new URLSearchParams();
        params.append('name', name);
        params.append('avatar', avatar);
        fetch("http://34.87.168.245:3000/addauthor",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "POST",
                body: params
            })
            .then(function (res) { return res.json() }) // parse the response body to JSON
            .then(function (data) {
                if (data.errCode == 1) {
                    toast.error(data.message)
                } else {
                    toast.success(data.message)
                    setShowModal(false)
                    mutate('http://34.87.168.245:3000/getallauthors')
                }
            }) // handle the parsed data
            .catch(function (res) { console.log(res) })
        setName('')
        setAvatar('')
    }


    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Author</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name Of Author</Form.Label>
                            <Form.Control type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Author's Avatar URL</Form.Label>
                            <Form.Control type="text"
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleAddNew()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;