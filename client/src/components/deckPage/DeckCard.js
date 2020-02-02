import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import uniqid from "uniqid";

import DeleteDeckModal from "./DeleteDeckModal";
import EditDeckModal from "./EditDeckModal";
import mtg_5_images from '../../assets/images/mtg_5_cards.png';
import AddCardModal from "../cardSearch/card_gallery/AddCardModal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const ITEM_HEIGHT = 48;

const DeckCard = ({deck, history}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
    const [editModalOpen, setEditeModalOpen] = React.useState(false);

    const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
    const toggleEditModal = () => setEditeModalOpen(!editModalOpen);

    const open = Boolean(anchorEl);

    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const classes = useStyles();

    const options = [
      {name: 'Delete', action: () => deleteDeck()},
      {name: 'Edit', action: () => editDeck()}
    ];

    const deleteDeck = () => {
      handleClose();
      toggleDeleteModal();
    };

    const editDeck = () => {
      handleClose();
      toggleEditModal()
    };

    const renderOptions = () => options.map(option => (
      <MenuItem key={uniqid()} onClick={option.action}>
        {option.name}
      </MenuItem>
    ));

    return (
      <span className="mx-auto my-3 shadow-md">
      <Card className={classes.card}>

        <CardHeader
          action={<IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon/>
          </IconButton>
          }
          title={deck.name}
        />

        <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}
              PaperProps={{style: {maxHeight: ITEM_HEIGHT * 4.5, width: 200}}}>
          {renderOptions()}
       </Menu>

        <CardActionArea onClick={() => history.push(`decks/${deck._id}`)}>
          <CardMedia component="img" alt="Contemplative Reptile" height="140" image={mtg_5_images}
                     title="Contemplative Reptile"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {deck.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <DeleteDeckModal open={deleteModalOpen} toggle={toggleDeleteModal} deck={deck}/>
      <EditDeckModal open={editModalOpen} toggle={toggleEditModal} deck={deck}/>
    </span>
    );
  }
;

export default withRouter(DeckCard);