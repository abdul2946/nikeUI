import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
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
            <div>
                {products
                    .reverse()
                    .slice(0, 1)
                    .map((data) => {
                        return (
                          <div className="mt-10 w-11/12 sm:w-3/5 lg:w-2/5 mx-auto flex rounded-lg shadow-lg overflow-hidden">
                          <div className="w-1/3">
                              <img
                                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cfe710d8-fab1-4c1c-b85a-8096099572e3/quest-5-road-running-shoes-VFHN0m.png"
                                  alt=""
                                  className="object-cover"
                              />
                          </div>
                          <div className="w-2/3 p-4 flex flex-col min-h-full">
                              <p className="font-bold sm:text:xl text-2xl lg:my-2 xl:my-3">{data.productName}</p>
                              <p className="font-semibold text-sky-500">$ {data.productPrice}</p>
                              <div className="flex space-x-3 ">
                                  <button
                                      className="btn btn-ghost rounded-full"
                                      onClick={() => quantity>1?setQuantity(quantity-1): setQuantity(1)}
                                  >
                                      -
                                  </button>
                                  <p className="my-auto font-semibold">{quantity}</p>
                                  <button
                                      className="btn btn-ghost rounded-full"
                                      onClick={() => setQuantity(quantity + 1)}
                                  >
                                      +
                                  </button>
                              </div>
                              <div className="mt-auto">
                                <a href="#">Remove</a>
                              </div>
                          </div>
                      </div>
                        );
                    })}
            </div>
            <div className="mt-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Cart;
