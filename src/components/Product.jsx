import React from 'react'

const Product = ({item}) => {
  return (
            <div className='w-[200px] flex flex-col items-center justify-between shadow-lg 
            hover:scale-110 transition duration-300 ease-in hover:[0px_11px_13px_18px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl bg-teal-100'>
                <div>
                    Product: {item.name}
                </div>
                <div>
                    Category: {item.category}
                </div>
                <div>
                    Price: ₹{item.price}
                </div>   
            </div>
  )
}

export default Product