"use client";
import {Pagination} from "@nextui-org/react";
import {ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function PaginationContainer({totalPages}: {totalPages: number}) {
    const router: AppRouterInstance = useRouter();
    const pathname: string = usePathname();
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const currentPage: number = Number(searchParams.get('page')) || 1;

    const handlePageChange = (page: number): void => {
        const params: URLSearchParams = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <Pagination
            loop
            showControls
            total={totalPages}
            initialPage={1}
            page={currentPage}
            onChange={handlePageChange}
        />
    )
}
