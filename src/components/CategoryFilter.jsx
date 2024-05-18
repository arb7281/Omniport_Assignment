import React from 'react'
import {products} from "../data.js"

const CategoryFilter = ({currentCategory, setCategory}) => {
const categories = [...new Set(products.map((item) => item.category))]
console.log("printing categories", categories)


  return (
    <div className='flex gap-5 flex-wrap h-[15px]'>
        {
            categories?.map((category, index)=>(
                <div key={index} onClick={()=> setCategory(category)}
                className={` border-gray-700 rounded-full
                font-semibold text-[12px] p-1 px-3 uppercase 
                 border-2 transition duration-300 ease-in cursor-pointer ${currentCategory === category ? `bg-gray-700 text-white`:`hover:bg-gray-700 hover:text-white`}`}
                
                >{category}</div>
            ))
        }
    </div>
  )
}

export default CategoryFilter