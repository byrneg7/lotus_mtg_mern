import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import CardNameInput from "./CardNameInput";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

const DesktopNav = ({auth}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link className="ml-2" to='/decks'>
          Decks
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="ml-2" to='/account'>
          Account
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <a className="ml-2 font-grey" href="/api/logout">
          Sign Out
        </a>
      </MenuItem>
    </Menu>
  );

  const renderLinks = () => {
    if (!auth) {
      return (
        <Button className="ml-2" variant="outlined" href="/auth/google" color="primary">
          Sign In
        </Button>
      )
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              Lotus MTG
            </Typography>
          </Link>
          <CardNameInput additionalClassNames="ml-4"/>
          <div className={classes.grow}/>
          <div className={classes.sectionDesktop}>
            <span className={auth ? '' : 'd-none'}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
            </span>
            {renderLinks()}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

const mapStateToProps = state => {
  return {auth: state.auth}
};

export default connect(mapStateToProps, null)(DesktopNav)
