import React from 'react';
import { Row, Col } from 'reactstrap';

import CardNameInput from "../shared/CardNameInput";
import './home.scss';
import SearchResults from "./SearchResults";

const HomeView = () => {
  return (
    <Col>
      <CardNameInput additionalClassNames="mt-3 d-block d-md-none"/>
      <SearchResults/>
    </Col>
  )
};

export default HomeView;