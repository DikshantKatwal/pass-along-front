// components/ThemeToggle.tsx
'use client'
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const bothTheme = ['light', 'dark']

    return (
        <div>
            {bothTheme.map((mode: string) => (
                <button key={mode} onClick={() => setTheme(mode)}>
                    Change Theme {mode}
                </button>
            ))}
        </div>
    );
}