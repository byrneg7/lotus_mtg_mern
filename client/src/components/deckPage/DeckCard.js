import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";

import mtg_5_images from '../../assets/images/mtg_5_cards.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const DeckCard = ({deck, history}) => {
  const classes = useStyles();

  return (
    <span className="mx-auto my-3 shadow-md">
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon/>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
        />
        <CardActionArea onClick={() => history.push(`decks/${deck._id}`)}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={mtg_5_images}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {deck.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </span>
  );
};

export default withRouter(DeckCard);