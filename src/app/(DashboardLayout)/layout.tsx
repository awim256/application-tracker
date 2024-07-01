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
        <div className="flex flex-row flex-1 h-screen">
            <Sidebar isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
            <div className="flex flex-col flex-1 pb-16  bg-transparent">
                <Header handleMenuClick={handleMenuClick}/>
                <div className='container mx-auto p-5'>
                    {children}
                </div>
            </div>
        </div>
    );
}
