import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import { useSelector } from "react-redux";
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

const SaveCardButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const selectedCards = useSelector(state => state.cardSearchSelect);

  const toggle = () => setModalOpen(!modalOpen);

  const handleSubmit = async () => {
    await axios.post('/api/cards', {cards: selectedCards})
      .then(() => makeToast('success', 'Cards successfully saved to collection'))
      .catch(err => makeToast('error', err.message))
  };

  return (
    <span className={selectedCards.length > 0 ? 'save-card-container' : 'd-none save-card-container'}>
      <div className={classes.root}>
        <Fab aria-label="add" onClick={() => toggle()}>
          <SaveIcon/>
        </Fab>
      </div>

      <Modal isOpen={modalOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Save Card To Collection</ModalHeader>
        <ModalBody>
          add cards to your collection
        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={toggle}>Cancel</Button>
          <Button variant="outlined" color="primary" onClick={() => handleSubmit()}>Save</Button>
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default SaveCardButton;