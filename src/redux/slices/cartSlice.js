import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state, action) =>{
            state.push(action.payload)
            console.log("item added successfully")
        },
        remove:(state, action) =>{
           return state.filter((item) => item.id !== action.payload)
        },
        resetCart:()=> []
    }
})

export const {add, remove, resetCart} = CartSlice.actions
export default CartSlice.reducer