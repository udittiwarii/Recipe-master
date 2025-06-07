const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-700 mb-6">About MyRecipes</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-teal-600">MyRecipes</span> – your go-to destination for
          wholesome, plant-based meals crafted with simplicity and health in mind.
        </p>

        <div className="text-left text-gray-700 space-y-6">
          <p>
            This app is designed to help food lovers explore, save, and even create their own delicious recipes.
            Whether you're a beginner or a kitchen pro, you'll find easy-to-follow instructions, calorie info, and a
            variety of dishes to suit your taste.
          </p>
          <p>
            💡 <strong>Why I built this:</strong> I wanted a clean and responsive platform that allows people to not only
            find healthy meals, but also contribute their own. It’s a way to share love through food and empower
            others with knowledge.
          </p>
          <p>
            🚀 <strong>Technologies used:</strong> React, Tailwind CSS, React Router, Context API, and more.
          </p>
          <p>
            🔗 Feel free to contribute or reach out for collaboration. Let’s build a healthier community together!
          </p>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyRecipes. Created with ❤️ by [Udit Tiwari]
        </div>
      </div>
    </div>
  );
};

export default About;
