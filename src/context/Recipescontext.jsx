import { createContext, useEffect, useState } from "react";

// Create the context
export const recipescontext = createContext(null);

// Provider component
const Recipescontext = (props) => {
  const [data, setdata] = useState([]);

  // Load initial data from localStorage or use fallback data
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recipees"));
    if (storedData && storedData.length) {
      setdata(storedData);
    } else {
      const initialData = [
        {
          id: 1,
          title: "Spicy Chickpea Curry",
          image:
            "https://images.unsplash.com/photo-1735353783453-877d5883736f?w=600&auto=format&fit=crop&q=60",
          chef: "Madhur Jaffrey",
          start: "A hearty, protein-packed curry full of flavor and spice.",
          ingredient:
            "Chickpeas, onion, tomato, garlic, ginger, turmeric, cumin, coriander, chili powder, salt",
          instruction:
            "1. Sauté onions, garlic, and ginger. 2. Add tomatoes and spices. 3. Stir in chickpeas and simmer for 15 minutes.",
          categoryType: "Meal Type",
          categ: "Curry",
        },
        {
          id: 2,
          title: "Grilled Veggie Skewers",
          image:
            "https://plus.unsplash.com/premium_photo-1693262738309-661fe058e6e3?w=600&auto=format&fit=crop&q=60",
          chef: "Yotam Ottolenghi",
          start:
            "Colorful and smoky grilled veggies perfect for summer evenings.",
          ingredient:
            "Bell peppers, zucchini, mushrooms, red onion, olive oil, oregano, salt, pepper",
          instruction:
            "1. Cut vegetables and marinate with oil and herbs. 2. Skewer and grill on medium heat for 10–15 minutes.",
          categoryType: "Meal Type",
          categ: "Grill",
        },
        {
          id: 3,
          title: "Mushroom Stroganoff",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXH6NdJfAIxH9FyyaBZRDK8C10UbFKxzeNQ&s",
          chef: "Tarla Dalal",
          start:
            "Creamy mushroom stroganoff served over noodles – comfort food at its best.",
          ingredient:
            "Mushrooms, onion, garlic, sour cream, vegetable broth, flour, pasta, salt, pepper",
          instruction:
            "1. Cook mushrooms and onions. 2. Add flour, broth, and sour cream. 3. Simmer and serve over pasta.",
          categoryType: "Meal Type",
          categ: "Pasta",
        },
        {
          id: 4,
          title: "Paneer Tikka Masala",
          image:
            "https://media.istockphoto.com/id/1995441086/photo/tandoori-paneer-momos.jpg?s=612x612",
          chef: "Sanjeev Kapoor",
          start:
            "Rich, spicy and creamy paneer tikka masala – a vegetarian classic.",
          ingredient:
            "Paneer, yogurt, tomato puree, onion, cream, garam masala, ginger, garlic, salt",
          instruction:
            "1. Marinate paneer and grill. 2. Cook onion-tomato masala. 3. Add cream and grilled paneer.",
          categoryType: "Meal Type",
          categ: "Indian",
        },
        {
          id: 5,
          title: "Vegetable Stir Fry",
          image:
            "https://plus.unsplash.com/premium_photo-1664478238082-3df93e48c491?w=600&auto=format&fit=crop&q=60",
          chef: "Jamie Oliver",
          start: "Fast, colorful, and healthy stir-fried vegetables.",
          ingredient:
            "Broccoli, bell peppers, carrots, snow peas, soy sauce, garlic, ginger, sesame oil",
          instruction:
            "1. Heat oil and sauté garlic. 2. Stir-fry vegetables. 3. Add soy sauce and cook briefly.",
          categoryType: "Meal Type",
          categ: "Asian",
        },
        {
          id: 6,
          title: "Zucchini Noodles with Pesto",
          image:
            "https://plus.unsplash.com/premium_photo-1725469970215-2339a52861dc?w=600&auto=format&fit=crop&q=60",
          chef: "Rachael Ray",
          start: "Light and fresh zucchini noodles tossed in aromatic pesto.",
          ingredient:
            "Zucchini, basil, olive oil, garlic, pine nuts, parmesan cheese, salt, pepper",
          instruction:
            "1. Spiralize zucchini. 2. Blend pesto ingredients. 3. Toss noodles with pesto and serve.",
          categoryType: "Meal Type",
          categ: "Salad",
        },
        {
          id: 7,
          title: "Lentil Soup",
          image:
            "https://images.unsplash.com/photo-1648455320791-a667c8aab7e4?w=600&auto=format&fit=crop&q=60",
          chef: "Julia Child",
          start: "A warm and hearty lentil soup loaded with veggies.",
          ingredient:
            "Lentils, onion, carrot, celery, garlic, tomatoes, herbs, salt, pepper",
          instruction:
            "1. Sauté vegetables. 2. Add lentils and broth. 3. Simmer for 30 minutes.",
          categoryType: "Meal Type",
          categ: "Soup",
        },
        {
          id: 8,
          title: "Stuffed Bell Peppers",
          image:
            "https://media.istockphoto.com/id/1289890443/photo/preparing-stuffed-bell-peppers-with-ground-meat-in-tomato-sauce.webp",
          chef: "Ina Garten",
          start:
            "Colorful bell peppers stuffed with seasoned rice and veggies.",
          ingredient:
            "Bell peppers, rice, beans, corn, tomatoes, onion, cumin, chili powder, cheese",
          instruction:
            "1. Cook filling. 2. Stuff peppers and bake at 180°C for 25 minutes.",
          categoryType: "Meal Type",
          categ: "Baked",
        },
        {
          id: 9,
          title: "Spinach and Ricotta Lasagna",
          image:
            "https://plus.unsplash.com/premium_photo-1671547330493-b07d377085ca?w=600&auto=format&fit=crop&q=60",
          chef: "Gordon Ramsay",
          start: "Classic lasagna layered with spinach and creamy ricotta.",
          ingredient:
            "Lasagna noodles, ricotta, spinach, mozzarella, tomato sauce, garlic, basil",
          instruction:
            "1. Layer noodles, cheese, spinach, and sauce. 2. Bake at 190°C for 40 minutes.",
          categoryType: "Meal Type",
          categ: "Pasta",
        },
        {
          id: 10,
          title: "Sweet Potato & Black Bean Tacos",
          image:
            "https://media.istockphoto.com/id/1425580278/photo/vegan-tacos-with-black-beans-sweet-potato-and-guacamole-and-tortillas-flatbread.webp",
          chef: "Thomas Keller",
          start: "Delicious sweet and savory tacos for any night of the week.",
          ingredient:
            "Sweet potatoes, black beans, corn, tortillas, avocado, lime, cumin, paprika",
          instruction:
            "1. Roast sweet potatoes. 2. Warm beans. 3. Assemble tacos with toppings.",
          categoryType: "Meal Type",
          categ: "Mexican",
        },
      ];

      setdata(initialData);
      localStorage.setItem("recipees", JSON.stringify(initialData));
    }
  }, []);

  // Save to localStorage whenever `data` changes
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("recipees", JSON.stringify(data));
    }
  }, [data]);

  return (
    <recipescontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipescontext.Provider>
  );
};

export default Recipescontext;
