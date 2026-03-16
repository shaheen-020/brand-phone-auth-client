import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from "../../../assets/Wavy_Gen-01_Single-07.jpg";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);
        loginUser(email, password)
            .then(res => {

                console.log(res.user);
                fetch("http://localhost:5000/users", { 
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        lastLogin: new Date() 
                    })
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data);

                        if (data.modifiedCount > 0) {

                            Swal.fire({
                                title: "User logged in successfully!",
                                icon: "success",
                                draggable: true
                            });

                            form.reset();
                        }
                    })

            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className='bg-base-200 min-h-screen'>

            <div className='text-center pt-8'>
                <h1 className="text-3xl lg:text-4xl font-bold">Please, Login Now.</h1>
                <p className='px-8 mt-3'>
                    Lets existing users enter credentials to access their account.
                </p>
            </div>

            <div className="hero w-11/12 lg:w-10/12 mx-auto py-10">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left">
                        <img src={loginImage} alt="" className='w-[500px] rounded-lg' />
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p className="text-center mt-4">
                                Don't have an account?
                                <Link to="/register" className="text-green-600 font-bold">
                                    Register
                                </Link>
                            </p>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;
