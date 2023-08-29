import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Showcase1 = () => {
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
        <div className="p-10 mx-auto">
            <h1 className="font-bold text-2xl text-center">
                Featured Products
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 justify-center my-10">
                {products.slice(0, 4).map((product) => {
                    return (
                        <NavLink to="/details">
                            <div
                                className="card bg-base-100 shadow-xl"
                                key={product.id}
                            >
                                <figure>
                                    <img
                                        src={product.productImage}
                                        alt="Shoes"
                                        className="md:h-72 lg:h-52 lx:h-72 2xl:h-96 w-full object-cover"
                                    />
                                </figure>
                                <div className="p-4">
                                        <h2 className="font-bold text-xl">
                                            {product.productName}
                                        </h2>
                                        <p className="my-auto ml-auto font-semibold text-sky-500">
                                            ${product.productPrice}
                                        </p>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Showcase1;
