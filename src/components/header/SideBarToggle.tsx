'use client'

import { useHeader } from "@/context/headerWrapper"
import { PanelRightOpen } from "lucide-react"
import { usePathname } from "next/navigation"

const SideBarToggle = () => {

    const { SidebarOpen, setSidebarOpen } = useHeader()
    console.log(SidebarOpen)
    const pathname = usePathname()

    if (pathname !== "/explore") return null

    return (
        <div className="" onClick={() => setSidebarOpen(!SidebarOpen)}>
            <PanelRightOpen className={`${SidebarOpen ? 'rotate-180' : ''}`} />
        </div>
    )
}
export default SideBarToggle