import React from 'react';
import Routes from "./Routes";
import Index from './navbar/Index'

const App = () => {
  return (
    <>
      <Index />
      <div className="container">
        <Routes/>
      </div>
    </>
  )
};

export default App;
