import Home from "./pages/Home";
import Productlist from "./pages/Productlist";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";
import Productdetails from "./pages/Productdetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
    return (
        <div>
            
            <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="product">
                    <Route path="" element={<Productlist />} />
                    <Route path="/product/:id" element={<Productdetails />} />
                </Route>
                <Route path="cart" element={<Cart />} />
                <Route path="error" element={<Error/>}/>
            </Routes>
            <div className="mt-auto">
                <Footer></Footer>
            </div>
        </div>
        </div>
    );
}

export default App;
