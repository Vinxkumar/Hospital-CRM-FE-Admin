import { motion } from "motion/react";
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
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 20px rgba(72, 187, 120, 0.5)",
      }}
      transition={{
        default: { duration: 0.6, delay: 0.5 },
        scale: { duration: 0.2 },
        boxShadow: { duration: 0.2 },
      }}
      className=" group flex flex-col gap-4 p-4 bg-slate-800 border-2 border-slate-700 rounded-2xl w-full h-54 "
    >
      <div>
        <motion.h2 className="relative text-md w-44 font-bold text-white">
        
            <span> Key Metrics Overview </span>
            <motion.div
      className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-white transition-transform duration-200 ease-in-out group-hover:scale-x-100"
    />
        </motion.h2>
        <div className="flex flex-col justify-col mt-2 pt-2">
          <div className="flex space-x-5 items-center ">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, z:10 }}
              animate={{ opacity: 1, scale: 1, z:0}}
              transition={{
                default: { duration: 0.6, delay:0.8 },
                scale: { duration: 0.2 },
                boxShadow: { duration: 0.2 },
              }} 
        
            className="flex flex-col gap-4 items-center w-64 h-38 rounded-2xl bg-slate-900 border border-slate-500 space-x-8 hover:border-green-500 transition-all ease-in-out duration-100">
              <div className="flex gap-4 items-center">
                <span className=" pt-2 text-sm font-bold text-white">
                  Patients
                </span>
              </div>

              <div className="flex gap-4 items-center p-4 ">
                <div className="flex gap-4">
                  <span className="text-4xl   font-bold text-white">
                    {metrics.PatientTotalCount}
                  </span>
                  <Sparkline color="#00FF00" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1}}
              transition={{
                default: { duration: 0.6, delay:1.2 },
                scale: { duration: 0.2 },
                boxShadow: { duration: 0.2 },
              }}
              className="flex flex-col gap-4 items-center w-64 h-38 rounded-2xl bg-slate-900 border border-slate-500 space-x-8 hover:border-green-500"
            >
              <div className="flex gap-4 items-center">
                <span className=" pt-2 text-sm font-bold text-white">
                  Doctors
                </span>
              </div>

              <div className="flex gap-4 items-center p-4">
                <span className="text-4xl   font-bold text-white">
                  {metrics.DoctorTotalCount}
                </span>
                <Sparkline color="yellow" />
              </div>
            </motion.div>
            <motion.div
            
                          initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1}}
              transition={{
                default: { duration: 0.6, delay:1.4 },
                scale: { duration: 0.2 },
                boxShadow: { duration: 0.2 },
              }}
            
            className="flex flex-col gap-4 items-center w-64 h-38 rounded-2xl bg-slate-900 border border-slate-500 space-x-8 hover:border-green-500">
              <div className="flex gap-4 items-center">
                <span className=" pt-2 text-sm font-bold text-white">
                  Medicine
                </span>
              </div>

              <div className="flex gap-4 items-center p-4">
                <span className="text-4xl   font-bold text-white">
                  {metrics.MedicineTotalCount}
                </span>
                <Sparkline color="blue" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default keyMetrics;
