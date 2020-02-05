import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import Fab from '@material-ui/core/Fab';
import { withRouter } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";

import { makeToast } from "../../toasts";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


const RemoveFromDeckButton = ({match}) => {
  const selectedCards = useSelector(state => state.selectedCards);

  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const toggle = () => setModalOpen(!modalOpen);

  const handleSubmit = async () => {
    const idsToRemove = selectedCards.map(card=>card.id)
    console.log(idsToRemove)
    await axios.delete(`/api/decks/${match.params.id}/cards`, {data: {cards: idsToRemove}})
      .then(() => makeToast('success', 'Cards successfully saved to collection'))
      .catch(err => makeToast('error', err.message))
  };

  return (
    <span className={selectedCards.length > 0 ? 'save-card-container' : 'd-none save-card-container'}>
      <div className={classes.root}>
        <Fab aria-label="add" onClick={() => toggle()}>
          <DeleteIcon/>
        </Fab>
      </div>

      <Modal isOpen={modalOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Delete Deck</ModalHeader>
        <ModalBody>
          Are you sure you wish to remove these cards from your deck? They can still be found in your collection.
        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={toggle}>Cancel</Button>
          <Button variant="outlined" color="primary" onClick={() => handleSubmit()}>Remove</Button>
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default withRouter(RemoveFromDeckButton);