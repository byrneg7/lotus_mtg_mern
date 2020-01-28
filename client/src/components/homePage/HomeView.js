import React from 'react';
import { Col } from 'reactstrap';

import CardNameInput from "../card_search/CardNameInput";
import './home.scss';
import SearchResults from "./SearchResults";
import SaveCardButton from "../card_search/SaveCardButton";

const HomeView = () => {
  return (
    <Col>
      <SaveCardButton/>
      <CardNameInput additionalClassNames="mt-3 d-block d-md-none"/>
      <SearchResults/>
    </Col>
  )
};

export default HomeView;