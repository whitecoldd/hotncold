import { GiTacos, GiNoodles, GiDonerKebab, GiPizzaSlice } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-around  my-8 w-1/2">
        <NavLink className={"flex flex-col items-center justify-center bg-gradient-to-r from-slate-950 to-slate-600 h-24 w-24 cursor-pointer scale-75 focus-within:bg-gradient-to-r focus-within:from-orange-600 focus-within:to-red-500 text-white text-lg rounded-full overflow-hidden"} to={"/cuisine/italian"}>
          <GiPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink className={"flex flex-col items-center justify-center bg-gradient-to-r from-slate-950 to-slate-600 h-24 w-24 cursor-pointer scale-75 focus-within:bg-gradient-to-r focus-within:from-orange-600 focus-within:to-red-500 text-white text-lg rounded-full overflow-hidden"} to={"/cuisine/mexican"}>
          <GiTacos />
          <h4>Mexican</h4>
        </NavLink>
        <NavLink className={"flex flex-col items-center justify-center bg-gradient-to-r from-slate-950 to-slate-600 h-24 w-24 cursor-pointer scale-75 focus-within:bg-gradient-to-r focus-within:from-orange-600 focus-within:to-red-500 text-white text-lg rounded-full overflow-hidden"} to={"/cuisine/japanese"}>
          <GiNoodles />
          <h4>Japanese</h4>
        </NavLink>
        <NavLink className={"flex flex-col items-center justify-center bg-gradient-to-r from-slate-950 to-slate-600 h-24 w-24 cursor-pointer scale-75 focus-within:bg-gradient-to-r focus-within:from-orange-600 focus-within:to-red-500 text-white text-lg rounded-full overflow-hidden"} to={"/cuisine/greek"}>
          <GiDonerKebab />
          <h4>Greek</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
