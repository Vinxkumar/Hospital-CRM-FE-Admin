import RecentActivityLogHandler from "../handler/RecentActivityLogHandler";
import { motion } from "motion/react";
const RecentActivityLog = () => {
 
    return (

        <>
        
<motion.div
    initial={{ opacity: 0, scale: 0.5, x: 100 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(72, 187, 120, 0.5)" }}
    transition={{
          default: { duration: 1, delay: 0.8 },
          scale: { duration: 0.2 },
          boxShadow: { duration: 0.2 },          
    }}
    className="group flex flex-col gap-4 p-4 bg-slate-800 rounded-2xl w-full h-full"
>
            <motion.h2 className="relative w-40 text-md font-bold text-white">

                <span>Recent Activity Log</span>
                <motion.div
                className="absolute rounded-full mt-0.5 left-0 origin-left scale-x-0 h-[2px] w-full transition-transform ease-in-out duration-100 bg-white group-hover:scale-x-100" 
                />
            </motion.h2>
            <div className="flex flex-col gap-2 mt-2 h-full overflow-y-auto">
                <RecentActivityLogHandler />
            </div>
         
        </motion.div>
        
        </>

    )
}

export default RecentActivityLog;