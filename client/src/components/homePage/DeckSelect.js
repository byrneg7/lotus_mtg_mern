import React, { useState } from 'react';
import Select from 'react-select';

const DeckSelect = ({decks}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const deckOptions = (decks.map(deck => {
    return {value: deck._id, label: deck.name}
  }));

  return (
    <Select
      className="mt-3"
      value={selectedOption}
      onChange={handleChange}
      options={deckOptions}
    />
  )
};

export default DeckSelect;
