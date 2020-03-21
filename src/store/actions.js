import { ACTION_TYPE } from './constants';

export default {
  setCategory(category) {
    return {
      type: ACTION_TYPE.SET_CATEGORY,
      category,
    };
  },
};
