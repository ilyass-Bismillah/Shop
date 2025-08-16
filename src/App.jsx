import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Routes/Home";
import ProductDetail from "./Components/Routes/ProductDetail";
import Category from "./Components/Routes/Category";
import Cart from "./Components/Routes/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tshirts" element={<ProductDetail />} />
          <Route path="/Casual" element={<Category />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
