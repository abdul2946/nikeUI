import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeCart } from "../store/slice/cartSlice";


const MinicartItem = () => {
    const [quantity, setQuantity] = useState(1);

    const carts = useSelector((state) => state.cartReducer.carts);
    const dispatch = useDispatch()
    
    const onRemove = (productId) => {
        dispatch(removeCart(productId))
    }

    return (
        <div>
            {carts.map((cart) => {
                return (
                    <div className="mt-10 flex rounded-lg shadow-lg overflow-hidden" key={cart.id}>
                        <div className="w-36">
                            <img src={cart.productImage} alt="" className="object-cover" />
                        </div>
                        <div className="w- p-4">
                            <p className="font-bold text-lg">{cart.productName}</p>
                            <p className="font-semibold">{cart.productPrice}</p>
                            <div className="flex space-x-3 ">
                                <button
                                    className="btn btn-ghost rounded-full"
                                    onClick={() =>
                                        quantity > 1
                                            ? setQuantity(quantity - 1)
                                            : setQuantity(1)
                                    }
                                >
                                    -
                                </button>
                                <p className="my-auto font-semibold">
                                    {quantity}
                                </p>
                                <button
                                    className="btn btn-ghost rounded-full"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button className="btn btn-ghost" onClick={() => onRemove(cart.id)}>Remove</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MinicartItem;
