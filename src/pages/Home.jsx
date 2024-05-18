import React, { useState } from 'react'

import {products} from "../data.js"
import CategoryFilter from '../components/CategoryFilter.jsx'
import { add, remove } from '../redux/slices/cartSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product.jsx'

const Home = () => {

    const [category, setCategory] = useState("Chairs")

    const filteredProducts = products.filter((item)=> item.category === category)

    const cart = useSelector((state)=>  state.cart)

    console.log("printing cart", cart)

    const dispatch = useDispatch()

  return (
    <div>
      <div className="mx-auto flex justify-center mt-3 h-[40px] shadow-md pb-1">
        <CategoryFilter currentCategory={category} setCategory={setCategory} />
      </div>
      <div className=" flex  items-center justify-center mx-auto">
        <div className="flex flex-row flex-wrap max-w-6xl p-2 mx-auto min-h-[80vh]">
          {filteredProducts?.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-3">
              <Product item={item} />
              {cart.some((cartItem) => cartItem.id === item.id) ? (
                <button
                  onClick={() => dispatch(remove(item.id))}
                  className="text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white border-2 transition duration-300 ease-in"
                >
                  Remove Item
                </button>
              ) : (
                <button
                  onClick={() => dispatch(add(item))}
                  className="text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white border-2 transition duration-300 ease-in"
                >
                  Add to cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home