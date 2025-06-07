import { useEffect, useState } from "react";

const Pagenotfound = () => {
    const [loading, setLoading] = useState(true);

    // Simulate a short loading delay
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-50 text-gray-800 px-4">
            {loading ? (
                <div className="flex flex-col items-center justify-center h-screen bg-[#fdfaf6]">
                    <div className="text-6xl animate-bounce scale-x-[-1] mb-4">
                        👨‍🍳 <span className="inline-block animate-[spin_5s_linear_infinite] text-6xl">🍳</span> 👩‍🍳
                    </div>
                    <p className="text-3xl font-semibold mt-2 text-gray-700">Whipping up your recipe...</p>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
                    <p className="text-2xl font-semibold mb-2">Oops! Page not found</p>
                    <p className="text-gray-600 mb-6">
                        The page you’re looking for doesn’t exist or has been moved.
                    </p>
                    <a
                        href="/Recipe-project-Reac"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition duration-300"
                    >
                        ⬅ Back to Home
                    </a>
                </div>
            )}
        </div>
    );
};

export default Pagenotfound;
