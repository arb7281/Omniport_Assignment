import React, { useState } from 'react'
import "./UserDetailsModal.css"
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../redux/slices/cartSlice'

const UserDetailsModal = ({setShowModal}) => {

    const [formData, setFormData] = useState({
        name:"",
        email:""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        //w need e.target.name in [] because it reurns a string and we cannot save string directly in object
        const newData = {...formData, [e.target.name] : e.target.value}

        setFormData(newData)
    }

    const cart = useSelector((state) => state.cart)

    const handleCheckout = async () => {
        if(formData.name && formData.email){
           const data={
                name:formData.name,
                email:formData.email,
                cart:cart
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            const response = await fetch("http://localhost:4000/api/v1/order/checkout", options)

            console.log("printing response", response)

            if(response.ok){
                alert("Order placed successfully")
                setShowModal(false)
                dispatch(resetCart())
            }
        }
    }


  return (
    <div className="modal" >
      <div className="modal-content">
        {/* Modal content goes here */}
        <p className="block mb-2 text-sm font-bold text-gray-900 dark:text-black">This is the modal content.</p>
        <label htmlFor='name' className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enter your name</label>
        <input id='name' name='name' type='text' value={formData.name} onChange={(e)=> handleChange(e)} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        <label htmlFor='email'  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enter your name</label>
        <input id='email' type='email' name='email' value={formData.email} onChange={(e)=> handleChange(e)} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        <div>
        <button onClick={() => setShowModal(false)}
        className="text-white bg-blue-700 hover:bg-blue-800 mt-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
        rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Close</button>

        <button onClick={() => handleCheckout()}
        className="text-white bg-blue-700 hover:bg-blue-800 mt-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
        rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Submit and Checkout</button>
        </div>
        
      </div>
    </div>
  )
}

export default UserDetailsModal