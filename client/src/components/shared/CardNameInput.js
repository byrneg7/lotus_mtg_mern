import React, { useState } from 'react';
import { Form, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from '../../actions/index'
import './shared.scss';

const CardNameInput = ({cardSearch, additionalClassNames = ''}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async () => {
    const res = await axios.get(`/mtg/cards/${searchTerm}`);
    cardSearch(res.data)
  };

  return (
    <Form.Row className={additionalClassNames}>
      <Form.Group as={Col}>
        <InputGroup>
          <Form.Control type="text"
                        placeholder="Search for cards.."
                        className="round-left-corners"
                        onChange={e => setSearchTerm(e.target.value)}
          />
          <InputGroup.Append className="mouse-pointer card-search-button">
            <InputGroup.Text className="round-right-corners" onClick={() => handleSubmit()}>
              <FontAwesomeIcon icon={faSearch}/>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form.Row>
  )
};

export default connect(null, actions)(CardNameInput);