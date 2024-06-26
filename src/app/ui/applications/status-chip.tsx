import {Chip} from "@nextui-org/chip";
import {ApplicationStatus} from "@/app/lib/model/application";

export default function StatusChip({status}: { status: string }) {

    switch (status) {
        case 'applied':
        case ApplicationStatus.APPLIED:
            return <Chip color="success">Applied</Chip>;
        case 'interviewing':
        case ApplicationStatus.INTERVIEW:
            return <Chip color="warning">Interview</Chip>;
        case 'offered':
        case ApplicationStatus.OFFER:
            return <Chip color="primary">Offer</Chip>;
        case 'rejected':
        case ApplicationStatus.REJECTED:
            return <Chip color="danger">Rejected</Chip>;
        case ApplicationStatus.ACCEPTED:
            return <Chip color="success">Accepted</Chip>;

    }
}
