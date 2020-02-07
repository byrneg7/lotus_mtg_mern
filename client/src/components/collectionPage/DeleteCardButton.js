import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from "@material-ui/core";
import axios from 'axios';
import { makeToast } from "../../toasts";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

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


const AddCardButton = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const selectedCards = useSelector(state => state.selectedCards);

  const toggle = () => setModalOpen(!modalOpen);

  const handleSubmit = async () => {
    const cardIds = selectedCards.map(card => card.id);
    await axios.delete(`/api/cards`, {data: {cardIds}})
      .then(() => makeToast('success', 'Cards successfully removed from deck'))
      .catch(err => makeToast('error', err.message))
  };

  return (
    <span className={selectedCards.length > 0 ? 'save-card-container' : 'd-none save-card-container'}>
      <div className={classes.root}>
        <Fab aria-label="add" color="secondary" className="floating-delete-button" onClick={() => toggle()}>
          <DeleteIcon/>
        </Fab>
      </div>

      <Modal isOpen={modalOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Delete Card</ModalHeader>

        <ModalBody>
          <span className="mb-4">
            Are you sure you wish to delete these cards? This action will permanently remove the cards from your collection.
          </span>

        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={toggle}>Cancel</Button>
          <Button variant="outlined" color="primary" onClick={() => handleSubmit()}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default AddCardButton;