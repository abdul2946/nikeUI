import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const cart = {
                id: nanoid(),
                data: action.payload
            }
            state.carts.push(cart);
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter((cart) => {
                return cart.id !== action.payload;
            });
        },
    },
});

export const { addCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;
