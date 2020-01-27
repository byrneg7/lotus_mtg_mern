import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ITEM_HEIGHT = 48;

const CardEllipsis = ({selected, options}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderOptions = () => {
    if (options) {
      return options.map(option => (
        <MenuItem key={option} onClick={handleClose}>
          {option}
        </MenuItem>
      ))
    }
  };

  return (
    <div style={selected ? {left: "-6px", top: "-13px", position: "absolute", zIndex: "1"} : {display: "none"}}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {renderOptions()}
      </Menu>
    </div>
  );
};

export default CardEllipsis;