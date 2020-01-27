import React from 'react';
import { connect } from 'react-redux';
import CardDisplay from "../card_search/card_gallery/CardDisplay";

const SearchResults = ({cards}) => {

  const renderCards = () => {
    if (cards && cards.cards) {
      return <CardDisplay cards={cards.cards}/>
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

