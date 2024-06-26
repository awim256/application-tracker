import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import Navlinks from "@/app/ui/dashboard/nav-links";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function sidenav() {
    return (
        <div className="h-screen flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pb-4 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Application Tracker"
                />
                <p className='pl-2 text-black'>Application Tracker</p>
            </div>
            <div className="mt-5 flex flex-grow flex-col">
                <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
                    <NavLinks />
                </nav>
            </div>
        </div>
    )
}
