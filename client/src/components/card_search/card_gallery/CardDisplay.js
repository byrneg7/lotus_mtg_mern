import React from 'react';
import PhotoGallery from './PhotoGallery';

const CardDisplay = ({cards = null}) => {

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

  const renderHelper = () => {
    if (cards) {
      return <PhotoGallery cards={constructPhotoList(cards)}/>
    }
    return null
  };

  return renderHelper()
};


export default CardDisplay;