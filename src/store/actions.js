import Api from 'Services/api';

import { ACTION_TYPE } from './constants';

export default {
  setCategory(category) {
    return {
      type: ACTION_TYPE.SET_CATEGORY,
      category,
    };
  },
  setIngredient(ingredient) {
    return {
      type: ACTION_TYPE.SET_INGREDIENT,
      ingredient,
    };
  },
  setQuery(query) {
    return {
      type: ACTION_TYPE.SET_QUERY,
      query,
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
  fetchMealsByIngredient(ingredient = null) {
    return (dispatch, getState) => {
      const mealIngredient = ingredient || getState().ingredient;

      dispatch(this.setLoading(true));

      Api.mealsByIngredient(mealIngredient).then((meals) => {
        dispatch(this.setMeals(meals));
        dispatch(this.setLoading(false));
      });
    };
  },
  fetchMealsByQuery(_query = null) {
    return (dispatch, getState) => {
      const query = _query || getState().query;

      dispatch(this.setLoading(true));

      Api.searchMeals(query).then((meals) => {
        dispatch(this.setMeals(meals));
        dispatch(this.setLoading(false));
      });
    };
  },
};
