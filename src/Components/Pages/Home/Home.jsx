import React from 'react';
import iphone17pro from "../../../assets/iPhone-17-Pro.webp";
import iphone14pro from "../../../assets/iPhone-14.webp";
import Galaxy26 from "../../../assets/Galaxy-A26-5G.avif"; 
import GalaxyZ from "../../../assets/Galaxy-Z-Fold6.avif";
import vivo from "../../../assets/Vivo-X300-PRO.jpeg";
import GalaxyA16 from "../../../assets/Galaxy-A16-5G.png";
const Home = () => {
    return (
        <div className="bg-base-400">
            <div className='w-10/12 mx-auto py-10'>
                <h1 className='text-3xl font-bold text-center mb-10'>Welcome to Our Brand Phone Store</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {/* 1st card for phone */}
                    <div className="card w-72 lg:w-96 shadow-xl">
                        <figure className="w-full">
                            <img
                                src={iphone17pro}
                                alt="Shoes"
                                className="rounded-xl w-96 h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">iPhone 17 Pro Max</h2>
                            <p><b>Price:</b> ~BDT 2,10,000 - 2,30,000 (Approx.)</p>
                            <p><b>RAM:</b> 8GB or 12GB (Expected)</p>
                            <p><b>Storage:</b> 128GB, 256GB, 512GB, 1TB (Expected)</p>
                        </div>
                    </div>
                    {/* 2nd card for phone */}
                    <div className="card w-72 lg:w-96 shadow-xl">
                        <figure className="w-full">
                            <img
                                src={Galaxy26}
                                alt="Shoes"
                                className="rounded-xl w-96 h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Galaxy S26 5G</h2>
                            <p><b>Price:</b> ~~BDT 71,000 - 82,000</p>
                            <p><b>RAM:</b>12GB (Expected)</p>
                            <p><b>Storage:</b> 128GB, 256GB, 512GB, 1TB (Expected)</p>
                        </div>
                    </div>
                    {/* 3rd card for phone */}
                    <div className="card w-72 lg:w-96 shadow-xl">
                        <figure className="w-full">
                            <img
                                src={GalaxyZ}
                                alt="Shoes"
                                className="rounded-xl w-96 h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Galaxy Z Fold 6</h2>
                            <p><b>Price:</b> 134,990 BDT – 143,499 BDT</p>
                            <p><b>RAM:</b>12GB (Expected)</p>
                            <p><b>Storage:</b>  256GB / 512GB / 1TB</p>
                        </div>
                    </div>
                    {/* 4th card for phone */}
                    <div className="card w-72 lg:w-96 shadow-xl">
                        <figure className="w-full">
                            <img
                                src={vivo}
                                alt="Shoes"
                                className="rounded-xl w-96 h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Vivo X300 Pro</h2>
                            <p><b>Price:</b>  Approx. BDT 1,49,999 / INR 1,09,990.</p>
                            <p><b>RAM:</b> 12GB/256GB (Expected)</p>
                            <p><b>Storage:</b>  256GB / 512GB / 1TB</p>
                        </div>
                    </div>
                    {/* 5th card for phone */}
                    <div className="card w-72 lg:w-96 shadow-xl">
                        <figure className="w-full">
                            <img
                                src={GalaxyA16}
                                alt="Shoes"
                                className="rounded-xl w-96 h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Galaxy-A16-5G</h2>
                            <p><b>Price:</b>   BDT 18,999 to BDT 29,499</p>
                            <p><b>RAM:</b> 8GB (Expected)</p>
                            <p><b>Storage:</b>  256GB Storage</p>
                        </div>
                    </div>
                    {/* 6th card for phone */}
                    <div className="card w-72 lg:w-96 shadow-xl">
                        <figure className="w-full">
                            <img
                                src={iphone14pro}
                                alt="Shoes"
                                className="rounded-xl w-96 h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">iPhone 14 Pro Max</h2>
                            <p><b>Price:</b>   BDT 18,999 to BDT 29,499</p>
                            <p><b>RAM:</b> 8GB (Expected)</p>
                            <p><b>Storage:</b>  256GB Storage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;