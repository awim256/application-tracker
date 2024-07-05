import {Cog6ToothIcon} from "@heroicons/react/24/outline";
import NavLinks from "@/app/(DashboardLayout)/layout/sidebar/nav-links";
import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
                <Image width="32" height="32" src="/circle-thin.png"
                     alt="circle-thin"/>
                <h1 className="text-xl font-semibold leading-6">Application Tracker</h1>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            <NavLinks/>
                        </ul>
                    </li>
                    <li className="hidden mt-auto">
                        <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-500 hover:text-white"
                        >
                            <Cog6ToothIcon
                                className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-white"
                                aria-hidden="true"
                            />
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
