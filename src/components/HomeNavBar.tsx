import {useState} from "react"
import { navItems } from "../interface/navBar"
import { IoSettings } from "react-icons/io5";
import { logout } from "../utils/TokenVerifier";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
const HomeNavBar = () => {
    const [onClickItem, setOnClickItem] = useState<number | null>(null);
    const [hover, setHover] = useState<boolean | null>(null);
    const [buttonHover, setButtonHover] = useState<boolean>(false);
    const [profileHover, setProfileHover] = useState<boolean>(false);
    const [searchHover, setSearchHover] = useState<boolean>(false);

    const navigate = useNavigate();
    const handleOnClick = (index: number) => {
        if(onClickItem === index) {
            setOnClickItem(null);
        } else {
            setOnClickItem(index);
        }
    }

    return (
        <nav
         className={`flex items-center justify-between p-4 m-6 bg-zinc-800 text-white shadow-lg shadow-transparent rounded-full transition-all duration-300 ease-in-out ${
            hover ? " w-240  shadow-green-500 shadow-md" : "w-225"
            } `} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
            <div className="px-4">
                <ul className="flex space-x-2 gap-6">
                    {navItems.map((item, index) => (
                        <li
                            key = {index}
                            className= "relative cursor-pointer"
                        >
                            <span className="hover:text-gray-400" onClick={() => handleOnClick(index)}>
                            {item.lable}
                            </span>
                            {item.child && onClickItem === index && hover && (
                                <ul className="absolute top-full left-0 mt-2 w-40 bg-zinc-800 text-white shadow-lg rounded-lg border border-black">
                                    {item.child.map((childItem, childIndex) => (
                                        <li key={childIndex} className="p-2 hover:bg-black rounded-lg">
                                            {childItem.lable}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))} 
                </ul>
            </div>

            <div className="flex items-center justify-center" onMouseEnter={() => setSearchHover(true)} onMouseLeave={() => setSearchHover(false)}>
                <input type="text" placeholder="Search..." className={`px-4 py-2 h-8 rounded-full bg-zinc-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-200  transition-all ease-in-out duration-200 ${searchHover ? "w-72" : "w-40"}`} />
            </div>

            <div className="flex items-center justify-center gap-2">
                <div className="flex items-center px-6" onMouseEnter={() => setProfileHover(true)} onMouseLeave={() => setProfileHover(false)}>
                    <button className={`flex items-center justify-center gap-2  font-bold ${profileHover ? "text-gray-400 cursor-pointer" : "text-white"}`} onClick={()=> navigate("/profile")}>
                    <span>{localStorage.getItem("userName")}</span>
                    </button>
                </div>
                <div className="flex items-center justify-center  rounded-2xl" >
                    <button className="flex items-center justify-center gap-2  rounded-2xl transition-all duration-200  ease-in-out text-white hover:rotate-90 cursor-pointer" >
                        <IoSettings  className="w-8 h-6"/>
                    </button>
                </div>
                <div className="flex items-center justify-center gap-4 px-6 py-[-10px] rounded-2xl" onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>
                    <button className={`flex items-center justify-center gap-2 px-4 py-2 rounded-2xl transition-all duration-200  ease-in-ou  text-white ${buttonHover ? "bg-red-800 cursor-pointer " : "bg-red-500 "}`} onClick={() => {
                        logout();
                        navigate("/login");
                    }}>
                        <IoMdLogOut /> 
                    </button>
                </div>
            </div>
        </nav>    
    )

}
export default HomeNavBar