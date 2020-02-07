import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal,
  Form,
  FormGroup,
  Input,
  Label,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { Button } from "@material-ui/core";
import { makeToast } from "../../toasts";

const EditDeckModal = ({open, toggle, deck}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await axios.put(`/api/decks/${deck._id}`, {name, description})
      .then((res) => {
        toggle();
        makeToast('success', 'Deck created successfully')
      })
      .catch((err) => {makeToast('error', err.message)})
  };

  const renderForm = () => {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="text"
            name="deckName"
            id="deckName"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name your deck"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input
            type="textarea"
            name="deckDescription"
            id="deckDescription"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Give your deck a description"
          />
        </FormGroup>
      </Form>
    )
  };

  return (
    <div>
      <Modal isOpen={open} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>New Deck</ModalHeader>
        <ModalBody>
          {renderForm()}
        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={toggle}>Cancel</Button>
          <Button variant="outlined" disabled={name.length < 3} color="primary"
                  onClick={() => handleSubmit()}>Edit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditDeckModal;