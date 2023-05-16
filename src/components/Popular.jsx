import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [pops, setPops] = useState([{}]);
  useEffect(() => {
    const getPopular = async () => {
      const check = localStorage.getItem("popular");

      if (check) {
        setPops(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_API_KEY
          }&number=10`
        );
        const data = await api.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPops(data.recipes);
      }
    };
    getPopular();
  }, []);

  return (
    <div className="mx-16">
      <h3 className=" text-lg">Popular Now</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {pops.map((re, i) => (
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

export default Popular;
