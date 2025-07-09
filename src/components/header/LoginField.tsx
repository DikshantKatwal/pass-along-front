'use client'
import { UserIcon } from '@heroicons/react/24/solid'
import { LoginModal } from '../LoginModal'
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Fragment } from 'react'
import { useAuth } from '@/context/authContext'
import UserDropDown from './userDropDown'
import { Skeleton } from '../ui/skeleton'
import { useGetUserQuery } from '@/api/users/user'

const LoginField = () => {
    const { isAuthenticated } = useAuth();
    const { data: userData, isLoading } = useGetUserQuery({})

    if (isLoading) {
        return (
            <div className="px-2 md:px-3 p-1 gap-2 font-oswald cursor-pointer hover:text-white font-normal flex items-center justify-between">
                <span className="sm:block hidden text-sm">
                    <Skeleton className="h-6 w-20" />
                </span>
                <span className="text-sm">
                    <Skeleton className="size-6 max-sm:size-5 rounded-full" />
                </span>
            </div>
        )
    }
    const userName = userData?.username ?
        userData.username
        : userData?.first_name || userData?.last_name ?
            `${userData?.first_name} ${userData?.last_name || ''}` :
            ''
    return (
        <Fragment>
            {userData ? (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="px-2 md:px-3 p-1 gap-2 font-oswald cursor-pointer hover:text-white font-normal flex items-center justify-between">
                            <span className="sm:block hidden text-sm">
                                {userName}
                            </span>
                            <span className="sm:hidden text-sm">
                                {userName.split(/\s+/).map(word => word[0].toUpperCase()).join('')}
                            </span>
                        </div>
                    </DropdownMenuTrigger>
                    <UserDropDown />
                </DropdownMenu>
            ) : (
                <Dialog>
                    <DialogTrigger>
                        <div className="px-2 md:px-3 p-1 gap-2 font-oswald cursor-pointer hover:text-white font-normal rounded-full flex items-center justify-between sm:border">
                            <span className="sm:block hidden text-sm">
                                Log In
                            </span>
                            <span className="rounded-full py-1">
                                <UserIcon className="size-4 md:size-6" />
                            </span>
                        </div>
                    </DialogTrigger>
                    <LoginModal />
                </Dialog>
            )}
        </Fragment>
    )
}

export default LoginField