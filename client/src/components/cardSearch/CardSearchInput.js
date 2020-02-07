import React, { useState } from 'react';
import { Form, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from '../../actions/index'
import './card_search.scss';
import { makeToast } from "../../toasts";

const CardSearchInput = ({cardSearch, additionalClassNames = ''}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

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

  const renderOptionsIcon = () => {
    return <FontAwesomeIcon icon={faEllipsisV} onClick={() => toggle()}/>;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  };

  const renderSearchMenu = () => {
    if (dropdownOpen) {
      return (
        <p>dropdown</p>
      )
    } else {
      return null
    }
  };

  return (
    <Form.Row className={additionalClassNames}>
      <Form.Group as={Col}>
        <InputGroup>

          <InputGroup.Prepend className="mouse-pointer card-search-button">
            <InputGroup.Text className="round-left-corners-prepend" onClick={() => handleSubmit()}>
              {renderOptionsIcon()}
            </InputGroup.Text>
          </InputGroup.Prepend>

          {renderSearchMenu()}

          <Form.Control type="text"
                        placeholder="Search for cards.."
                        className="round-left-corners"
                        onKeyPress={e => handleKeyPress(e)}
                        onChange={e => setSearchTerm(e.target.value)}
          />

          <InputGroup.Append className="mouse-pointer card-search-button">
            <InputGroup.Text className="round-right-corners-prepend" onClick={() => handleSubmit()}>
              {renderSearchIcon()}
            </InputGroup.Text>
          </InputGroup.Append>

        </InputGroup>
      </Form.Group>
    </Form.Row>
  )
};

export default connect(null, actions)(CardSearchInput);