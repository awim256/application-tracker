import {Chip} from "@nextui-org/chip";

export default function WorkTypeChip({workType}: {workType: string}) {

    switch (workType) {
        case 'hybrid':
            return <Chip color="success">Hybrid</Chip>;
        case 'remote':
            return <Chip color="warning">Remote</Chip>;
        case 'onsite':
            return <Chip color="primary">On Site</Chip>;
    }
}
