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
          default: { duration: 0.5, delay: 0.1 },
          scale: { duration: 0.2 },
          boxShadow: { duration: 0.2 },
        }}
        className="flex flex-col gap-4 p-4 bg-zinc-800 rounded-2xl w-full h-full"
      >
        <h2 className="text-md font-bold text-white">Inventory</h2>
        <div className="flex flex-col gap-2 h-full overflow-y-auto">
          <InventoryHandler />
        </div>
      </motion.div>
    </>
  );
};

export default Inventory;
