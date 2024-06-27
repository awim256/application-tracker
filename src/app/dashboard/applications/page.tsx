import ApplicationTable from "@/app/ui/applications/application-table";
import {Application} from "@/app/lib/model/application";
import {fetchApplicationPages, fetchApplications} from "@/app/lib/database/application";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import Search from "@/app/ui/applications/search";
import {Suspense} from "react";
import PaginationContainer from "@/app/ui/applications/pagination-container";

export default async function Page({searchParams}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query: string = searchParams?.query || '';
    const currentPage: number = Number(searchParams?.page) || 1;
    const totalPages: number = await fetchApplicationPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className='text-2xl'>Applications</h1>
            </div>
            <div className="my-4 flex items-center justify-between gap-2 md:mt-8">
                <div className="w-1/2">
                    <Search placeholder="Filter by company"/>
                </div>
                <Button
                    href="/dashboard/applications/new"
                    as={Link}
                    color="primary"
                    variant="solid"
                >
                    Add new application
                </Button>
            </div>
            <Suspense fallback={<p>Loading feed...</p>}>
                <ApplicationTable query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/*<Pagination totalPages={totalPages}/>*/}
                <PaginationContainer totalPages={totalPages} />
            </div>
        </div>
    );
}
