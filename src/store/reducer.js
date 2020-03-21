import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ACTION_TYPE } from './constants';

const initialState = {
  category: 'Beef',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CATEGORY:
      return { ...state, category: action.category };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
