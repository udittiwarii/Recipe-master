import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipescontext } from "../context/Recipescontext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const categoryOptions = {
  meal: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Appetizer', 'Side Dish', 'Beverage'],
  ingredient: ['Chicken', 'Egg', 'Fish', 'Paneer', 'Vegetables', 'Rice', 'Tofu', 'Fruits'],
  cuisine: ['Indian', 'Italian', 'Mexican', 'Chinese', 'American', 'Thai', 'Japanese']
};

const UpdateFuction = (props) => {
  const navigate = useNavigate();
  const recipe = props.recipe;
  const { data, setdata } = useContext(recipescontext);
  const params = useParams();

  if (!recipe) return <div>Loading...</div>;

  const {
    title,
    image,
    chef,
    start,
    ingredient,
    instruction,
    categoryType,
    categ,
  } = recipe;

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      title,
      image,
      chef,
      start,
      ingredient,
      instruction,
      categoryType,
      categ,
    },
  });

  const selectedcategory = watch('categoryType');

  const Updatehandler = (recipe) => {
    let Index = data.findIndex((item) => item.id == params.id);
    let copydata = [...data];
    copydata[Index] = { ...copydata[Index], ...recipe };
    setdata(copydata);
    localStorage.setItem('recipees', JSON.stringify(copydata));

    toast.success("Updated!");
    navigate(-1);
  };

  return (
    <div className="p-6 h-full overflow-auto font-[Inter,sans-serif]">
      <form onSubmit={handleSubmit(Updatehandler)} className="space-y-4">

        <input
          {...register('title')}
          placeholder="Recipe Title"
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          {...register('image')}
          placeholder="Image URL"
          type="url"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          {...register('chef')}
          placeholder="Chef's Name"
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <textarea
          {...register('start')}
          placeholder="Short Description"
          rows={2}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <textarea
          {...register('ingredient')}
          placeholder="Ingredients (comma separated)"
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <textarea
          {...register('instruction')}
          placeholder="Instructions (comma separated)"
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            {...register('categoryType')}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="">Select Category Type</option>
            <option value="meal">Meal Type</option>
            <option value="ingredient">Main Ingredient</option>
            <option value="cuisine">Cuisine</option>
          </select>

          {selectedcategory && (
            <select
              {...register('categ')}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="">Select {selectedcategory}</option>
              {categoryOptions[selectedcategory]?.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-slate-700 hover:bg-slate-800 text-white text-base font-semibold rounded-md py-3 shadow-md transition duration-300"
        >
          🍳 Update Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdateFuction;
