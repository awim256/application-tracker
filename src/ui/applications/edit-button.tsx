import {Link} from "@nextui-org/react";
import {EditIcon} from "@nextui-org/shared-icons";
import {Tooltip} from "@nextui-org/tooltip";

export default function EditButton({id}: {id: string}) {
    return (
        <Tooltip content="Edit user">
            <Link className="text-lg text-default-500 cursor-pointer active:opacity-50"
                  href={`/dashboard/applications/${id}/edit`}>
                <EditIcon/>
            </Link>
        </Tooltip>
    );
}
