import { Link } from "react-router-dom";

const MenuTabs = () => {
    return (
        <>
            <div className="grid grid-cols-6 p-2 bg-slate-300">
                <div className="flex flex-col items-center">
                    <Link to='/'>
                        <img src="../../../public/images/MenuImages/Fashion.png"
                            className="size-14 rounded-full"
                            alt="Fashion" />
                        <p className="text-xs text-center">Fashion</p>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='/'>
                        <img src="../../../public/images/MenuImages/Mobiles.png"
                            className="size-14 rounded-full"
                            alt="Mobiles" />
                        <p className="text-xs text-center">Mobiles</p>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='/'>
                        <img src="../../../public/images/MenuImages/Watches.png"
                            className="size-14 rounded-full"
                            alt="Watches" />
                        <p className="text-xs text-center">Watches</p>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='/'>
                        <img src="../../../public/images/MenuImages/Smart-Devices.png"
                            className="size-14 rounded-full"
                            alt="Smart Devices" />
                        <p className="text-xs text-center">Smart Devices</p>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='/'>
                        <img src="../../../public/images/MenuImages/Home.png"
                            className="size-14 rounded-full"
                            alt="Home" />
                        <p className="text-xs text-center">Home</p>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='/'>
                        <img src="../../../public/images/MenuImages/Grocery.png"
                            className="size-14 rounded-full"
                            alt="Grocery" />
                        <p className="text-xs text-center">Grocery</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MenuTabs;