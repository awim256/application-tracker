import {
    fetchGhostedApplicationCount,
    fetchRecentlySubmittedApplicationCount,
    fetchRejectedApplicationCount,
    fetchTotalApplicationCount
} from "@/app/lib/database/application";

export default async function StatsCard() {
    const [applicationCount, recentlySubmittedCount, rejectedApplicationCount, ghostedApplicationCount] = await Promise.all([
        fetchTotalApplicationCount(),
        fetchRecentlySubmittedApplicationCount(),
        fetchRejectedApplicationCount(),
        fetchGhostedApplicationCount(),
    ]);

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <dl className="grid grid-cols-4 gap-x-4 divide-x-2">
                <div className="sm:col-span-1 text-center p-5">
                    <dt className="text-sm font-medium text-gray-500">Total Applications</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{applicationCount}</dd>
                </div>
                <div className="sm:col-span-1 text-center p-5">
                    <dt className="text-sm font-medium text-gray-500">Recently Submitted</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{recentlySubmittedCount}</dd>
                </div>
                <div className="sm:col-span-1 text-center p-5">
                    <dt className="text-sm font-medium text-gray-500">Rejected Applications</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{rejectedApplicationCount}</dd>
                </div>
                <div className="sm:col-span-1 text-center p-5">
                    <dt className="text-sm font-medium text-gray-500">Ghosted Applications</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{ghostedApplicationCount}</dd>
                </div>
            </dl>
        </div>
    )
}
