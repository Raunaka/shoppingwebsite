import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./../Redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [currentItems, setCurrentItems] = useState();
  const lengthItems = useSelector((state) => state.cartDetail.value);

  const handleRemove = (e, item) => {
    dispatch(removeFromCart(item));
    setCurrentItems(lengthItems);
  };

  const handlePrice = () => {
    let ans = 0;
    lengthItems?.map((item) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
    setCurrentItems(lengthItems);
  }, [lengthItems]);

  return (
    <article className="container mt-5">
      {currentItems?.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-item-description">
            <img src={item.thumbnail} alt="" className="cart-item-image" />
            <p>{item.title}</p>
          </div>
          <div className="cart-item-actions">
            <span>{"Price: " + item.price}</span>
            <button
              className="btn btn-danger remove"
              onClick={(e) => handleRemove(e, item)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total Price of your Cart</h3>
        <span className="total-price">Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
