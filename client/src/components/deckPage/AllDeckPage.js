import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { useSelector } from "react-redux";
import uniqid from "uniqid";

import AddDeckModal from "./AddDeckModal";
import FloatingAddButton from "../shared/FloatingAddButton";
import DeckCard from "./DeckCard";

const AllDeckPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const decks = useSelector(state => state.decks);

  const toggle = () => setModalOpen(!modalOpen);

  const renderDecks = () => {
    if (decks && decks.length > 0) {
      return decks.map(deck => {
        return <DeckCard deck={deck} key={uniqid()}/>
      })
    }
  };

  return (
    <Row>
      <FloatingAddButton action={toggle}/>
      <AddDeckModal open={modalOpen} toggle={toggle}/>
      {renderDecks()}
    </Row>
  )
};

export default AllDeckPage;
