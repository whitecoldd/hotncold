import { GiTacos, GiNoodles, GiDonerKebab, GiPizzaSlice } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

const Categories = () => {
  const location = useLocation().pathname.split("/")[2];
  console.log(location);
  return (
    <div className="flex justify-center">
      <div className="flex justify-around  my-8 w-1/2">
        <NavLink
          className={`flex flex-col items-center justify-center ${
            location == "italian"
              ? "bg-gradient-to-r from-orange-500 to-red-600"
              : "bg-gradient-to-r from-slate-950 to-slate-600"
          } h-24 w-24 cursor-pointer scale-75 text-white text-lg rounded-full overflow-hidden`}
          to={"/cuisine/italian"}
        >
          <GiPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink
          className={`flex flex-col items-center justify-center ${
            location == "mexican"
              ? "bg-gradient-to-r from-orange-500 to-red-600"
              : "bg-gradient-to-r from-slate-950 to-slate-600"
          } h-24 w-24 cursor-pointer scale-75 text-white text-lg rounded-full overflow-hidden`}
          to={"/cuisine/mexican"}
        >
          <GiTacos />
          <h4>Mexican</h4>
        </NavLink>
        <NavLink
          className={`flex flex-col items-center justify-center ${
            location == "japanese"
              ? "bg-gradient-to-r from-orange-500 to-red-600"
              : "bg-gradient-to-r from-slate-950 to-slate-600"
          } h-24 w-24 cursor-pointer scale-75 text-white text-lg rounded-full overflow-hidden`}
          to={"/cuisine/japanese"}
        >
          <GiNoodles />
          <h4>Japanese</h4>
        </NavLink>
        <NavLink
          className={`flex flex-col items-center justify-center ${
            location == "greek"
              ? "bg-gradient-to-r from-orange-500 to-red-600"
              : "bg-gradient-to-r from-slate-950 to-slate-600"
          } h-24 w-24 cursor-pointer scale-75 text-white text-lg rounded-full overflow-hidden`}
          to={"/cuisine/greek"}
        >
          <GiDonerKebab />
          <h4>Greek</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
