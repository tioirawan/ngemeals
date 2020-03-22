import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ACTION_TYPE } from './constants';

const initialState = {
  category: 'Beef',
  ingredient: '',
  query: '',
  meals: [],
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CATEGORY:
      return {
        ...state, category: action.category, ingredient: null, query: '',
      };
    case ACTION_TYPE.SET_INGREDIENT:
      return {
        ...state, ingredient: action.ingredient, category: null, query: '',
      };
    case ACTION_TYPE.SET_QUERY:
      return {
        ...state, query: action.query, ingredient: null, category: null,
      };
    case ACTION_TYPE.SET_MEALS:
      return { ...state, meals: action.meals };
    case ACTION_TYPE.SET_LOADING:
      return { ...state, isLoading: action.loading };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
