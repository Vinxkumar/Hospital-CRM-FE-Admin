import HomeNavBar from "../components/HomeNavBar"
import { motion } from "motion/react"
import KeyMetrics from "../components/KeyMetrics"
import RecentActivityLog from "../components/RecentActivityLog"
import Inventory from "../components/Inventory"
// import LowStockAlert from "../components/LowStockAlert"  // ← add this

const HomePage = () => {
  return (
    <div className="bg-zinc-700 min-h-screen w-screen flex flex-col gap-4">

      {/* navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center px-8 pt-2"
      >
        <HomeNavBar />
      </motion.div>

      {/* content */}
      <div className="flex gap-8 px-8 pb-8 flex-1 min-h-0">

        <div className="flex flex-col gap-4 flex-1 min-h-0">
          <KeyMetrics />

          <div className="flex gap-4 flex-1 min-h-0">
            <div className="flex-1 min-h-0">
              <Inventory />
            </div>
            <div className="flex-1 min-h-0">
              {/* <LowStockAlert />   {/* ← goes here */}
              wdedseegdf
            </div>
          </div>
        </div>

        {/* right column — logs */}
        <div className="w-96 shrink-0">
          <RecentActivityLog />
        </div>

      </div>
    </div>
  )
}

export default HomePage
