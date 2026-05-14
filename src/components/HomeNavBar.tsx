import { useState } from "react";
import { navItems } from "../interface/navBar";
import { IoSettings } from "react-icons/io5";
import { logout } from "../utils/TokenVerifier";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { motion } from "framer-motion";
type ScrollPosition = {
  scrollY: number;
};

const HomeNavBar = ({ scrollY }: ScrollPosition) => {
  const [onClickItem, setOnClickItem] = useState<number | null>(null);
  const [hover, setHover] = useState(false);
  const [buttonHover, setButtonHover] = useState<boolean>(false);
  const [profileHover, setProfileHover] = useState<boolean>(false);
  const [searchHover, setSearchHover] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleOnClick = (index: number) => {
    if (onClickItem === index) {
      setOnClickItem(null);
    } else {
      setOnClickItem(index);
    }
  };

  return (
    <motion.nav
                initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{           
          default: { duration: 0.4, delay: 0.2 },
          scale: { duration: 0.2 },
          boxShadow: { duration: 0.2 }, }}
      className={`flex flex-2 fixed items-center justify-between  bg-slate-800  text-white shadow-lg   ${
        scrollY > 25
          ? `flex item-center w-240 shadow-md z-45 rounded-full transition-all duration-300 ease-in-out border-2 border-slate-700 p-2 m-4 h-12 ${hover ? "shadow-green-500 w-250" : "shadow-none"}`
          : "w-full p-4 h-16  transition-all ease-out duration-300"
      }
             `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="px-4">
        <ul className="flex space-x-2 gap-6">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="relative cursor-pointer"
              initial="rest"
              whileHover="hover"
            >
              <span
                className="hover:text-gray-400"
                onClick={() => handleOnClick(index)}
              >
                {item.lable}
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-white"
                variants={{
                  rest: {
                    scaleX: 0,
                  },
                  hover: {
                    scaleX: 1,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              />
              {item.child && onClickItem === index && hover && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-zinc-800 text-white shadow-lg rounded-lg border border-black">
                  {item.child.map((childItem, childIndex) => (
                    <li
                      key={childIndex}
                      className="p-2 hover:bg-black rounded-lg"
                    >
                      {childItem.lable}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      <div
        className="flex items-center justify-center"
        onMouseEnter={() => setSearchHover(true)}
        onMouseLeave={() => setSearchHover(false)}
      >
        <input
          type="text"
          placeholder="Search..."
          className={`px-4 py-2 h-8 rounded-full bg-slate-700 border-2 border-slate-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-200  transition-all ease-in-out duration-200 ${searchHover ? "w-72" : "w-40"}`}
        />
      </div>

      <div className="flex items-center justify-center gap-2">
        <div
          className="flex items-center px-6"
          onMouseEnter={() => setProfileHover(true)}
          onMouseLeave={() => setProfileHover(false)}
        >
          <motion.button
            className={`relative flex items-center justify-center gap-2  font-bold ${profileHover ? "text-gray-400 cursor-pointer" : "text-white"}`}
            onClick={() => navigate("/profile")}
            initial="rest"
            whileHover="hover"
          >
            <span>{localStorage.getItem("userName")}</span>
                          <motion.div
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-white"
                variants={{
                  rest: {
                    scaleX: 0,
                  },
                  hover: {
                    scaleX: 1,
                  },
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              />
          </motion.button>
        </div>
        <div className="flex items-center justify-center  rounded-2xl">
          <button className="flex items-center justify-center gap-2  rounded-2xl transition-all duration-200  ease-in-out text-white hover:rotate-90 cursor-pointer">
            <IoSettings className="w-8 h-6" />
          </button>
        </div>
        <div
          className="flex items-center justify-center gap-4 px-6 py-2.5 rounded-2xl"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          <button
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-2xl transition-all duration-200  ease-in-ou  text-white ${buttonHover ? "bg-red-800 cursor-pointer " : "bg-red-500 "}`}
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            <IoMdLogOut />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
export default HomeNavBar;
