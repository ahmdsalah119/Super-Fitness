const BaseUrl = "https://www.themealdb.com/api/json/v1/1/";
//  get meals categories
export const getMealsCategories = async () => {
  try {
    const response = await fetch(`${BaseUrl}categories.php`);
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.log(error);
  }
};
// get meals by category
export const getMealsByCategory = async (category: string) => {
  try {
    const response = await fetch(`${BaseUrl}filter.php?c=${category}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};
