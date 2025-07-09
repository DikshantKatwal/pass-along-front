'use client'
import React, { createContext, useContext, useState } from 'react';

type HeaderContextType = {
    SidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [SidebarOpen, setSidebarOpen] = useState(false)
    return (
        <HeaderContext.Provider value={{ SidebarOpen, setSidebarOpen }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeader = () => {
    const context = useContext(HeaderContext);
    if (!context) throw new Error('useHeader must be used within HeaderProvider');
    return context;
};
