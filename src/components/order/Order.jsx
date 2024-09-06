import axios from "axios";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

const Order = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/aio-shop/product/product-list');
            const result = response.data;
            const products = result.data;
            // console.log(products);
            if (Array.isArray(products)) {
                const foundProduct = products.find(product => product._id === (id));
                // console.log(foundProduct);
                setProduct(foundProduct);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [id]);

    return (
        <>
            <div
                key={product._id}
                className="border rounded-xl w-[80%] mx-auto my-5 px-5 pb-4"
            >
                <div>
                    <p className="text-2xl font-medium text-gray-800 p-1">${product.productPrice}</p>
                    <p className="mx-2 text-base"><span className="text-blue-500">Free delivery</span> Thursday, 12 September. Order within <span className="text-green-500">20 hrs 37 mins</span>. <span className="text-blue-500">Details</span></p>
                </div>
                <div>
                    <div className="flex mt-3 px-1">
                        <CiLocationOn className="" />
                        <p className="mx-2 text-sm">Delivering to Ratnagiri 415703 -</p>
                    </div>
                    <Link className="mx-5 px-2 text-sm text-blue-500">Update location</Link>
                </div>
                <div>
                    <p className="text-green-500 text-2xl mt-3">In stock</p>
                    <div className="flex">
                        <div className="my-2">
                            <p className="text-sm mr-2">Payment</p>
                            <p className="text-sm mr-2">Ships from</p>
                            <p className="text-sm mr-2">Sold by</p>
                        </div>
                        <div className="my-2">
                            <p className="text-green-500 text-sm ml-2">Secure transaction</p>
                            <p className=" text-sm ml-2">AIO Shop</p>
                            <p className="text-green-500 text-sm ml-2">Cocoblu Retail</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-base">Quantity:</p>
                        <select className="border rounded-sm ml-4 text-center">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-5 px-6">
                        <button className="border rounded-full text-sm my-1 p-1 bg-yellow-400">
                            Add to cart
                        </button>
                        <button className="border rounded-full text-sm my-1 p-1 bg-yellow-400">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;