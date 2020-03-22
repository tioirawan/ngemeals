import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ACTION_TYPE } from './constants';

const initialState = {
  category: 'Beef',
  ingredient: '',
  meals: [],
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CATEGORY:
      return { ...state, category: action.category, ingredient: null };
    case ACTION_TYPE.SET_INGREDIENT:
      return { ...state, ingredient: action.ingredient, category: null };
    case ACTION_TYPE.SET_MEALS:
      return { ...state, meals: action.meals };
    case ACTION_TYPE.SET_LOADING:
      return { ...state, isLoading: action.loading };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
