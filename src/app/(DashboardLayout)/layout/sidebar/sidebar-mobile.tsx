import {Dialog, DialogBackdrop, DialogPanel, TransitionChild} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/sidebar";

export default function SidebarMobile({
                                          isMenuOpen,
                                          handleMenuClick,
                                      }:
                                          { isMenuOpen: boolean; handleMenuClick: (value: boolean) => void; }) {
    return (
        <Dialog className="relative z-50 lg:hidden" open={isMenuOpen} onClose={handleMenuClick}>
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
                            <button type="button" className="-m-2.5 p-2.5" onClick={() => handleMenuClick(false)}>
                                <span className="sr-only">Close sidebar</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                            </button>
                        </div>
                    </TransitionChild>
                    <Sidebar/>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
