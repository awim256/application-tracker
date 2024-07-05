import {fetchApplicationById} from "@/app/lib/database/application";
import {Application} from "@/app/lib/model/application";
import {notFound} from "next/navigation";
import EditApplicationForm from "@/ui/applications/edit-application-form";
import {auth} from "@clerk/nextjs/server";

export default async function Page({params}: { params: { id: string } }) {
    const {userId} = auth();

    if(!userId){
        notFound();
    }

    const id: string = params.id;
    const application: Application = await fetchApplicationById(id);

    if (!application) {
        notFound();
    }

    return (
        <EditApplicationForm application={application} />
    );
}
