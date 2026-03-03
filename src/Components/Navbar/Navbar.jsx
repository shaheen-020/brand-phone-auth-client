import React from 'react';
import logo from "../../assets/logo-phone-removebg-preview.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allPhones">All Phones</Link></li>
        <li><Link to="/addPhone">Add Phone</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className='bg-slate-200'>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="">
                        <img className='w-[100px] h-[100px] rounded' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://dazzle.com.bd/"><button className='btn btn-primary'>Explore</button></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;