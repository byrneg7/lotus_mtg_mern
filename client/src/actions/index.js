import axios from 'axios';
import { FETCH_CARDS, FETCH_USER, CARD_SEARCH_SELECT, CARD_SEARCH_DESELECT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: res.data});
};

export const cardSearch = (data) => {
  return {
    type: FETCH_CARDS,
    payload: data
  }
};

export const cardSearchSelect = (card) => {
  return {
    type: CARD_SEARCH_SELECT,
    payload: card
  }
};

export const cardSearchDeselect = (card) => {
  return {
    type: CARD_SEARCH_DESELECT,
    payload: card
  }
};