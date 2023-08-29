import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
    const carts = useSelector((state) => state.cartReducer.carts);

    return (
        <div>
            <Cartitem carts={carts} />
            <div className=" p-10 flex justify-end">
                <Link className="btn btn-primary" to="/error">Chechout</Link>
            </div>
        </div>
    );
};

export default Cart;
