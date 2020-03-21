import Api from 'Services/api';

import { ACTION_TYPE } from './constants';

export default {
  setCategory(category) {
    return {
      type: ACTION_TYPE.SET_CATEGORY,
      category,
    };
  },
  setMeals(meals) {
    return {
      type: ACTION_TYPE.SET_MEALS,
      meals,
    };
  },

  // THUNKS
  fetchMealsByCategory(category = null) {
    return (dispatch, getState) => {
      const mealCategory = category || getState().category;

      Api.mealsByCategory(mealCategory).then((meals) => {
        dispatch(this.setMeals(meals));
      });
    };
  },
};
