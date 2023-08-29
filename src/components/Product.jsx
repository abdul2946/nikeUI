import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ data }) => {
    return (
        <NavLink to="/details">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={data.productImage}
                        alt="Shoes"
                        className="min-w-36 sm:h-96 md:h-72 w-full object-cover"
                    />
                </figure>
                <div className="p-4">
                        <h2 className="font-bold text-xl">{data.productName}</h2>
                        <p className="my-auto ml-auto font-semibold text-sky-500">${data.productPrice}</p>
                    
                </div>
            </div>
        </NavLink>
    );
};

export default Product;
