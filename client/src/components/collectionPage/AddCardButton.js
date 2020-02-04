import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import { makeToast } from "../../toasts";
import Select from "react-select";

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
  const decks = useSelector(state => state.decks);
  const [selectedOption, setSelectedOption] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const selectedCards = useSelector(state => state.cardSearchSelect);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const deckOptions = () => {
    if (decks && decks.length > 0) {
      return decks.map(deck => {
        return {value: deck._id, label: deck.name}
      })
    } else {
      return []
    }
  };

  const toggle = () => setModalOpen(!modalOpen);

  const handleSubmit = async (deck) => {
    const {value, label} = deck;
    await axios.post(`/api/decks/${value}/cards`, {cards: selectedCards})
      .then(() => makeToast('success', `Cards successfully saved to ${label}`))
      .catch(err => makeToast('error', err.message))
  };

  return (
    <span className={selectedCards.length > 0 ? 'save-card-container' : 'd-none save-card-container'}>
      <div className={classes.root}>
        <Fab aria-label="add" onClick={() => toggle()}>
          <AddIcon/>
        </Fab>
      </div>

      <Modal isOpen={modalOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Save Card To Collection</ModalHeader>

        <ModalBody>
          <span className="mb-4">
            Add cards to your collection:
          </span>

           <Select
             className="mt-3"
             value={selectedOption}
             onChange={handleChange}
             options={deckOptions()}
           />

        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={toggle}>Cancel</Button>
          <Button variant="outlined" color="primary" disabled={selectedOption.length < 1}
                  onClick={() => handleSubmit(selectedOption)}>Save</Button>
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default AddCardButton;