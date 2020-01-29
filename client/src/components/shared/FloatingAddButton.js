import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './shared.scss';

const FloatingAddButton = ({action}) => {
  return (
    <Fab color="primary" aria-label="add" className="floating-add-button" onClick={() => action()}>
      <AddIcon/>
    </Fab>
  );
};

export default FloatingAddButton;