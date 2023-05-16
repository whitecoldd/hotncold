import { BrowserRouter, Link } from "react-router-dom";
import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { TbSoup, TbSalad } from "react-icons/tb";
function App() {
  return (
    <div className="mx-36">
      <BrowserRouter>
        <Link to={"/"} className="flex items-center text-2xl mt-10 mb-5">
          <TbSoup  />
          <h1 className="font-ananda mr-1">hotncold</h1>
          <TbSalad />
        </Link>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
