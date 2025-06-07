import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MAX_VISIBLE = 4;

const Home = () => {
  const [localdata, setlocaldata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recipees")) || [];
    setlocaldata(storedData);
  }, []);

  const visibleRecipes = localdata.slice(0, MAX_VISIBLE);

  const renderRecipes = visibleRecipes.map((recipe) => (
    <div
      key={recipe.id}
      className="snap-start flex-shrink-0 w-72 bg-white rounded-lg shadow-lg p-6 border border-gray-200 
      hover:shadow-xl transition-shadow cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="h-40 bg-teal-100 rounded mb-4 flex items-center justify-center text-teal-500 font-bold text-xl select-none overflow-hidden">
          {recipe.image ? (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          ) : (
            recipe.title.charAt(0)
          )}
        </div>
        <h3 className="text-xl font-bold text-cyan-700 mb-2">{recipe.title}</h3>
        <p className="text-gray-600 mb-2">{recipe.desc}</p>
        <p className="text-sm text-gray-400">{recipe.calories} Calories</p>
      </div>
      <Link
        to={`/recipes/detail/${recipe.id}`}
        className="mt-4 inline-block text-center bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full font-semibold transition"
      >
        View Complete Recipe
      </Link>
    </div>
  ));

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-cyan-100 to-teal-50 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}download-removebg-preview.png`}
            alt="Logo"
            className="mx-auto w-20 h-20 mb-6"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-700 mb-4">
            Discover <span className="text-teal-600">Recipes</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Wholesome plant-based meals for a healthier lifestyle.
          </p>
          <button
            onClick={() => navigate("/recipes")}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition duration-300"
          >
            🥗 Explore Recipes
          </button>
        </div>

        {/* Decorative Images */}
        <img
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1935&auto=format&fit=crop"
          alt="Food variety"
          className="absolute bottom-0 right-0 w-1/3 h-auto object-cover opacity-20 pointer-events-none hidden md:block"
        />
        <img
          src="https://images.unsplash.com/photo-1525351484163-7529414344d8"
          alt="Breakfast"
          className="absolute top-0 left-0 w-1/4 h-auto object-cover opacity-10 pointer-events-none hidden md:block"
        />
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Salad"
          className="absolute top-1/2 left-0 w-1/5 h-auto object-cover opacity-10 pointer-events-none hidden md:block"
        />
      </section>

      {/* Featured Recipes */}
      {localdata.length > 0 ? (
        <section className="py-16 px-4 sm:px-6 md:px-10 bg-white flex-grow">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Featured Recipes</h2>

            <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory px-2 py-4 scrollbar-modern scrollbar-hide">
              {renderRecipes}

              {localdata.length > MAX_VISIBLE && (
                <div className="snap-start flex-shrink-0 w-72 bg-cyan-600 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-white cursor-pointer hover:bg-cyan-700 transition">
                  <h3 className="text-2xl font-bold mb-2">See All Recipes</h3>
                  <p className="mb-4 text-center">Explore our full recipe collection</p>
                  <Link
                    to="/recipes"
                    className="inline-block bg-white text-cyan-600 font-semibold px-5 py-3 rounded-full hover:bg-gray-100 transition"
                  >
                    Go to Recipes
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-md animate-fade-in">
          <img
            src={`${import.meta.env.BASE_URL}download-removebg-preview.png`}
            alt="No Recipes"
            className="w-64 h-64 object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold text-cyan-700 mb-2">No Recipes Found</h2>
          <p className="text-gray-500 text-lg">
            Looks like there are no recipes yet. Try adding a new one!
          </p>
        </div>
      )}

      {/* Banner */}
      <div className="w-full h-72 sm:h-96 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
          alt="Favorite Recipes Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-wide text-center px-4">
            🍽️ Curated With Love <br />
            <span className="text-2xl sm:text-3xl font-light">Your Favorite Recipes</span>
          </h1>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-cyan-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">What People Say</h2>
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <p className="text-gray-700 mb-4 italic">
              “The recipes here are a game-changer! Nutritious, easy, and absolutely delicious. It's now my go-to source for meal ideas.”
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-900 text-cyan-100 py-10 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-13 items-center">
          {/* Subscribe */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-2">Get Delicious Updates 🍽️</h3>
            <p className="text-sm text-cyan-200 mb-4">Subscribe to our newsletter for weekly recipes & healthy tips.</p>
            <div className="flex justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full text-gray-800 focus:outline-none"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right mt-6 sm:mt-0">
            <h3 className="text-lg font-semibold mb-2">This is Me</h3>
            <div className="flex space-x-4 mb-4 text-lg">
              <a href="https://github.com/udittiwarii" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">GitHub</a>
              <a href="https://leetcode.com/u/Udittiwari2025/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">LeetCode</a>
              <a href="https://www.linkedin.com/in/udit-tiwari-56998a271/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">LinkedIn</a>
            </div>
            <p className="text-sm text-cyan-400">© {new Date().getFullYear()} VeggieBite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
