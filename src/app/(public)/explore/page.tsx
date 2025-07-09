"use client"
import ExploreCard from "./component/exploreCards"
import { useHeader } from "@/context/headerWrapper";

const ExplorePage = () => {
    const { SidebarOpen: SidebarOpen, setSidebarOpen } = useHeader()

    const toggleMobileMenu = () => {
        setSidebarOpen(!SidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="h-[2rem] sm:h-[5rem]  m-auto pt-[1.5rem] sm:pt-[1.5rem] font-bold text-2xl">
                This the announcement bar
            </div>

            <div className="flex-1 relative p-1">
                {SidebarOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-200"
                        onClick={() => setSidebarOpen(!SidebarOpen)}
                    />
                )}

                <div className="flex h-full">
                    {/* Sidebar */}
                    <div className={`
                       lg:relative lg:flex                                                
                        ${SidebarOpen ? 'fixed' : 'hidden lg:flex'}
                        ${SidebarOpen ? 'lg:w-0 lg:overflow-hidden' : 'lg:w-[10rem]'}
                        fixed lg:relative top-0 left-0 h-full lg:h-auto
                        w-[15rem] bg-card lg:bg-transparent
                        z-40
                        transition-all duration-300 ease-in-out
                        ${SidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    `}>
                        {/* Changed: Remove lg:p-2, add proper sticky positioning */}
                        <div className="sticky top-20 p-4 space-y-3 h-fit">
                            <div className={`
                                font-semibold text-lg
                                transition-opacity duration-200
                                ${SidebarOpen ? 'lg:opacity-0' : 'lg:opacity-100'}
                            `}>
                                Filters
                            </div>
                            <div className={`
                                space-y-2
                                transition-opacity duration-200
                                ${SidebarOpen ? 'lg:opacity-0' : 'lg:opacity-100'}
                            `}>
                                <div className="cursor-pointer hover:bg-blue-400/20 p-2 rounded transition-colors duration-200">
                                    Pets
                                </div>
                                <div className="cursor-pointer hover:bg-blue-400/20 p-2 rounded transition-colors duration-200">
                                    Electronics
                                </div>
                                <div className="cursor-pointer hover:bg-blue-400/20 p-2 rounded transition-colors duration-200">
                                    Beauty and Health
                                </div>
                                <div className="cursor-pointer hover:bg-blue-400/20 p-2 rounded transition-colors duration-200">
                                    Furniture
                                </div>
                                <div className="cursor-pointer hover:bg-blue-400/20 p-2 rounded transition-colors duration-200">
                                    Sports
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className={`
                        flex-1
                        transition-all duration-300 ease-in-out
                        ${SidebarOpen ? 'lg:ml-0' : 'lg:ml-2'}
                    `}>
                        <div className="pt-[3rem] lg:pt-0">
                            <ExploreCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplorePage