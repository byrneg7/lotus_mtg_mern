import React from 'react';
import { connect } from 'react-redux';
import uniqid from "uniqid";
import { Row } from "react-bootstrap";

const SearchResults = ({cards}) => {

  const renderCards = () => {
    if (cards && cards.cards) {
      return cards.cards.map(card => {
        return (
          // TODO: render react-photo-gallery component here
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

