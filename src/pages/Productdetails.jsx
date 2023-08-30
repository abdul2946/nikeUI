import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addCart } from "../store/slice/cartSlice";

const Productdetails = () => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const param = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setData(data);
            });
    }, []);

    const filterItem = async (category) => {
        const updateItem = await products.filter((elem) => {
            return elem.id === param.id;
        });
        setData(updateItem);
    };

    const addToCart = (e) =>{
        dispatch(addCart(data[0]))
    }

    return (
        <div onLoad={() => filterItem()}>
            {data.map((data) => {
                return (
                    <div key={data.id}>
                        <div className="md:grid md:grid-cols-2 justify-center p-10">
                            <div className="p-5">
                                <img
                                    src={data.productImage}
                                    className="lg:w-96 xl:w-4/6 2xl:w-2/4 mx-auto shadow-lg rounded-xl"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col min-h-full p-5">
                                <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                                    {data.productName}
                                </h1>
                                <div className="my-4">
                                    <p className="font-semibold">Price</p>
                                    <h2 className="font-bold">
                                        $ {data.productPrice}
                                    </h2>
                                </div>
                                <div className="my-4">
                                    <p className="font-semibold">Type</p>
                                    <h2 className="font-bold">
                                        {data.productCategory}
                                    </h2>
                                </div>
                                <div className="my-4">
                                    <p className="font-semibold my-2">
                                        Choose the prefect size for you
                                    </p>
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled defaultValue>
                                            --Choose the Size--
                                        </option>
                                        {data.size.map((size,index) => {
                                            return (
                                                <option key={index}>
                                                        {size}
                                                    </option>
                                                
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="flex space-x-10 mt-auto">
                                    <button type="submit" className="btn btn-neutral px-5" onClick={()=> addToCart(data)}>
                                        Add to Cart
                                    </button>
                                    <Link className="btn btn-primary px-5" to="/error">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Productdetails;
