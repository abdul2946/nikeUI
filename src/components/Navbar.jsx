import Minicart from "./Minicart";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-xl"
                    >
                        shopNike
                    </Link>
                    <ul className="menu menu-horizontal  space-x-3 font-semibold">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/product" className="btn-ghost">
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>

                <Minicart></Minicart>
            </div>
        </div>
    );
};

export default Navbar;
