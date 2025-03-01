import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
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
import { FETCH_DECKS } from "../../actions/types";

const AddDeckModal = ({open, toggle, decks}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/decks', {name, description})
      .then((res) => {
        toggle();
        makeToast('success', 'Deck created successfully');
        dispatch({type: FETCH_DECKS, payload: [...decks, res.data]})
      })
      .catch((err) => {makeToast('error', err.message)})
  };

  const renderForm = () => {
    return (
      <Form submit={e => e.preventDefault()}>
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
                  onClick={() => handleSubmit()}>Submit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddDeckModal;