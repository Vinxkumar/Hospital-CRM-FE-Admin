import { CgProfile } from "react-icons/cg";
import { Input } from "antd";
const Profile = () => {
    return (
        <div className="flex p-8 flex-col justify-col bg-zinc-800 w-2/3 h-7/8 rounded-4xl">
            <div className="flex flex-col w-full ">
                <h1 className="text-2xl text-white">My Profile</h1>
                <hr className="border-t border-gray-500 w-full my-4" />
            </div>
            <div className="w-full p-2  flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <CgProfile className="w-16 h-16 text-gray-400"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl text-white">{localStorage.getItem("userName")}</h2>
                        <p className="text-gray-400">{localStorage.getItem("userRole")}</p>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 py-20 flex flex-col  gap-4">
                <div className="flex gap-12">
                    <div className="flex  flex-col gap-2">
                        <label className="text-gray-400">Email:</label>
                        <Input disabled style={{
                            color: "white",
                            fontSize: "16px",
                            width: "200px",
                            height: "40px",
                            cursor: "not-allowed",
                            backgroundColor: "#1e1e1e",
                            borderColor: "#333",
                            borderRadius: "25px",
                        }} value={localStorage.getItem("userEmail")|| ""}  />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400">Phone:</label>
                        <Input disabled style={{
                            color: "white",
                            fontSize: "16px",
                            width: "200px",
                            height: "40px",
                            backgroundColor: "#1e1e1e",
                            borderColor: "#333",
                            borderRadius: "25px",
                        }} value={localStorage.getItem("userPhone")|| ""}  />
                    </div>
                </div>
            </div>
            <div className="p-4  flex justify-start items-center">
                <a href="/home" className="px-2 text-blue-400 hover:underline">Back to Home</a>
            </div>
        </div>
    );
}

export default Profile;
