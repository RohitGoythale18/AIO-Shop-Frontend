import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/aio-shop/product/product-list');
            const result = response.data;
            // console.log(result);
            setProducts(result.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="p-5">
                <ul className="grid grid-cols-4 gap-5 p-5">
                    {Array.isArray(products) && products.map((product) => (
                        <Link key={product._id} className="bg-gray-300"
                            to={`/fashion/${product._id}`}>
                            <img src={product.productImage} alt={product.productName} className="w-full h-auto max-w-xs mb-2" />
                            <h2 className="text-lg font-semibold p-1">{product.productName}</h2>
                            <p className="text-base font-medium text-gray-800 p-1">Price: ${product.productPrice}</p>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Products;