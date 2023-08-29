import { useState } from "react";

const MinicartItem = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="mt-10 flex rounded-lg shadow-lg overflow-hidden">
            <div className="w-36">
                <img
                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cfe710d8-fab1-4c1c-b85a-8096099572e3/quest-5-road-running-shoes-VFHN0m.png"
                    alt=""
                    className="object-cover"
                />
            </div>
            <div className="w- p-4">
                <p className="font-bold text-lg">Name</p>
                <p className="font-semibold">Price</p>
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
                <a href="#">Remove</a>
            </div>
        </div>
    );
};

export default MinicartItem;
