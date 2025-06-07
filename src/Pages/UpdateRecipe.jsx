import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { recipescontext } from "../context/Recipescontext";
import UpdateFuction from "../Components.jsx/UpdateFuction";
import { IoMdArrowRoundBack } from "react-icons/io";

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const { data } = useContext(recipescontext);
  const params = useParams();

  const recipe = data.find((r) => r.id == params.id);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <p className="text-2xl font-semibold text-gray-600">Recipe not found.</p>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-white to-gray-200 font-[Inter,sans-serif]">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-6 sm:px-8 border-b border-slate-300 bg-white shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="text-xl text-white bg-slate-700 rounded-md px-4 py-2 hover:bg-slate-800 active:scale-95 transition-transform duration-150 shadow"
          aria-label="Go Back"
        >
          <IoMdArrowRoundBack />
        </button>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center">
          Update Recipe Details
        </h1>

        <div className="w-7" /> {/* Filler to balance flex space */}
      </header>

      
      <main className="flex flex-col lg:flex-row gap-6 px-3 sm:px-5 md:px-9 py-8">
 
        <section className="w-full lg:w-1/2 bg-white rounded-xl shadow-md border border-gray-200 p-5">
          {image && (
            <div className="flex justify-center mb-4">
              <img
                src={image}
                alt={title}
                className="rounded-lg shadow max-h-64 object-cover w-full sm:w-4/5"
              />
            </div>
          )}

          <div className="space-y-3 text-sm sm:text-base text-gray-700">
            {title && (
              <p>
                <span className="font-semibold">Title:</span> {title}
              </p>
            )}
            {chef && (
              <p>
                <span className="font-semibold">Chef:</span> {chef}
              </p>
            )}
            {start && (
              <p>
                <span className="font-semibold">Short Intro:</span> {start}
              </p>
            )}
            {ingredient && (
              <p>
                <span className="font-semibold">Ingredients:</span> {ingredient}
              </p>
            )}
            {instruction && (
              <p className="whitespace-pre-line">
                <span className="font-semibold">Instructions:</span>{" "}
                {instruction}
              </p>
            )}
            {categoryType && (
              <p>
                <span className="font-semibold">Category Type:</span>{" "}
                {categoryType}
              </p>
            )}
            {categ && (
              <p>
                <span className="font-semibold">Cuisine:</span> {categ}
              </p>
            )}
          </div>
        </section>

        {/* Update Form */}
        <section className="w-full lg:w-1/2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <UpdateFuction recipe={recipe} />
        </section>
      </main>
    </div>
  );
};

export default UpdateRecipe;
