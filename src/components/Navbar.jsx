import Minicart from "./Minicart";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <NavLink
                        to="/"
                        className="btn btn-ghost normal-case text-xl"
                    >
                        shopNike
                    </NavLink>
                    <ul className="menu menu-horizontal  space-x-3 font-semibold">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/product" className="btn-ghost">
                                Shop
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <Minicart></Minicart>
            </div>
        </div>
    );
};

export default Navbar;
