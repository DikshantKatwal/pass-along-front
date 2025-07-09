import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,

} from "@/components/ui/dropdown-menu"
import DropdownLogout from "./logout"
import { useGetUserQuery } from "@/api/users/user"

const UserDropDown = () => {
    const { data: userData, isLoading } = useGetUserQuery({})

    return (
        <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="end"
            sideOffset={4}
        >
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    {/* <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar> */}
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{userData?.first_name} {userData?.last_name}</span>
                        <span className="truncate text-xs">{userData?.email}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Bell />
                    Notifications
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownLogout />
        </DropdownMenuContent>
    )
}
export default UserDropDown