import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from "@material-ui/core";
import axios from "axios";

const AddCardModal = ({open, toggle, card, deckId = null}) => {
  const cardData = {
    name: card.name,
    text: card.text,
    imageUrl: card.src,
    cardTypes: card.types,
    rarity: card.rarity,
    colours: card.colours,
    set: card.set,
    power: card.power,
    toughness: card.toughness,
    artist: card.artist,
    deckId: deckId
  };

  const handleSubmit = async () => {
    await axios.post('/api/cards', cardData)
  };

  return (
    <div>
      <Modal isOpen={open} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Save Card To Collection</ModalHeader>
        <ModalBody>
          add card to deck
        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={toggle}>Cancel</Button>
          <Button variant="outlined" color="primary" onClick={() => handleSubmit()}>Save card</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddCardModal;