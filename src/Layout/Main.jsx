// import { Link, Outlet } from "react-router-dom";
// import { FaHouseUser, FaUserAlt, FaRegStar, FaRegAddressCard } from 'react-icons/fa';

import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shard/NavBar/NavBar";



const Main = () => {
    return (
        <div className="background">
            <NavBar></NavBar>

           <Outlet></Outlet>
        </div>
    );
};

// className="drawer md:drawer-open lg:drawer-open"
{/* <div className="fixed z-10 bottom-0  lg:block lg:w-auto w-full mx-auto lg:mx-0  flex text-3xl bg-neutral lg:h-full bg-opacity-50 p-3 font-bold text-white space-x-10 lg:space-x-0 lg:space-y-16">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
   
    // <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>



// </div>
// <div className="drawer-side">
//     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//     <ul className="menu p-4 w-20 h-full bg-base-200 text-base-content">
//         {/* Sidebar content here */}
//         <li><Link to="/"><FaHouseUser></FaHouseUser></Link></li>
//         <li><Link to="/about"><FaUserAlt></FaUserAlt></Link></li>
//         <li><Link to="/skill"><FaRegStar></FaRegStar></Link></li>
//         <li><Link to="/contact"><FaRegAddressCard></FaRegAddressCard></Link></li>
//     </ul>

// </div>
// </div> */}

export default Main;