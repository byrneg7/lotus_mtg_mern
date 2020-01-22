import React, { useEffect } from 'react';

import { testGET, testPOST } from '../utils/api/testRoutes';
import Routes from "./Routes";
import Index from './navbar/Index'

const App = () => {
  useEffect(() => {
    testGET();
    testPOST();
  }, []);

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
