import React from 'react';
import { connect } from 'react-redux';
import uniqid from "uniqid";
import { Col, Row } from "react-bootstrap";

const SearchResults = ({cards}) => {

  const renderCards = () => {
    if (cards && cards.cards) {
      return cards.cards.map(card => {
        return (
          <Row key={uniqid()} className="justify-content-center">
            <img src={card.imageUrl} alt="mtg card"/>
          </Row>
        )
      });
    } else {
      return null;
    }
  };

  return renderCards()
};

const mapStateToProps = (state) => {
  return {cards: state.cardSearch}
};

export default connect(mapStateToProps, null)(SearchResults);

