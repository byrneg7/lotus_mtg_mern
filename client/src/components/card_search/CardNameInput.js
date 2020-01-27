import React, { useState } from 'react';
import { Form, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from '../../actions/index'
import './card_search.scss';
import { makeToast } from "../../toasts";

const CardNameInput = ({cardSearch, additionalClassNames = ''}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (searchTerm.length > 0) {
      setLoading(true);
      const res = await axios.get(`/mtg/cards/${searchTerm}`)
      setLoading(false);
      if (res.data.cards.length > 0) {
        cardSearch(res.data)
      } else {
        makeToast('error', 'No cards found with this search term')
      }
    }
  };

  const renderSearchIcon = () => {
    if (loading) {
      return <FontAwesomeIcon icon={faSpinner} spin/>;
    } else {
      return <FontAwesomeIcon icon={faSearch}/>;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  };

  return (
    <Form.Row className={additionalClassNames}>
      <Form.Group as={Col}>
        <InputGroup>
          <Form.Control type="text"
                        placeholder="Search for cards.."
                        className="round-left-corners"
                        onKeyPress={e => handleKeyPress(e)}
                        onChange={e => setSearchTerm(e.target.value)}
          />
          <InputGroup.Append className="mouse-pointer card-search-button">
            <InputGroup.Text className="round-right-corners" onClick={() => handleSubmit()}>
              {renderSearchIcon()}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form.Row>
  )
};

export default connect(null, actions)(CardNameInput);