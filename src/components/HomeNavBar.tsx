import React, {useState} from "react"
import { navItems } from "../interface/navBar"
import { CgProfile } from "react-icons/cg";
import profilePic from "../assets/profilePic.jpg"
import { Button } from "antd";
import { logout } from "../utils/TokenVerifier";
import { useNavigate } from "react-router-dom";
const HomeNavBar = () => {
    const [onClickItem, setOnClickItem] = useState<number | null>(null);
    const [hover, setHover] = useState<boolean | null>(null);
    const navigate = useNavigate();
    const handleOnClick = (index: number) => {
        if(onClickItem === index) {
            setOnClickItem(null);
        } else {
            setOnClickItem(index);
        }
    }

    return (
        <nav className={`flex items-center justify-between p-4 m-6 bg-zinc-800 text-white shadow-lg rounded-full transition-all duration-300 ease-in-out ${
            hover ? " w-240" : "w-225"
            } `} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
            <div className="px-4">
                <ul className="flex space-x-2 gap-6">
                    {navItems.map((item, index) => (
                        <li
                            key = {index}
                            className= "relative cursor-pointer"
                        >
                            <span onClick={() => handleOnClick(index)}>
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
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                    <span>{localStorage.getItem("userName")}</span>
                    <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                        <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
                        <CgProfile className="w-6 h-6"/>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 px-6 py-[-10px] rounded-2xl">
                    <Button type="primary" className="bg-red-400" onClick={() => {
                        logout();
                        navigate("/login");
                    }}>
                        Logout
                    </Button>
                </div>
            </div>
        </nav>    
    )

}
export default HomeNavBar