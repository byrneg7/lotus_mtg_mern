import React from 'react';
import { Col } from 'reactstrap';

import CardNameInput from "../cardSearch/CardNameInput";
import './home.scss';
import SearchResults from "./SearchResults";
import SaveCardButton from "../cardSearch/SaveCardButton";

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