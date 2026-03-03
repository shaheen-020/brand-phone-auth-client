import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllPhones = () => {

    const phonesLoaded = useLoaderData();
    const [phones, setPhones] = useState(phonesLoaded);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://brand-phone-auth-server.vercel.app/phones/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your phone has been deleted.",
                                icon: "success"
                            });

                            const remaining = phones.filter(phone => phone._id !== _id);
                            setPhones(remaining);
                        }
                    })
            }
        });
    };

    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-10'>

                <h1 className="text-3xl lg:text-5xl font-bold text-center">
                    All phones are stored: {phones.length}
                </h1>

                <p className='text-center mt-4 text-sm lg:text-base'>
                    It is a long established fact that a reader will be distracted by the readable content.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>

                    {
                        phones.map(phone => (

                            <div key={phone._id} className="card lg:card-side bg-base-100 shadow-xl">
                                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                    <figure className="w-full lg:w-48">
                                        <img
                                            className="w-full h-48 object-cover pt-4"
                                            src={phone.photo}
                                            alt={phone.name}
                                        />
                                    </figure>

                                    <div className="card-body text-left">

                                        <h2 className="card-title text-lg font-bold">
                                            {phone.name}
                                        </h2>

                                        <p>Price: ${phone.price}</p>
                                        <p>RAM: {phone.ram}</p>
                                        <p>Storage: {phone.storage}</p>

                                        <div className="flex flex-col gap-3 pt-2">

                                            <Link to={`/update/${phone._id}`}>
                                                <button className="btn bg-blue-800 text-white w-full lg:w-32">
                                                    Update
                                                </button>
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(phone._id)}
                                                className="btn bg-red-800 text-white w-full lg:w-32"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default AllPhones;
