import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import axios from "axios";
import uniqid from "uniqid";
import DeckModal from "./DeckModal";
import FloatingAddButton from "../shared/FloatingAddButton";

const DeckPage = ({id}) => {
  useEffect(() => {
    getDecks()
  }, [id]);

  const [decks, setDecks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
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
        return (
          <Col xs="12" key={uniqid()}>
            {deck.name}
          </Col>
        )
      })
    }
  };

  return (
    <Row>
      <FloatingAddButton action={toggle}/>
      <DeckModal open={modalOpen} toggle={toggle} decks={decks} setDecks={setDecks}/>
      {renderDecks()}
    </Row>
  )
};

const mapStateToProps = state => {
  return {id: state.auth._id};
};

export default connect(mapStateToProps, null)(DeckPage);
