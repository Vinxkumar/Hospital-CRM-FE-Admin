import HomeNavBar from "../components/HomeNavBar"
import { motion } from "motion/react"
import KeyMetrics from "../components/KeyMetrics"
import RecentActivityLog from "../components/RecentActivityLog"
import Inventory from "../components/Inventory"
import Priority from "../components/Priority"
// import LowStockAlert from "../components/LowStockAlert"  // ← add this

const HomePage = () => {
  
  return (
    <div className="bg-slate-900 pt-24 min-h-screen w-screen flex flex-col gap-4">

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
              <Priority />
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
