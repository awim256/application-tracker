"use client";
import {Application} from "@/app/lib/model/application";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell, getKeyValue
} from "@nextui-org/table";
import StatusChip from "@/app/ui/applications/status-chip";
import WorkTypeChip from "@/app/ui/applications/work-type-chip";

export default function ApplicationTable({applications}: { applications: Application[] }) {
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
                <TableColumn>Application link</TableColumn>
            </TableHeader>
            <TableBody items={applications}  className={'text-gray-500'}>
                {(application) => (
                    <TableRow key={application.id}>
                        <TableCell>{application.company_name}</TableCell>
                        <TableCell>{application.position}</TableCell>
                        <TableCell>{new Date(application.application_date).toLocaleDateString()}</TableCell>
                        <TableCell>
                            <StatusChip status={application.status} />
                        </TableCell>
                        <TableCell>{application.notes}</TableCell>
                        <TableCell>{new Date(application.follow_up_date).toLocaleDateString()}</TableCell>
                        <TableCell>{application.location}</TableCell>
                        <TableCell>
                            <WorkTypeChip workType={application.work_type} />
                        </TableCell>
                        <TableCell>{application.application_link}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
