import React from 'react';
import { connect } from 'react-redux';
import uniqid from "uniqid";

const SearchResults = ({cards}) => {

  const renderCards = () => {
    if (cards && cards.cards) {
      return cards.cards.map(card => {
        return (
          <div key={uniqid()}>
            {card.name}
          </div>
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

