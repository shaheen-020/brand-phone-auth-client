import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import registerImg from "../../../assets/Wavy_Gen-01_Single-07.jpg";
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };
        console.log(user);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            {
                                Swal.fire({
                                    title: "User created successfully!",
                                    icon: "success",
                                    draggable: true
                                });
                                form.reset();
                            }
                        }
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='text-center pt-8'>
                <h1 className="text-3xl lg:text-4xl font-bold">Please, Register Now.</h1>
                <p className='px-8 mt-3'>Allows new users to create an account by providing required details.</p>
            </div>
            <div className="hero w-11/12 lg:w-10/12 mx-auto py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={registerImg} alt="" className='w-[580px] rounded-lg' />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-green-600 font-bold">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;