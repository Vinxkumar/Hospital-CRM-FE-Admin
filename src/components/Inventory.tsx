import InventoryHandler from "../handler/InventoryHandler";
import { motion } from "motion/react";
const Inventory = () => {
  return (
    <>
      <motion.div
  initial={{ opacity: 0, scale: 0.5, y: 100 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  whileHover={{
    scale: 1.01,
    boxShadow: "0 0 20px rgba(72, 187, 120, 0.5)",
  }}
  transition={{
    default: { duration: 1, delay: 0.3 },
    scale: { duration: 0.2 },
    boxShadow: { duration: 0.2 },
  }}
  className="group flex flex-col gap-4 p-4 bg-slate-800 border-2 border-slate-700 rounded-2xl w-full h-full"
>
  <motion.h2 className="relative w-fit text-md font-bold text-white">
    <span >Inventory</span>

    <motion.div
      className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-white transition-transform duration-200 ease-in-out group-hover:scale-x-100"
    />
  </motion.h2>
  <InventoryHandler/>
</motion.div>
    </>
  );
};

export default Inventory;
