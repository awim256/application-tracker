"use client";

import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/sidebar";
import SidebarMobile from "@/app/(DashboardLayout)/layout/sidebar/sidebar-mobile";

export default function SidebarContainer({isMenuOpen, handleMenuClick}: { isMenuOpen: boolean, handleMenuClick: (b: boolean) => void }) {

    return (
        <>
            <SidebarMobile isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />

            {/* Static sidebar for desktop */}
            <div id='desktop-sidebar' className="hidden h-full lg:flex lg:w-72 lg:flex-col">
            <Sidebar/>
            </div>
        </>
    )
}
