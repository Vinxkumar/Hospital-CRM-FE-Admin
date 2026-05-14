import {motion} from "motion/react"
import KeyMetricsHandler from "../handler/KeyMetricsHandler";
import { useEffect, useRef, useMemo } from "react";

function randomPoints(n: number): number[] {
  return Array.from({ length: n }, () => Math.random() * 100);
}

function Sparkline({ color = "#3b82f6" }: { color: string }) {
  const pts = useMemo(() => randomPoints(12), []);
  const w = 80,
    h = 40;
  const min = Math.min(...pts),
    max = Math.max(...pts);
  const range = max - min || 1;
  const coords = pts.map((v, i) => ({
    x: (i / (pts.length - 1)) * w,
    y: h - ((v - min) / range) * (h - 4) - 2,
  }));
  const line = "M" + coords.map((p) => `${p.x},${p.y}`).join("L");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <circle
        cx={coords.at(-1)!.x}
        cy={coords.at(-1)!.y}
        r={2.5}
        fill={color}
      />
    </svg>
  );
}
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