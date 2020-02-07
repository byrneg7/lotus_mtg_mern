import React, { useEffect } from 'react';
import { Col } from 'reactstrap';
import { useDispatch } from 'react-redux';

import CardNameInput from "../cardSearch/CardNameInput";
import './home.scss';
import SearchResults from "./SearchResults";
import SaveCardButton from "../cardSearch/SaveCardButton";
import { CARD_SELECT_RESET } from "../../actions/types";

const HomeView = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: CARD_SELECT_RESET})
  },[]);

  return (
    <Col>
      <SaveCardButton/>
      <CardNameInput additionalClassNames="mt-3 d-block d-md-none"/>
      <SearchResults/>
    </Col>
  )
};

export default HomeView;