import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Accueil from "./components/accueil/Accueil";
import Search from "./components/searchInput/Search";
import ProductPage from "./components/productPage/ProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Search />
      </div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
