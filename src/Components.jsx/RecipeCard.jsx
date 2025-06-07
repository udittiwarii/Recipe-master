import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    title,
    image,
    chef,
    start,
    ingredient,
    instruction,
    categoryType,
    categ,
  } = recipe;


  const [favorite, setfavorite] = useState((JSON.parse(localStorage.getItem('fav')) || []))
  const favdata = () => {
    const copydata = [...favorite]
    copydata.push(recipe)
    setfavorite(copydata)
    localStorage.setItem('fav', JSON.stringify(copydata))
  }
  const unfavdata = () => {
    const favfilt = favorite.filter(f => f.id != recipe?.id)
    setfavorite(favfilt)
    localStorage.setItem('fav', JSON.stringify(favfilt))
  }
  useEffect(() => {

  }, [favorite])

  return (
    <div
      className="block rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto"
      aria-label={`View details for ${title}`}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full shadow-lg select-none">
          {categoryType}
        </div>
        <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full shadow-lg select-none">
          {categ}
        </div>
      </div>
      <div className=" relative   space-y-3 font-[Inter,sans-serif] p-5">

        {favorite.find(f => f.id == recipe.id) ?
          <i
            onClick={unfavdata}
            className="absolute right-[10%] text-3xl text-red-700 active:scale-102 ri-heart-3-fill"></i> :
          <i
            onClick={favdata}
            className="absolute right-[10%]  text-3xl text-red-700 active:scale-102 ri-heart-3-line"></i>
        }
        <h2 className="text-xl mt-10 font-bold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-500 italic">👨‍🍳 {chef}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{start}</p>

        <div className="text-sm text-gray-700">
          <span className="font-semibold text-indigo-600">Ingredients:</span>{" "}
          {ingredient}
        </div>

        <p className="text-sm text-gray-700 line-clamp-3">
          {instruction.slice(0, 80)}...
          <span className="text-indigo-600 font-semibold ml-1">more</span>
        </p>
      </div>

      <div className="px-5 pb-5">
        <Link
          to={`/Recipes/detial/${id}`}
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-medium transition duration-200"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
