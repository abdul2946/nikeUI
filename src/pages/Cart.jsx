import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
    const carts = useSelector((state) => state.cartReducer.carts);

    return (
        <div> 
            <Cartitem carts={carts} /> 
            <div className=" p-10 flex justify-end space-x-10">
<p className="font-semibold my-auto">Total: ${carts.reduce((total, item) => {
    console.log(total)

    console.log(item.productPrice)

    console.log("--------------")

    return(total + item.productPrice)},0)}</p>
                <Link className="btn btn-primary" to="/error">Chechout</Link>
            </div>
        </div>
    );
};

export default Cart;
