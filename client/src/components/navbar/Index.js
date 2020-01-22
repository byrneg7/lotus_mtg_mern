import React from 'react';

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import './navbar.scss';

const Index = () => {
  return(
    <>
      <span className="d-none d-md-block">
        <DesktopNav/>
      </span>
      <span className="d-block d-md-none">
        <MobileNav/>
      </span>
    </>
  )
};

export default Index;