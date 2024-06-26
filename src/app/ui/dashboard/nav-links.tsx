"use client";

import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {ChartBarIcon, HomeIcon, InboxStackIcon} from "@heroicons/react/24/outline";

const links: any = [
    {name: 'Home', icon: HomeIcon, href: '/dashboard'},
    {name: 'Applications', icon: InboxStackIcon, href: '/dashboard/applications'},
    {name: 'Reports', icon: ChartBarIcon, href: '#'},
];

export default function NavLinks() {
    const pathname: string = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'group flex h-[48px] grow items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 ',
                            {
                                'bg-gray-100 text-gray-900': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6 mr-5"/>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}
