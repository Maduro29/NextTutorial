'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react';
import { mutate } from 'swr';

interface IProps {
    showModal: boolean,
    setShowModal: (value: boolean) => void,
    author: IAuthor | null,
    setAuthor: (value: IAuthor) => void
}

function UpdateModal(props: IProps) {
    const { showModal, setShowModal, author } = props;
    const [idAuthor, setIdAuthor] = useState<number>();
    const [name, setName] = useState<string>();
    const [avatar, setAvatar] = useState<string>();

    //use useEffect to fill data in the form cuz cannot set undefined value in useState
    useEffect(() => {
        fillUpdateModal();
    }, [author])

    const fillUpdateModal = () => {
        if (author && author.id) {
            setIdAuthor(author.id);
            setName(author.name);
            setAvatar(author.avatar);
        }
    }

    const handleUpdate = () => {
        if (name || avatar) {
            const params = new URLSearchParams();
            params.append('name', name !== undefined ? name : '');
            params.append('avatar', avatar !== undefined ? avatar : '');
            params.append('id', idAuthor !== undefined ? idAuthor.toString() : '');
            fetch("http://34.87.168.245:3000/updateauthor",
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
                        fillUpdateModal();
                    } else {
                        toast.success(data.message)
                        setShowModal(false)
                        mutate('http://34.87.168.245:3000/getallauthors')
                    }
                }) // handle the parsed data
                .catch(function (res) { console.log(res) })
        }
        setName('')
        setAvatar('')
    }


    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Author</Modal.Title>
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
                    <Button variant="primary" onClick={() => handleUpdate()}>
                        Done Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModal;