import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { connect } from "react-redux";
import axios from "axios";
import uniqid from "uniqid";

import AddDeckModal from "./AddDeckModal";
import FloatingAddButton from "../shared/FloatingAddButton";
import DeckCard from "./DeckCard";

const DeckPage = ({id, history}) => {
  const [decks, setDecks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getDecks();
  }, [id]);

  const toggle = () => setModalOpen(!modalOpen);

  const getDecks = async () => {
    if (id) {
      const res = await axios.get(`/api/user/${id}/decks`);
      setDecks(res.data)
    }
  };

  const renderDecks = () => {
    if (decks) {
      return decks.map(deck => {
        return <DeckCard deck={deck} key={uniqid()}/>
      })
    }
  };

  return (
    <Row>
      <FloatingAddButton action={toggle}/>
      <AddDeckModal open={modalOpen} toggle={toggle} decks={decks} setDecks={setDecks}/>
      {renderDecks()}
    </Row>
  )
};

const mapStateToProps = state => {
  return {id: state.auth._id};
};

export default connect(mapStateToProps, null)(DeckPage);
