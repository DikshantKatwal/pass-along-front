import Link from "next/link"
import { UserIcon, ShoppingCartIcon, ShoppingBagIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import ThemeChanger from "./themeChanger"
import LoginField from "./LoginField"
import SideBarToggle from "./SideBarToggle"
import { Telescope } from "lucide-react"

const Header = () => {

    return (
        <div className=" z-10 font-nunito sticky top-0.5 sm:top-2 rounded-full pl-4  pr-0 md:pr-1 lg:pr-4  grid  justify-center items-center h-full w-full 
        grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] bg-neutral-300/50 dark:bg-[#080d12] backdrop-blur-xl custom-shadow  gap-2">

            <div className="text-black items-center gap-2 dark:text-white flex text-lg md:text-2xl whitespace-nowrap font-oswald font-medium">

                <SideBarToggle />
                <Link href={'/'}>
                    PASS ALONG
                </Link>
            </div>
            <div className="flex justify-end pr-3">
                <nav className="flex justify-center items-center gap-2 sm:gap-6 text-sm md:text-base font-medium text-neutral-700 dark:text-white/90">
                    <Link href="/" className="hover:text-white max-sm:hidden transition-colors duration-200">Home</Link>
                    <Link href="/explore" className="hover:text-white max-sm:hidden transition-colors duration-200">Explore</Link>
                    {/* <Link href="#" className="hover:text-white max-sm:hidden transition-colors duration-200">Contact</Link> */}

                    <div className="flex gap-2">
                        <Link href={'/explore'}>
                            <span className="p-2 hover:text-white cursor-pointer rounded-full hidden max-sm:block">
                                <Telescope className="size-4 sm:size-6 " />
                            </span>
                        </Link>
                        <ThemeChanger />
                        <LoginField />

                    </div>
                </nav>

            </div>
        </div>

    )
}
export default Header