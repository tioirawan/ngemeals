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
  setLoading(loading) {
    return {
      type: ACTION_TYPE.SET_LOADING,
      loading,
    };
  },

  // THUNKS
  fetchMealsByCategory(category = null) {
    return (dispatch, getState) => {
      const mealCategory = category || getState().category;

      dispatch(this.setLoading(true));

      Api.mealsByCategory(mealCategory).then((meals) => {
        dispatch(this.setMeals(meals));
        dispatch(this.setLoading(false));
      });
    };
  },
};
