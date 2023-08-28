import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <div className="mb-10">
            <div
                className="hero h-[36rem]"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1633464129147-777bdcc97c1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80)",
                }}
            >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                        <p className="mb-5 font-semibold">
                            Explore the world of nike shoes with our extensive portfolio.
                            <br />
                            Your next shoe is waiting for you over here
                        </p>
                        <NavLink to="/product" className="btn">Explore</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
