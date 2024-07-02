import StatsCard from "@/app/(DashboardLayout)/components/dashboard/stats-card";
import ApplicationOverview from "@/app/(DashboardLayout)/components/dashboard/application-overview";

export default function Page() {
    return (
        <div className="grid col-span-12 gap-4">
            <div className='col-span-12'>
                <StatsCard/>
            </div>
            <div className='col-span-12'>
                <ApplicationOverview />
            </div>
        </div>
    )
}
