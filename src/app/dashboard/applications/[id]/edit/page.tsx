import {fetchApplicationById} from "@/app/lib/database/application";
import {Application} from "@/app/lib/model/application";
import {notFound} from "next/navigation";
import EditApplicationForm from "@/app/ui/applications/edit-application-form";

export default async function Page({ params }: { params: { id: string } }){
    const id = params.id;
    const application: Application = await fetchApplicationById(id);

    if (!application) {
        notFound();
    }

    return (
        <EditApplicationForm application={application} />
    );
}
