import { BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="mx-36">
      <BrowserRouter>
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
