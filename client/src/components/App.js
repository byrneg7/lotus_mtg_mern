import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as actions from '../actions';
import Routes from "./Routes";
import Navbar from './navbar/Index'

const App = ({id, fetchUser, fetchDecks}) => {
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchDecks(id);
  }, [id]);

  return (
    <>
      <Navbar/>
      <div className="container">
        <ToastContainer/>
        <Routes/>
      </div>
    </>
  )
};

const mapStateToProps = state => {
  return {id: state.auth._id};
};

export default connect(mapStateToProps, actions)(App);