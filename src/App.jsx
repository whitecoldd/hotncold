import { BrowserRouter, Link } from "react-router-dom";
import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { TbSoup, TbSalad } from "react-icons/tb";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>hotncold</title>
        <meta name="hotncold" content="hotncold" />
        <link rel="icon" type="image/x-icon" href="/hotncold.svg" />
      </Helmet>
      <div className="mx-36">
        <BrowserRouter>
          <Link
            to={"/"}
            className="flex items-center text-2xl mt-10 mb-5 "
          >
            <TbSoup className="text-red-600 -mr-4" />
            <h1 className="font-ananda text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-600 p-4">hotncold</h1>
            <TbSalad className="text-cyan-600 -ml-3"  />
          </Link>
          <Search />
          <Categories />
          <Pages />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
