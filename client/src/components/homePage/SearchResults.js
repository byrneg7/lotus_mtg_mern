import React from 'react';
import { connect } from 'react-redux';
import PhotoGallery from "../cardGallery/PhotoGallery";

const SearchResults = ({cards}) => {

  const constructPhotoList = (cards) => {
    return cards.map(card => {
      return (
        {
          src: card.imageUrl,
          width: 63,
          height: 88,
          text: card.text,
          id: card.id,
          type: card.type,
          rarity: card.rarity,
          mana: card.manaCost,
          set: card.setName,
          types: card.types,
          colours: card.colors,
          name: card.name,
          artist: card.artist,
          power: card.power,
          toughness: card.toughness
        }
      )
    })
  };

  const renderCards = () => {
    if (cards && cards.cards) {
      return <PhotoGallery cards={constructPhotoList(cards.cards)}/>
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

