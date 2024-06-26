import ApplicationTable from "@/app/ui/applications/application-table";
import {Application} from "@/app/lib/model/application";
import {fetchApplications} from "@/app/lib/database/application";
import {Button} from "@nextui-org/button";
import Link from "next/link";

export default async function Page() {
    const applications: Application[] = await fetchApplications();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className='text-2xl'>Applications</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/*<Search placeholder="Search invoices..."/>*/}
                <Button
                    href="/dashboard/applications/new"
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                >
                    Add new application
                </Button>
            </div>
            <ApplicationTable applications={applications} />
            <div className="mt-5 flex w-full justify-center">
                {/*<Pagination totalPages={totalPages}/>*/}
            </div>
        </div>
    );
}
