import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addCart:(state, action)=> {
            state.carts.push(action.payload);
        },
        removeCart:(state,action)=>{
            state.carts = state.carts.filter((cart) =>{
                return cart.id !== action.payload;
            })
        }
    }
}) 


export const {addCart,removeCart} = cartSlice.actions

export default cartSlice.reducer