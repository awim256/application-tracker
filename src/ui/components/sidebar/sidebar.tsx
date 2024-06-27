"use client";

import {useState} from 'react'
import {Menu, MenuButton, MenuItem, MenuItems,} from '@headlessui/react'
import {Bars3Icon, UserCircleIcon,} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import SidebarDesktop from "@/ui/components/sidebar/sidebar-desktop";
import SidebarMobile from "@/ui/components/sidebar/sidebar-mobile";

const userNavigation = [
    {name: 'Your profile', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                <SidebarDesktop/>

                    <div
                        className="sticky top-0 z-40 flex flex-row justify-between h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <div>
                        <button type="button" className=" p-2.5 text-gray-700 lg:hidden"
                                onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        </div>

                        <div className="flex  gap-x-4 self-stretch lg:gap-x-6">
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <UserCircleIcon className='h-8 w-8 text-gray-400'/>
                                        <span className="hidden lg:flex lg:items-center">
                                          <span className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                                aria-hidden="true">
                                            Adam
                                          </span>
                                          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </span>
                                    </MenuButton>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                {({focus}) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            focus ? 'bg-gray-50' : '',
                                                            'block px-3 py-1 text-sm leading-6 text-gray-900',
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
