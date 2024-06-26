import ApplicationTable from "@/app/ui/applications/application-table";
import {Application} from "@/app/lib/model/application";
import {fetchApplications} from "@/app/lib/database/application";

export default async function Page() {
    const applications: Application[] = await fetchApplications();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className='text-2xl'>Applications</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/*<Search placeholder="Search invoices..."/>*/}
                {/*<CreateInvoice/>*/}
            </div>
            <ApplicationTable applications={applications} />
            <div className="mt-5 flex w-full justify-center">
                {/*<Pagination totalPages={totalPages}/>*/}
            </div>
        </div>
    );
}
