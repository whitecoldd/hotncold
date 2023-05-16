import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    e.preventDefault();
    navigate("results/" + input);
  };
  return (
    <form className="mx-80 my-5" onSubmit={onChangeHandler}>
      <div className="relative w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="border-none w-full bg-gradient-to-r from-gray-600 to-gray-700 text-base text-white py-2 px-12 rounded-2xl outline-none"
        />
        <BiSearchAlt className={`absolute top-1/2 left-0 translate-x-full -translate-y-1/2 ${!focus ? "text-red-600" : "text-cyan-600"}`} />
      </div>
    </form>
  );
};

export default Search;
