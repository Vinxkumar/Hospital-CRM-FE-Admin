import {motion} from "motion/react"
import KeyMetricsHandler from "../handler/KeyMetricsHandler";
import { FaUserDoctor } from "react-icons/fa6";
import { CiMedicalMask } from "react-icons/ci";
import { FaSuitcaseMedical } from "react-icons/fa6";
const keyMetrics = () => {
    const metrics = KeyMetricsHandler();
    return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      whileHover={{scale:1.01, boxShadow: "0 0 20px rgba(72, 187, 120, 0.5)" }}
          transition={{
        default: { duration: 0.5, delay: 0.1 },  
        scale: { duration: 0.2 },                  
        boxShadow: { duration: 0.2 }               
    }}
      className="flex flex-col gap-4 p-4 bg-zinc-800 rounded-2xl w-full h-54 "
    >
    <div>
        <h2 className="text-md font-bold text-white">Key Metrics Overview</h2>
        <div className="flex flex-col justify-col mt-2 ">
            <div className="flex space-x-5 items-center ">
                <div className="flex flex-col gap-4 space-x-8">

                    <div className="flex gap-4">

                        <button className="flex items-center gap-4 px-4 py-2 text-white bg-green-500 rounded-xl transition-all duration-100 ease-in-out hover:bg-green-600">
                            <CiMedicalMask className="w-12 h-12 text-white"/>
                        </button>

                        <span className=" pt-4 text-lg font-bold text-white">Total Patients</span>

                    </div>

                    <div>
                        <span className="text-4xl px-22 py-12 font-bold text-white">{metrics.PatientTotalCount}</span>
                    </div>

                </div>
                <div className="flex gap-4 flex-col space-x-8">
                    <div className="flex gap-4">

                        <button className="flex items-center gap-4 px-4 py-2 text-white bg-green-500 rounded-xl transition-all duration-200 ease-in-out hover:bg-green-600">
                            <FaUserDoctor className="w-12 h-12 text-white"/>
                        </button>

                        <span className=" pt-4 text-lg font-bold text-white">Total Doctors</span>

                    </div>

                    <div>
                        <span className="text-4xl px-22 py-12 font-bold text-white">{metrics.DoctorTotalCount}</span>
                    </div>
                </div>
                <div className="flex gap-4 flex-col ">
                    <div className="flex gap-4">

                        <button className="flex items-center gap-4 px-4 py-2 text-white bg-green-500 rounded-xl transition-all duration-200 ease-in-out hover:bg-green-600">
                            <FaSuitcaseMedical className="w-12 h-12 text-white"/>
                        </button>

                        <span className=" pt-4 text-lg font-bold text-white">Total Medicine</span>

                    </div>

                    <div>
                        <span className="text-4xl px-22 py-12 font-bold text-white">{metrics.MedicineTotalCount}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </motion.div>
    );
}

export default keyMetrics;