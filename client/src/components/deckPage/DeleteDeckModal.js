import React from 'react';
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

const DeleteDeckModal = ({open, toggle, decks, setDecks}) => {
  const handleSubmit = async () => {
  console.log('submit')
  //   await axios.post('/api/decks', {name, description})
  //     .then((res) => {
  //       toggle();
  //       makeToast('success', 'Deck created successfully')
  //       setDecks([...decks, res.data])
  //     })
  //     .catch((err) => {makeToast('error', err.message)})
  };

  return (
    <div>
      <Modal isOpen={open} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Delete Deck</ModalHeader>
        <ModalBody>
          Are you sure you wish to delete this deck? The cards will remain in your collection, but the deck will be
          removed permanently.
        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={toggle}>Cancel</Button>
          <Button variant="outlined" color="primary" onClick={() => handleSubmit()}>Delete</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteDeckModal;