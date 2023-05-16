import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Vegeterian = () => {
  const [vegeterian, setVegeterian] = useState([{}]);
  useEffect(() => {
    const getVegeterian = async () => {
      const check = localStorage.getItem("vegeterian");

      if (check) {
        setVegeterian(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_API_KEY
          }&number=10&diet=Vegeterian`
        );
        const data = await api.json();
        localStorage.setItem("vegeterian", JSON.stringify(data.recipes));
        setVegeterian(data.recipes);
      }
    };
    getVegeterian();
  }, []);

  return (
    <div className="mx-16 my-2">
      <h3 className="text-lg">Vegeterian</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {vegeterian.map((re, i) => (
          <SplideSlide key={i}>
            <div className="min-h-full h-80 p-2 rounded-3xl overflow-hidden relative">
              <Link to={`/${re.id}`}>
                <p className="absolute z-50 right-1/2 bottom-0 translate-x-1/2 text-white w-11/12 text-center font-semibold text-base h-2/5 flex justify-center items-center">
                  {re.title}
                </p>
                <img
                  className="rounded-3xl absolute left-0 w-full h-full object-cover"
                  src={re.image}
                />
                <div className="z-0 absolute left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Vegeterian;
