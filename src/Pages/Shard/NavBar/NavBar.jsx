import { FaHouseUser, FaRProject, FaRegAddressCard, FaRegStar, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="relative">
             <div className="fixed max-w-screen-xl z-10 bottom-0  lg:block lg:w-auto w-auto  mx-auto lg:mx-0  flex text-3xl bg-neutral lg:h-full bg-opacity-50 p-3 font-bold text-white space-x-10 lg:space-x-0 lg:space-y-10">
                    <ul>
                        {/* Sidebar content here */}
                        <li className="block hover:bg-purple-400 p-1 rounded-lg hover:bg-fixed mb-10"><Link to="/"><FaHouseUser></FaHouseUser></Link></li>
                        <li  className="block mb-10  hover:bg-purple-400 p-1 rounded-lg hover:bg-fixed"><Link to="/about"><FaUserAlt></FaUserAlt></Link></li>
                        <li  className="block mb-10  hover:bg-purple-400 p-1 rounded-lg hover:bg-fixed"><Link to="/skill"><FaRegStar></FaRegStar></Link></li>
                        <li  className="block mb-10  hover:bg-purple-400 p-1 rounded-lg hover:bg-fixed"><Link to="/projects"><FaRProject></FaRProject></Link></li>
                        <li  className="block  hover:bg-purple-400 p-1 rounded-lg hover:bg-fixed "><Link to="/contact"><FaRegAddressCard></FaRegAddressCard></Link></li>
                    </ul>

                </div>
        </div>
    );
};

export default NavBar;