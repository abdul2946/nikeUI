import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload);
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter((cart) => {
                return cart.id !== action.payload;
            });
        },
        updateCart: (state, action) => {
            let itemIndex = state.carts
                .map((data) => data.id)
                .indexOf(action.payload.id);
            let cartItem = state.carts;
            cartItem[itemIndex] = action.payload;
            state.carts = cartItem;
        },
    },
});

export const { addCart, removeCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
