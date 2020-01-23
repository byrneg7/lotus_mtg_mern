import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Routes from "./Routes";
import Index from './navbar/Index'

class App extends React.Component{
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <>
        <Index />
        <div className="container">
          <Routes/>
        </div>
      </>
    )
  }
};

export default connect(null, actions)(App);
