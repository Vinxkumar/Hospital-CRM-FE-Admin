
import HomeNavBar from "../components/HomeNavBar"
import {motion} from "motion/react"
import KeyMetrics from "../components/KeyMetrics"
import RecentActivityLog from "../components/RecentActivityLog"
const HomePage = () => {

    return (
        <>

<div className="bg-zinc-700 h-screen w-screen flex flex-col gap-4">
    
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
    <div className="flex gap-8 justify-between px-8 pb-8 flex-1 min-h-0">
        
        {/* left */}
        <div className="flex w-5/8">
            <KeyMetrics />
        </div>

        {/* right - logs */}
        <div className="flex w-3/8 min-h-0 h-full">
            <RecentActivityLog />
        </div>

    </div>
</div>
        </>
    )
}

export default HomePage