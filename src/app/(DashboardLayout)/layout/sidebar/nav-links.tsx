"use client";

import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {HomeIcon, InboxStackIcon} from "@heroicons/react/24/outline";

interface NavLink {
    name: string;
    icon: any;
    href: string;
}

const links: NavLink[] = [
    {name: 'Home', icon: HomeIcon, href: '/'},
    {name: 'Applications', icon: InboxStackIcon, href: '/applications'},
];

export default function NavLinks() {
    const pathname: string = usePathname();

    return (
        <>
            {
                links.map((link: NavLink) => {
                    const LinkIcon = link.icon;
                    return (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={clsx(
                                    'text-gray-700 hover:bg-sky-500 hover:text-white group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                    {'!bg-sky-500 !text-white': pathname === link.href}
                                )}
                            >
                                <LinkIcon className={clsx(
                                    'text-gray-700 group-hover:text-white h-6 w-6 shrink-0',
                                    {'!text-white': pathname === link.href}
                                )
                                }/>
                                {link.name}
                            </Link>
                        </li>
                    )
                })
            }
        </>
    );
}
