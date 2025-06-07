import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Recipes from "../Pages/Recipes"
import RecipesCreate from "../Pages/RecipesCreate"
import About from "../Pages/About"
import CompleteRecipe from "../Pages/CompleteRecipe"
import UpdateRecipe from "../Pages/UpdateRecipe"
import Pagenotfound from "../Pages/Pagenotfound"
import Fav from "../Pages/Fav"

const Mainroutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Recipes" element={<Recipes />} />
                <Route path="/Recipes-Create" element={<RecipesCreate />} />
                <Route path="/about" element={<About />} />
                <Route path="/Recipes/detial/:id" element={<CompleteRecipe />} />
                <Route path="/Recipes/update/:id" element={<UpdateRecipe />} />
                <Route path="/favorite" element={<Fav />} />
                <Route path="*" element={<Pagenotfound />} />

            </Routes>
        </div>
    )
}

export default Mainroutes