import { useEffect, useRef } from "react"
import HomeNavBar from "../components/HomeNavBar"
import { message } from 'antd'
import KeyMetrics from "../components/KeyMetrics"
const HomePage = () => {

    return (
        <>

            <div className="bg-zinc-700 h-screen w-screen flex flex-col gap-8 items-center justify-start">
                <div className="flex item-center justify-center">
                    <HomeNavBar />
                </div>
                <div className="flex gap-8 justify-between items-start w-17/18 px-8">
                    <KeyMetrics />

                </div>
                
            </div>
        </>
    )
}

export default HomePage