const API_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1';

export default {
  async mealsByCategory(category) {
    try {
      const data = await fetch(`${API_ENDPOINT}/filter.php?c=${category}`).then(
        (response) => response.json(),
      );

      return data.meals;
    } catch (error) {
      return error;
    }
  },
};
