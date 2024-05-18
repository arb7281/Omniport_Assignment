import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  console.log("printing cart", cart);

  const totalAmount = cart?.reduce((acc, item) => acc + item.price, 0);

  console.log("printing total price", totalAmount);

  return (
    
     
     <div className="max-w-6xl mx-auto mt-11">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[100vh] gap-3">
                <h1 className="text-black-800 font-semibold uppercase">Cart is Empty</h1>
                <Link to="/">
                    <button className="w-[300px] py-3 bg-green-600 rounded-md text-white">Shop Now</button>
                </Link>
            </div>
          ) : (
            <div className="flex justify-evenly">
              <div className="flex flex-col gap-11 max-w-[65%]">
                {cart.map((item) => (
                  
                    <CartItem  key={item.id} data={item} />
                  
                ))}
              </div>
              <div className="flex flex-col w-[40%] pl-11 max-h-[80vh] justify-between sticky top-11">
                <p>Total amount: <span className="font-bold">{totalAmount}</span></p>
                <div>
                  <button className="w-full py-3 bg-green-600 rounded-md">Check-Out</button>
                </div>
              </div>
            </div>
          )}
        </div>
      
  );
};

export default Cart;
