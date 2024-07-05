import {Card} from "@nextui-org/card";
import {fetchApplicationsOverTwoWeeks} from "@/app/lib/database/application";
import {Application} from "@/app/lib/model/application";
import BarChart from "@/ui/dashboard/bar-chart";

export default async function ApplicationOverview() {
    const applications: Application[] = await fetchApplicationsOverTwoWeeks();
    const mappedData: Map<string, number> = new Map<string, number>();

    applications.forEach((application: Application) => {
        const date: string = application.application_date.toISOString().split('T')[0];
        const count: number = mappedData.get(date) || 0;
        mappedData.set(date, count + 1);
    });

    const series: ApexAxisChartSeries = [
        {
            data: Array.from(mappedData, ([date, count]) => ({x: date, y: count})),
            name: 'Applications'
        }
    ];


    return (
        <Card className="p-5">
           <BarChart series={series} title='Applications over the last two weeks'/>
        </Card>
    );
}
