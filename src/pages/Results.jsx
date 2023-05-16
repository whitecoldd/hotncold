import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Results = () => {
  const [recipees, setRecipees] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getResults = async (input) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&query=${input}&number=12`
      );
      const data = await api.json();
      console.log(data);
      setRecipees(data.results);
    };
    getResults(params.dish);
  }, [params.dish]);

  return (
    <div className="griddiv">
      {recipees.map((re, i) => (
        <div key={i}>
          <Link to={`/${re.id}`}>
            <img src={re.image} className="w-full rounded-3xl" alt={re.title} />
            <h4 className="text-center p-4">{re.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Results;
