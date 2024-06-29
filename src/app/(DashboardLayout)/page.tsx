import TotalApplications from "@/app/(DashboardLayout)/components/dashboard/total-applications";
import GhostedApplications from "@/app/(DashboardLayout)/components/dashboard/ghosted-applications";
import ApplicationOverview from "@/app/(DashboardLayout)/components/dashboard/application-overview";

export default function Page() {
    return (
        <div className='grid grid-cols-12 space-x-3'>
            <div className="cols-span-12 lg:col-span-8">
            <ApplicationOverview />
            </div>
            <TotalApplications />
            <GhostedApplications/>
        </div>
    )
}
