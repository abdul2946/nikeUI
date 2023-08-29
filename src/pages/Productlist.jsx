import React from "react";
import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Product from "../components/Product";

const Productlist = () => {
    const [data, setData] = useState([]);

    const [products, setProducts] = useState([]);

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
            return elem.productCategory === category;
        });
        setData(updateItem);
    };

    

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>

            <div className="px-6 my-2">
                <h1 className="font-bold text-3xl text-center">Explore</h1>
                <div className="w-full">
                    {/* Category Sitching buttons */}
                    <div className="flex justify-center space-x-6 mt-10">
                        <button
                            className="btn btn-sm btn-outline"
                            onClick={() => setData(products)}
                        >
                            All
                        </button>
                        <button
                            className="btn btn-sm btn-outline"
                            onClick={() => filterItem("Running")}
                        >
                            Running
                        </button>
                        <button
                            className="btn btn-sm btn-outline"
                            onClick={() => filterItem("Football")}
                        >
                            Football
                        </button>
                        <button
                            className="btn btn-sm btn-outline"
                            onClick={() => filterItem("Basketball")}
                        >
                            Basketball
                        </button>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-center my-10">
                   {
                    data.map((data) => {
                        return(
                            <div key={data.id}>

                            <Product data={data}/>
                            </div>
                        )
                    })
                   } 
                </div>
            </div>
            <div className="mt-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Productlist;
