import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from "../../../assets/20944201.jpg";
const Login = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='text-center pt-8'>
                <h1 className="text-3xl lg:text-4xl font-bold">Please, Login Now.</h1>
                <p className='px-8 mt-3'>Lets existing users enter credentials to access their account.</p>
            </div>
            <div className="hero w-11/12 lg:w-10/12 mx-auto py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={loginImage} alt="" className='w-[500px] rounded-lg'/>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center mt-4">Don't have an account? <Link to="/register" className="text-green-600 font-bold">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;