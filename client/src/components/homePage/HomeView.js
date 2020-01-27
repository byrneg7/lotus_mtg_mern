import React from 'react';
import { Col } from 'reactstrap';

import CardNameInput from "../card_search/CardNameInput";
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