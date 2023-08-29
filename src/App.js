import Home from "./pages/Home";
import Productlist from "./pages/Productlist";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";
import Productdetails from "./pages/Productdetails";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="product">
                    <Route path="" element={<Productlist />} />
                </Route>
                <Route path="details" element={<Productdetails />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
