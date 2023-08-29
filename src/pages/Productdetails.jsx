import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Productdetails = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            });
    }, []);
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            {products.slice(9,10).map((data) => {
                return (
                    <div
                        className="md:grid md:grid-cols-2 justify-center p-10"
                        key={data.id}
                    >
                        <div>
                            <img
                                src={data.productImage}
                                className="lg:w-96 xl:w-4/6 2xl:w-2/4 mx-auto shadow-lg rounded-xl"
                                alt=""
                            />

                        </div>
                        <div className="flex flex-col min-h-full">
                            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                                {data.productName}
                            </h1>
                            <div className="my-4">
                                <p className="font-semibold">Price</p>
                                <h2 className="font-bold">
                                    $ {data.productPrice}
                                </h2>
                            </div><div className="my-4">
                                <p className="font-semibold">Type</p>
                                <h2 className="font-bold">
                                    {data.productCategory}
                                </h2>
                            </div>
                            <div className="my-4">
                                <p className="font-semibold my-2">Choose the prefect size for you</p>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>
                                        --Choose the Size--
                                    </option>
                                    {
                                        data.size.map((size)=>{
                                            return(
                                                <option>{size}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="flex space-x-10 mt-auto">
                                <button className="btn btn-neutral px-5">Add to Cart</button>
                                <button className="btn btn-primary px-5">Buy Now</button>
                            </div>
                        </div>
                    </div>
                );
            })}

            <div className="mt-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Productdetails;
