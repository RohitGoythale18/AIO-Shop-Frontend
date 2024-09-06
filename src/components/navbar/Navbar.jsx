import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#cbd5e1] flex items-center justify-between">
            <div className="flex items-center">
                <img
                    src="/public/images/main-logo.png"
                    alt="logo"
                    className="size-16"
                />
                <p className="text-4xl font-semibold">AIO Shop</p>
            </div>
            <div className="">
                <ul className="flex text-lg">
                    <li className="m-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="m-4">
                        <Link to='/fashion'>Fashion</Link>
                    </li>
                    <li className="m-4">
                        <Link to='/electronics'>Electronics</Link>
                    </li>
                    <li className="m-4">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className="m-4">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="m-4">
                        <Link to='/support'>Support</Link>
                    </li>
                </ul>
            </div>
            <div>
                <FaUserCircle className="size-7 mx-4" />
            </div>
        </nav>
    )
}

export default Navbar;