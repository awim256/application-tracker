import {Dialog, DialogBackdrop, DialogPanel, TransitionChild} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import NavLinks from "@/ui/components/sidebar/nav-links";

export default function SidebarMobile({
                                          sidebarOpen,
                                          setSidebarOpen,
                                      }:
                                          { sidebarOpen: boolean; setSidebarOpen: (value: boolean) => void; }) {
    return (
        <Dialog className="relative z-50 lg:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 flex">
                <DialogPanel
                    transition
                    className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                >
                    <TransitionChild>
                        <div
                            className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                <span className="sr-only">Close sidebar</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                            </button>
                        </div>
                    </TransitionChild>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                                alt="Your Company"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <NavLinks/>
                            </ul>
                        </nav>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
