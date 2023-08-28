import Home from "./pages/Home";
import Product from "./pages/Product";
import Productlist from "./pages/Productlist";
import Cart from "./pages/Cart";

import { Routes, Route, useParams } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="product">
                    <Route path="" element={<Productlist />} />
                </Route>
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
