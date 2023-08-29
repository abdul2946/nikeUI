import {useState} from 'react'

import { useDispatch } from "react-redux";
import { removeCart } from "../store/slice/cartSlice";

const Cartitem = ({carts}) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
    
    const onRemove = (productId) => {
        dispatch(removeCart(productId))
    }
  return (
    <div>
      <div>
                {carts.map((data) => {
                        return (
                          <div className="my-8 w-11/12 sm:w-3/5 lg:w-2/5 mx-auto flex rounded-lg shadow-lg overflow-hidden">
                          <div className="w-1/3">
                              <img
                                  src={data.productImage}
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
                                <button className="btn btn-ghost" onClick={() => onRemove(data.id)}>Remove</button>
                              </div>
                          </div>
                      </div>
                        );
                    })}
                                      
            </div>
    </div>
  )
}

export default Cartitem
