import React from "react";
import MinicartItem from "./MinicartItem";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Minicart = () => {
    return (
        <div>
            <div className="flex-none pr-4">
                <div className="drawer drawer-end">
                    <input
                        id="my-drawer-4"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side z-10">
                        <label
                            htmlFor="my-drawer-4"
                            className="drawer-overlay"
                        ></label>
                        <div className="menu p-6 w-96 min-h-full bg-base-200 text-base-content flex-col justify-between">
                            <div>
                                <div className="flex justify-between">
                                    <p className="font-bold text-2xl">Cart</p>
                                    <button>
                                        <label
                                            htmlFor="my-drawer-4"
                                            className="drawer-overlay"
                                        ><GrClose></GrClose></label>  
                                    </button>
                                </div>
                                <div className="w-full mx-auto space-y-2">
                                    <MinicartItem></MinicartItem>
                                </div>
                            </div>
                            <div className="mx-auto w-full space-y-4 pt-4">
                                <Link
                                    to="/cart"
                                    className="btn btn-neutral mx-auto w-full"
                                >
                                    View Cart
                                </Link>
                                <Link
                                    className="btn btn-primary mx-auto w-full"
                                    to="/error"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Minicart;
