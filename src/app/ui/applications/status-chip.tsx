import {Chip} from "@nextui-org/chip";

export default function StatusChip({status}: {status: string}) {

    switch (status) {
        case 'applied':
            return <Chip color="success">Applied</Chip>;
        case 'interviewing':
            return <Chip color="warning">Interview</Chip>;
        case 'offered':
            return <Chip color="primary">Offer</Chip>;
        case 'rejected':
            return <Chip color="danger">Rejected</Chip>;
    }
}
