import {motion, scale} from "motion/react"
import KeyMetricsHandler from "../handler/KeyMetricsHandler";
import patient from "../assets/patient.png"
const keyMetrics = () => {
    const metrics = KeyMetricsHandler();
    return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
    <div className="flex flex-col gap-4 p-4 bg-zinc-800 rounded-2xl w-full h-54">
        <h2 className="text-md font-bold text-white">Key Metrics Overview</h2>
        <div className="flex flex-col justify-col ">
            <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                    <button className="flex items-center gap-4 px-4 py-2 text-white bg-zinc-700 rounded-xl transition-all duration-200 ease-in-out hover:bg-zinc-600">
                        <img src={patient} alt="Patient Icon" className="w-12 h-12 text-white"/>
                    </button>
                    <span className=" pt-4 text-lg font-bold text-white">Total Patients</span>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-4 px-4 py-2 text-white bg-zinc-700 rounded-xl transition-all duration-200 ease-in-out hover:bg-zinc-600">
                        <img src={patient} alt="Patient Icon" className="w-12 h-12 text-white"/>
                    </button>
                    <span className=" pt-4 text-lg font-bold text-white">Total Doctors</span>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-4 px-4 py-2 text-white bg-zinc-700 rounded-xl transition-all duration-200 ease-in-out hover:bg-zinc-600">
                        <img src={patient} alt="Patient Icon" className="w-12 h-12 text-white"/>
                    </button>
                    <span className=" pt-4 text-lg font-bold text-white">Total Medications</span>
                </div>
            </div>
            <div className="flex gap-4 mt-4 items-center">
                <div>
                    <span className="text-4xl px-22 py-12 font-bold text-white">{metrics.PatientTotalCount}</span>
                </div>
                <div>
                    <span className="text-4xl px-22 py-12 font-bold text-white">{metrics.DoctorTotalCount}</span>
                </div>
                <div>
                    <span className="text-4xl px-22 py-12 font-bold text-white">{metrics.MedicineTotalCount}</span>
                </div>
            </div>
        </div>

    </div>
    </motion.div>
    );
}

export default keyMetrics;