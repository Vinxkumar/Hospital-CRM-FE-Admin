import { useEffect, useRef } from "react"
import HomeNavBar from "../components/HomeNavBar"
import { message } from 'antd'

const HomePage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const hasShown = useRef(false);
    useEffect(() => {
        if(hasShown.current) return;
        messageApi.open({
            type: 'success',
            content: `Welcome ${localStorage.getItem("userName")} !`
        });
        hasShown.current = true;
    }, [messageApi]);

    return (
        <>
            {contextHolder}
            <div className="bg-zinc-700 h-screen">
                <div className="flex item-center justify-center">
                    <HomeNavBar />
                </div>
            </div>
        </>
    )
}

export default HomePage