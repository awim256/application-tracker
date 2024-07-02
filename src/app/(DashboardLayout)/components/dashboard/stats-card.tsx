import {fetchStats} from "@/app/lib/database/application";

export default async function StatsCard() {
    const {
        applicationCount,
        applicationCountOverLast7Days,
        rejectedApplicationCount,
        ghostedApplicationCount
    } = await fetchStats();

    return (
        <div className="overflow-hidden bg-white shadow rounded-lg">
            <dl className="grid grid-cols-4 gap-x-2 sm:gap-x-4 divide-x-2">
                <div className="col-span-1 p-2.5 text-center sm:p-5">
                    <dt className="text-xs sm:text-sm font-medium text-gray-500">Total Applications</dt>
                    <dd className="mt-1 text-xl sm:text-3xl font-semibold text-gray-900">{applicationCount}</dd>
                </div>
                <div className="col-span-1 p-2.5 text-center sm:p-5">
                    <dt className="text-xs sm:text-sm font-medium text-gray-500">Recently Submitted</dt>
                    <dd className="mt-1 text-xl sm:text-3xl font-semibold text-gray-900">{applicationCountOverLast7Days}</dd>
                </div>
                <div className="col-span-1 p-2.5 text-center sm:p-5">
                    <dt className="text-xs sm:text-sm font-medium text-gray-500">Rejected Applications</dt>
                    <dd className="mt-1 text-xl sm:text-3xl font-semibold text-gray-900">{rejectedApplicationCount}</dd>
                </div>
                <div className="col-span-1 p-2.5 text-center sm:p-5">
                    <dt className="text-xs sm:text-sm font-medium text-gray-500">Ghosted Applications</dt>
                    <dd className="mt-1 text-xl sm:text-3xl font-semibold text-gray-900">{ghostedApplicationCount}</dd>
                </div>
            </dl>
        </div>
    )
}
