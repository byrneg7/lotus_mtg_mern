import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as actions from '../actions';
import Routes from "./Routes";
import Navbar from './navbar/Index'

class App extends React.Component{
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <>
        <Navbar />
        <div className="container">
          <ToastContainer />
          <Routes/>
        </div>
      </>
    )
  }
};

export default connect(null, actions)(App);
