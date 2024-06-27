import {Chip} from "@nextui-org/chip";
import {WorkType} from "@/app/lib/model/application";

export default function WorkTypeChip({workType}: {workType: string}) {

    switch (workType) {
        case 'hybrid':
        case WorkType.HYBRID:
            return <Chip color="success">Hybrid</Chip>;
        case 'remote':
        case WorkType.REMOTE:
            return <Chip color="warning">Remote</Chip>;
        case 'onsite':
        case WorkType.ONSITE:
            return <Chip color="primary">On Site</Chip>;
    }
}
