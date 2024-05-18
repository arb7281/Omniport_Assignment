import React from 'react'
import { MdDelete } from 'react-icons/md'
import { remove } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({data}) => {
    const dispatch = useDispatch()
  return (
    <div className='flex  gap-12 border-b-2 border-black pb-11'>
        
        <div className='flex flex-col items-start justify-between  mt-6'>
        <h1>{data.name}</h1>
        <div><p className="">Category: {data.category}</p></div>
        
        </div>

        <div className='flex items-center'>
        <p className="text-green-600 font-semibold">₹{data.price}</p>
        </div>

        <div onClick={()=> dispatch(remove(data.id))} className='flex items-center cursor-pointer text-2xl'>
            <MdDelete/>
        </div>
        
        
    </div>
  )
}

export default CartItem