"use client";
import {Application} from "@/app/lib/model/application";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/table";
import StatusChip from "@/app/ui/applications/status-chip";
import WorkTypeChip from "@/app/ui/applications/work-type-chip";
import Link from "next/link";
import {fetchFilteredApplications} from "@/app/lib/database/application";
import {useEffect, useState} from "react";

export default function ApplicationTable({
                                                   query,
                                                   currentPage,
                                               }: {
    query: string;
    currentPage: number;
}) {
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        const filterApplications = async (): Promise<void> => {
            try {
                const filteredApplications: Application[] = await fetchFilteredApplications(query, currentPage);
                setApplications(filteredApplications);
            } catch (e) {
                console.error('Error fetching applications:', e);
            }
        };

        filterApplications();
    }, [query, currentPage]);

    return (
        <Table aria-label="application table">
            <TableHeader className={'text-gray-500'}>
                <TableColumn>Company</TableColumn>
                <TableColumn>Position</TableColumn>
                <TableColumn>Application date</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Notes</TableColumn>
                <TableColumn>Follow up date</TableColumn>
                <TableColumn>Location</TableColumn>
                <TableColumn>Work type</TableColumn>
            </TableHeader>
            <TableBody items={applications} className={'text-gray-500'}>
                {(application) => (
                    <TableRow key={application.id}>
                        <TableCell>{application.company_name}</TableCell>
                        <TableCell>
                            <Link href={application.application_link} target="_blank">
                                {application.position}
                            </Link>
                        </TableCell>
                        <TableCell>{application?.application_date?.toDateString()}</TableCell>
                        <TableCell>
                            <StatusChip status={application.status}/>
                        </TableCell>
                        <TableCell>{application.notes}</TableCell>
                        <TableCell>{application?.follow_up_date?.toDateString()}</TableCell>
                        <TableCell>{application.location}</TableCell>
                        <TableCell>
                            <WorkTypeChip workType={application.work_type}/>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
