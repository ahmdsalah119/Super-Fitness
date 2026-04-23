import { useState, useEffect } from "react";
import Cards from "./cards";

import {
  getMealsCategories,
  getMealsByCategory,
} from "../../lib/actions/meals.ations";

export default function MealsSection() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [isLoading, setIsLoading] = useState(true);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getMealsCategories();
        if (categoryData && Array.isArray(categoryData)) {
          const categoryNames = categoryData.map((cat: any) => cat.strCategory);
          setCategories(categoryNames);
        }
      } catch (error) {
        console.error("Error loading categories", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      if (!activeCategory) return;
      setIsLoading(true);
      try {
        const mealsData = await getMealsByCategory(activeCategory);
        setMeals(mealsData || []);
        setCurrentPage(1);
      } catch (error) {
        console.error(
          `Error loading meals for category: ${activeCategory}`,
          error,
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, [activeCategory]);

  const totalPages = Math.min(5, Math.ceil(meals.length / ITEMS_PER_PAGE));

  const currentMeals = meals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="w-full py-10 px-8">
      {/*  */}
      <div className="max-w-[1285px] mx-auto w-full">
        {/* section slogan */}
        <h1 className="text-3xl tracking-tight text-white leading-tight uppercase">
          Fuel your fitness journey with <br />
          customized
          <span className="text-primary"> meal plans</span> for you
        </h1>
        {/* Filter Buttons */}
        <div className="flex gap-1 items-center mb-4 flex-wrap justify-center">
          {/* maximum 7 categories */}
          {categories.slice(0, 7).map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full  transition-all duration-200 font-medium ${
                activeCategory === category
                  ? "bg-primary text-secondary"
                  : "bg-transparent text-secondary "
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Meals Grid */}
        <div className="min-h-[600px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-muted-foreground animate-pulse">
                Loading meals...
              </p>
            </div>
          ) : currentMeals.length > 0 ? (
            // Display meals in a responsive grid
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {currentMeals.map((meal: any) => (
                <div key={meal.idMeal} className="w-full flex justify-center">
                  <Cards title={meal.strMeal} img={meal.strMealThumb} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground mt-20">
              No meals found in this category.
            </p>
          )}
        </div>

        {/*paginiation*/}
        {!isLoading && totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`transition-all duration-500 rounded-full ${
                    currentPage === pageNum
                      ? "bg-primary w-6 h-2"
                      : "bg-secondary w-2 h-2"
                  }`}
                  aria-label={`Go to page ${pageNum}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
