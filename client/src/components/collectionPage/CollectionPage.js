import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import axios from "axios";
import uniqid from "uniqid";
import AddDeckModal from "./AddDeckModal";
import FloatingAddButton from "../shared/FloatingAddButton";

const CollectionPage = ({id}) => {
  useEffect(() => {
    getDecks();
    getCards();
  }, [id]);

  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);

  const getDecks = async () => {
    if (id) {
      const res = await axios.get(`/api/user/${id}/decks`);
      setDecks(res.data)
    }
  };

  const getCards = async () => {
    if (id) {
      const res = await axios.get(`/api/cards`);
      setCards(res.data.cards)
    }
  };

  const renderDecks = () => {
    if (decks) {
      return decks.map(deck => {
        return (
          <Col xs="12" key={uniqid()}>
            {deck.name}
          </Col>
        )
      })
    }
  };

  const renderCards = () => {
    if (cards && cards.length > 0) {
      return cards.map(card => {
        return (
          <Col xs="12" key={uniqid()}>
            {card.name}
          </Col>
        )
      })
    }
  };

  return (
    <Row>
      <FloatingAddButton action={toggle}/>
      <AddDeckModal open={modalOpen} toggle={toggle} decks={decks} setDecks={setDecks}/>
      {renderDecks()}
      {renderCards()}
    </Row>
  )
};

const mapStateToProps = state => {
  return {id: state.auth._id};
};

export default connect(mapStateToProps, null)(CollectionPage);
