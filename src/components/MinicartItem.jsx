import { useSelector,useDispatch } from "react-redux";
import { removeCart } from "../store/slice/cartSlice";


const MinicartItem = () => {

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
                        <div className="p-4 flex flex-col">
                            <p className="font-bold text-lg">{cart.productName}</p>
                            <p className="font-semibold text-sky-500">$ {cart.productPrice}</p>
                            <div className="flex space-x-3 ">
                            </div>
                            <div className="mt-auto">
                                <button className="btn btn-ghost" onClick={() => onRemove(cart.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MinicartItem;
