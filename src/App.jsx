import "./App.css";
import Footer from "./Compoenents/Footer";
import Header from "./Compoenents/Header";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import CartPage from "./Pages/CartPage";
import ProductPaga from "./Pages/ProductPaga";
import Context from "./ContextApi/Context";

function App() {
  return (
    <>
    <Context>
      <Header />
        <Routes>
          <Route path="/" index element={<LandingPage />}/>
          <Route path="/CartPage" element={<CartPage />}/>
          <Route path={`/ProductPaga/:id`} element={<ProductPaga />}/>
        </Routes>
      <Footer />
      </Context>
    </>
  );
}

export default App;

CartPage