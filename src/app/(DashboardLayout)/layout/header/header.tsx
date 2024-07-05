"use client";

import {Bars3Icon, BellIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import clsx from "clsx";
import {SignOutButton, UserButton} from "@clerk/nextjs";
import Image from "next/image";

export default function Header({handleMenuClick}: { handleMenuClick: (b: boolean) => void }) {
    return (
        <div>
            <div
                className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => handleMenuClick(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>

                {/* Separator */}
                <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"/>

                <div className="flex h-16 shrink-0 items-center lg:hidden">
                    <Image width="32" height="32" src="/circle-thin.png"
                         alt="circle-thin"/>
                    <h1 className="text-xl font-semibold leading-6">Application Tracker</h1>
                </div>


                <div className="flex flex-1 gap-x-4 w-full justify-end lg:gap-x-6">

                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Separator */}
                        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"/>

                        {/* Profile dropdown */}
                        <UserButton userProfileUrl="/user-profile" showName={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
