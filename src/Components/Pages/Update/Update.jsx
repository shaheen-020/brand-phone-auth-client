import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const phoneLoaded = useLoaderData();
    const { _id, name, brand, supplier, ram, price, storage, photo } = phoneLoaded;
    const handleUpdatePhone = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const supplier = form.supplier.value;
        const ram = form.ram.value;
        const price = form.price.value;
        const storage = form.storage.value;
        const photo = form.photo.value;
        const updatePhone = {
            name,
            brand,
            supplier,
            ram,
            price,
            storage,
            photo
        }
        console.log(updatePhone);
        fetch(`https://brand-phone-auth-server.vercel.app/phones/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatePhone)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Mobile Phone Updated Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 w-10/12 mx-auto my-10 rounded-lg">
            <div className='py-10 lg:py-24 px-3'>
                <div className='p-8 text-center space-y-4 mb-4'>
                    <h1 className="text-2xl lg:text-4xl font-bold">Update Phone</h1>
                    <p className='text-base lg:text-lg'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdatePhone}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Phone Name</label>
                            <input type="text" name='name' className="input w-full" defaultValue={name} placeholder="Phone Name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Brand</label>
                            <input type="text" name='brand' className="input w-full" defaultValue={brand} placeholder="Brand Name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' className="input w-full" defaultValue={supplier} placeholder="Supplier Name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">RAM</label>
                            <input type="text" name='ram' className="input w-full" defaultValue={ram} placeholder="RAM" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Price</label>
                            <input type="text" name='price' className="input w-full" defaultValue={price} placeholder="Price" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Storage</label>
                            <input type="text" name='storage' className="input w-full" defaultValue={storage} placeholder="Storage" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" defaultValue={photo} placeholder="Photo URL" />
                    </fieldset>

                    <input type="submit" className='btn btn-primary w-full' value="Update Phone" />
                </form>
            </div>
        </div>
    );
};

export default Update;