import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "../order/Order";
import { CiStar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const Product = () => {
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

    if (!product) {
        return <p>Loading...! Please wait.</p>;
    }

    return (
        <>
            <div key={product._id}
                className="grid grid-cols-3 gap-2 p-5"
            >
                <div className="">
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full"
                    />
                </div>
                <div className="p-6">
                    <p className="text-sm text-blue-500">Brand: Lux Cozi</p>
                    <h2 className="text-3xl font-semibold">{product.productName}</h2>
                    <div className="flex items-center text-lg">
                        <span className="mr-2">4.2</span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span className="ml-2"><FaAngleDown /></span>
                    </div>
                    <div>
                        <p className="text-2xl font-medium text-gray-800">${product.productPrice}</p>
                    </div>
                </div>
                <div className="">
                    <Order />
                </div>
            </div>
        </>
    )
}

export default Product;