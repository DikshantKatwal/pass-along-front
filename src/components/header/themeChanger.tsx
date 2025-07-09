'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Circle } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeChanger = () => {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return (
        <span
            className="p-2 hover:text-pink-300  cursor-pointer rounded-full"
            onClick={() => setTheme('light')}
        >
            <Circle className="size-4 sm:size-6" />
        </span>
    )

    return (
        <>
            {theme === 'dark' ? (
                <span
                    className="p-2 hover:text-white cursor-pointer rounded-full"
                    onClick={() => setTheme('light')}
                >
                    <SunIcon className="size-4 sm:size-6" />
                </span>
            ) : (
                <span
                    className="p-2 hover:text-white  cursor-pointer rounded-full"
                    onClick={() => setTheme('dark')}
                >
                    <MoonIcon className="size-4 sm:size-6" />
                </span>
            )}
        </>
    )
}

export default ThemeChanger
