import React, { useState } from "react";
import Minicart from "./Minicart";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl">
                        shopNike
                    </NavLink>
                    <ul className="menu menu-horizontal  space-x-3 font-semibold">
                        <li>
                            <a>
                                <NavLink className="bg-transparent" to="/">Home</NavLink>
                            </a>
                        </li>

                        <li>
                            <a>
                                <NavLink to="/product">Shop</NavLink>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <Minicart></Minicart>
            </div>
        </div>
    );
};

export default Navbar;
