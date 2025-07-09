'use client';

import { LogOut } from 'lucide-react';
import { useState } from 'react';
import {
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/authContext';

const DropdownLogout = () => {
    const { useMutateLogout } = useAuth()
    const { mutate: handleLogoutSubmit } = useMutateLogout()
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        try {
            handleLogoutSubmit()
            setOpen(false)
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} variant='destructive'>
                    <LogOut />
                    Logout
                </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-black dark:text-white'>Are you sure you want to logout?</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="secondary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleLogout}>
                        Confirm Logout
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DropdownLogout;
