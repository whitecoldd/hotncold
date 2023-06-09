import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [recipees, setRecipees] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getCuisine = async (country) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&cuisine=${country}`
      );
      const data = await api.json();
      console.log(data);
      setRecipees(data.results);
    };
    getCuisine(params.ct);
  }, [params.ct]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="griddiv"
    >
      {recipees.map((re, i) => (
        <div key={i}>
          <Link to={`/${re.id}`}>
            <img src={re.image} className="w-full rounded-3xl" alt={re.title} />
            <h4 className="text-center p-4">{re.title}</h4>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default Cuisine;
