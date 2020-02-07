import { CARD_SEARCH_SELECT, CARD_SEARCH_DESELECT, CARD_SELECT_RESET } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case CARD_SEARCH_SELECT:
      return [...state, action.payload];
    case CARD_SELECT_RESET:
      return [];
    case CARD_SEARCH_DESELECT:
      return state.filter(card => card.id !== action.payload.id);
    default:
      return state;
  }
}
