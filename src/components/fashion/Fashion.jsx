import { Link } from "react-router-dom";
import Products from "../products/Products";

const Fashion = () => {
    return (
        <>
            <div className="m-2">
                <div className="grid grid-cols-4 gap-x-5">
                    <div className="flex flex-col items-center">
                        <Link to='mens-fashion'>
                            <img src="../../../public/images/Fashion/Mens-Fashion.png"
                                className="rounded-md"
                                alt="Mens" />
                            <p className="text-sm font-medium text-center">Mens</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to='womens-fashion'>
                            <img src="../../../public/images/Fashion/Womens-Fashion.png"
                                className="rounded-md"
                                alt="Womens" />
                            <p className="text-sm font-medium text-center">Womens</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to='kids-fashion'>
                            <img src="../../../public/images/Fashion/kids-Fashion.png"
                                className="rounded-md"
                                alt="Kids" />
                            <p className="text-sm font-medium text-center">Kids</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to='/'>
                            <img src="../../../public/images/Fashion/Jewellery-Fashion.png"
                                className="rounded-md"
                                alt="Jewellery" />
                            <p className="text-sm font-medium text-center">Jewellery</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Products />
        </>
    )
}

export default Fashion;