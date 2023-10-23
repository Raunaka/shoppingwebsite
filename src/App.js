import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import Main from "./components/Main";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import ToastNotification from "./components/ToastNotification";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetailsPage";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/CartSlice";

const App = () => {
  const [cart, setCart] = useState([]);
  const [productDetailspage, setProductDetailspage] = useState();
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    try {
      dispatch(addToCart(item));
      toast.success(`Added to Cart`);
    } catch (error) {
      toast.success(error.message);
    }
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handleProductChange = (e, item) => {
    console.log(`item of pdp`, item)
    setProductDetailspage(item)
  }
  console.log(`productDetailspage`, productDetailspage)

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Main handleClick={handleClick} handlePdp={handleProductChange} />}
          ></Route>

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart}
            handleChange={handleChange} />}
          ></Route>

          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route exact path="/productDetails" element={<ProductDetails handleClick={handleClick} productDetailspage={productDetailspage}/>}></Route>
        </Routes>
        <ToastNotification />
      </div>
    </Router>
  );
};

export default App;
