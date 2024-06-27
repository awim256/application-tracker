import {Tooltip} from "@nextui-org/tooltip";
import {DeleteIcon} from "@nextui-org/shared-icons";
import {Button} from "@nextui-org/button";
import {deleteApplication} from "@/app/lib/database/application.actions";

export default function DeleteButton({id}: { id: string }) {
    const deleteApplicationWithId = deleteApplication.bind(null, id);

    return (
        <Tooltip color="danger" content="Delete user">
            <form action={deleteApplicationWithId}>
                <Button isIconOnly
                        variant="light"
                        aria-label="Delete"
                        className="text-lg text-danger cursor-pointer active:opacity-50"
                        type='submit'
                >
                    <DeleteIcon/>
                </Button>
            </form>
        </Tooltip>
    );
}
