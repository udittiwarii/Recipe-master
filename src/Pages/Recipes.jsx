import { useContext } from "react";
import { recipescontext } from "../context/Recipescontext";
import RecipeCard from "../Components.jsx/RecipeCard";
import { FaUtensils } from "react-icons/fa";

const Recipes = () => {
  const { data } = useContext(recipescontext);
  const renderrecipee = data?.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-10 font-[Inter,sans-serif]">

      <div className="flex items-center justify-center mb-10 gap-3">
        <FaUtensils className="text-4xl text-emerald-600" />
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight">
          Explore Recipes
        </h1>
      </div>


      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.length > 0 ? (
          renderrecipee
        ) : (
          <div className="flex flex-col items-center justify-center col-span-full text-center p-8 bg-white rounded-lg shadow-md animate-fade-in">
            <img
              src="public/download-removebg-preview.png"
              alt="No Recipes"
              className="w-64 h-64 object-contain mb-6"
            />
            <h2 className="text-2xl font-semibold text-cyan-700 mb-2">No Recipes Found</h2>
            <p className="text-gray-500 text-lg">
              Looks like there are no recipes yet. Try adding a new one!
            </p>
          </div>

        )}
      </div>
    </div>
  );
};

export default Recipes;
