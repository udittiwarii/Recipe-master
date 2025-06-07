import { FaHeart } from "react-icons/fa";
import RecipeCard from "../Components.jsx/RecipeCard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const renderRecipes = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="min-h-screen w-full font-[Inter,sans-serif] bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      
      {/* Hero Banner */}
      <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80"
          alt="Favorite Recipes Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 drop-shadow-lg">
            💖 Your Favorite Recipes
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-light drop-shadow-sm">
            Curated with love — saved by you
          </p>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaHeart className="text-pink-500" />
            Favorites Collection
          </h2>
          <span className="text-gray-600 text-sm sm:text-base">
            You have saved {favorite.length} recipe{favorite.length !== 1 && "s"} 💾
          </span>
        </div>

        {favorite.length > 0 ? (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {renderRecipes}
          </div>
        ) : (
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center text-center p-10 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-md transition-all">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80"
              alt="No Favorites"
              className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-white shadow-lg mb-6"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
              🫠 No Favorites Yet
            </h2>
            <p className="text-gray-500 text-lg">
              Tap the 💖 icon on recipes to add them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fav;
