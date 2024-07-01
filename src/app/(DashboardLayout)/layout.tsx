"use client";

import Sidebar from '@/app/(DashboardLayout)/layout/sidebar/sidebar-container';
import Header from "@/app/(DashboardLayout)/layout/header/header";
import {useState} from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (isOpen: boolean): void => {
        setIsMenuOpen(isOpen);
    };

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <Sidebar isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
            <div className="flex flex-col flex-1 pb-16 bg-transparent">
                <Header handleMenuClick={handleMenuClick}/>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
