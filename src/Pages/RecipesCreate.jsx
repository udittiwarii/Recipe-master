import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipescontext } from "../context/Recipescontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const categoryOptions = {
  meal: [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snack',
    'Dessert',
    'Appetizer',
    'Side Dish',
    'Beverage',
  ],
  ingredient: [
    'Paneer',
    'Vegetables',
    'Rice',
    'Tofu',
    'Fruits',
    'Lentils',
    'Chickpeas',
    'Mushrooms',
    'Potato',
    'Cheese',
    'Nuts & Seeds',
  ],
  cuisine: [
    'Indian',
    'Italian',
    'Mexican',
    'Chinese',
    'American',
    'Thai',
    'Japanese',
    'Mediterranean',
    'Middle Eastern',
  ],
};

const RecipesCreate = () => {
  const { data, setdata } = useContext(recipescontext);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const selectedcategory = watch('categoryType');
  const navigate = useNavigate();

  const submithandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data, recipe];
    setdata(copydata);
    console.log(copydata)
    localStorage.setItem('recipees', JSON.stringify(copydata));

    toast.success("Recipe Created!");

    reset();
    navigate('/Recipes');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12 sm:py-20">
      <form
        onSubmit={handleSubmit(submithandler)}
        className="relative w-full max-w-3xl bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 space-y-8 border border-gray-200"
      >
        <img
          src="public/download.jpg"
          alt="Chef"
          className="w-20 h-20 sm:w-24 sm:h-24 absolute -top-10 sm:-top-12 left-6 sm:left-10 rounded-full border-4 border-white shadow-md object-cover bg-gray-100"
        />

        <div className="text-center mt-8 sm:mt-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-1">
            🍽️ Create a Recipe
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Share your favorite dish with the world
          </p>
        </div>

        {[
          { name: 'title', placeholder: 'Recipe Title', type: 'text' },
          { name: 'image', placeholder: 'Image URL', type: 'url' },
          { name: 'chef', placeholder: "Chef's Name", type: 'text' }
        ].map(({ name, placeholder, type }) => (
          <input
            key={name}
            type={type}
            placeholder={placeholder}
            {...register(name, { required: `${placeholder} is required` })}
            className="w-full px-5 py-3 rounded-2xl bg-white bg-opacity-70 shadow-inner border border-gray-300 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

        ))}
        {errors[name] && (
          <p className="text-sm text-red-500 z- mt-1">{errors[name].message}</p>
        )}

        {[
          { name: 'start', placeholder: 'Short Description (e.g. A spicy delight for dinner)' },
          { name: 'ingredient', placeholder: 'Ingredients (comma separated)' },
          { name: 'instruction', placeholder: 'Instructions (comma separated)' }
        ].map(({ name, placeholder }) => (
          <textarea
            key={name}
            placeholder={placeholder}
            {...register(name)}
            className="w-full px-5 py-3 rounded-2xl bg-white bg-opacity-70 shadow-inner border border-gray-300 placeholder-gray-400 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            rows={4}
          />
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <select
            {...register('categoryType')}
            className="w-full px-4 py-3 rounded-2xl bg-white bg-opacity-70 border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 transition"
          >
            <option value="">Select Category Type</option>
            <option value="meal">Meal Type</option>
            <option value="ingredient">Main Ingredient</option>
            <option value="cuisine">Cuisine</option>
          </select>

          {selectedcategory && (
            <select
              {...register('categ')}
              className="w-full px-4 py-3 rounded-2xl bg-white bg-opacity-70 border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 transition"
            >
              <option value="">Select {selectedcategory}</option>
              {categoryOptions[selectedcategory].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-slate-700 hover:bg-slate-800 text-white text-lg sm:text-xl font-semibold shadow-lg transition duration-300"
        >
          🍳 Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipesCreate;
