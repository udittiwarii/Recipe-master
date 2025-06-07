import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipescontext } from "../context/Recipescontext";
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";

const CompleteRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipescontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const deltehandeler = () => {
    const delet = data.filter((recipe) => params.id != recipe.id);
    setdata(delet);
    localStorage.setItem("recipees", JSON.stringify(delet));

    const favfilt = favorite.filter((f) => f.id != recipe?.id);
    setfavorite(favfilt);
    localStorage.setItem("fav", JSON.stringify(favfilt));
    toast.error(`Deleted ${recipe.title}`);
    
    setTimeout(() => {
      navigate("/Recipes");
    }, 1000);
  };
  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const favdata = () => {
    const copydata = [...favorite];
    copydata.push(recipe);
    setfavorite(copydata);
    localStorage.setItem("fav", JSON.stringify(copydata));
  };
  const unfavdata = () => {
    const favfilt = favorite.filter((f) => f.id != recipe?.id);
    setfavorite(favfilt);
    localStorage.setItem("fav", JSON.stringify(favfilt));
  };
  useEffect(() => { }, [favorite]);

  return recipe ? (
    <div className="min-h-screen  flex justify-center items-start py-10 px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-3xl shadow-lg p-8 sm:p-12 font-serif text-gray-800">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center mb-8 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 active:scale-95  shadow-sm"
          aria-label="Go Back"
        >
          <IoMdArrowRoundBack size={24} />
        </button>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-[#4b3f2f] border-b border-gray-300 pb-4 tracking-wide">
          🍽️ {recipe.title}
        </h1>

        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="mx-auto rounded-2xl border border-gray-300 shadow-md max-h-72 w-full object-cover mb-10"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-relaxed">
          <div className="space-y-5">
            <p>
              <span className="font-semibold text-[#7b5e44]">👨‍🍳 Chef: </span>
              {recipe.chef}
            </p>
            <p>
              <span className="font-semibold text-[#7b5e44]">📜 Introduction: </span>
              {recipe.start}
            </p>
            <p>
              <span className="font-semibold text-[#7b5e44]">🏷️ Category: </span>
              {recipe.categoryType}
            </p>
            <p>
              <span className="font-semibold text-[#7b5e44]">📂 Type: </span>
              {recipe.categ}
            </p>
          </div>

          <div className="space-y-5">
            <p>
              <span className="font-semibold text-[#7b5e44]">🧂 Ingredients: </span>
              <br />
              {recipe.ingredient}
            </p>
            <p>
              <span className="font-semibold text-[#7b5e44]">👩‍🍳 Instructions: </span>
              <br />
              {recipe.instruction}
            </p>
          </div>
        </div>

        <footer className="mt-12 flex flex-col sm:flex-row gap-5 justify-center sm:justify-between items-center">
          <button
            onClick={() => navigate(`/Recipes/update/${params.id}`)}
            className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-green-700 text-white text-xl font-semibold hover:bg-green-600 active:scale-95 shadow-md transition"
          >
            Update
          </button>

          {favorite.find((f) => f.id == recipe.id) ? (
            <button
              className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-pink-100 text-pink-700 hover:bg-pink-200 active:scale-95 shadow-md transition text-xl font-semibold"
              onClick={unfavdata}
            >
              Remove to fav
            </button>
          ) : (
            <button
              className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300 active:scale-95 shadow-md transition text-xl font-semibold"
              onClick={favdata}
            >
              Add to fav
            </button>
          )}

          <button
            onClick={deltehandeler}
            className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-red-800 text-white text-xl font-semibold hover:bg-red-700 active:scale-95 shadow-md transition"
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fdfaf6] px-4 text-center">
      <div className="text-6xl animate-bounce scale-x-[-1] mb-6">
        👨‍🍳 <span className="inline-block animate-spin">🍳</span> 👩‍🍳
      </div>
      <p className="text-3xl font-semibold text-gray-700">
        Whipping up your recipe...
      </p>
    </div>
  );
};

export default CompleteRecipe;
