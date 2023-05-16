import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
const Dish = () => {
  const [dish, setDish] = useState({});
  const [active, setActive] = useState(false);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${
          params.dish
        }/information/?apiKey=${import.meta.env.VITE_API_KEY}`
      );
      const data = await api.json();
      setDish(data);
    };
    fetchData();
  }, [params.dish]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-40 mb-20 flex"
    >
      <div className="flex-1">
        <h2 className="mb-8 text-xl">{dish.title}</h2>
        <img src={dish.image} className="" alt={dish.title} />
      </div>
      <div className="ml-40 flex-1">
        <button
          onClick={() => setActive(false)}
          className={` ${
            !active
              ? "bg-gradient-to-r from-slate-700 to-gray-900 text-white"
              : "text-gray-800 bg-white"
          } px-8 py-4 border-2 border-solid border-black mr-8 font-semibold`}
        >
          Instruction
        </button>
        <button
          onClick={() => setActive(true)}
          className={` ${
            active
              ? "bg-gradient-to-r from-slate-700 to-gray-900 text-white"
              : "text-gray-800 bg-white"
          } px-8 py-4 border-2 border-solid border-black mr-8 font-semibold`}
        >
          Ingredients
        </button>
        <div className="mt-10">
          {!active ? (
            <>
              <h3 dangerouslySetInnerHTML={{ __html: dish.summary }}></h3>
              <h3 dangerouslySetInnerHTML={{ __html: dish.instructions }}></h3>
            </>
          ) : (
            <ul>
              {dish.extendedIngredients.map((ing) => (
                <li key={ing.id} className="text-base">
                  {ing.original}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Dish;
