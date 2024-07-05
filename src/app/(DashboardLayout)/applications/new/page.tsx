import NewApplicationForm from "@/ui/applications/new-application-form";
import {auth} from "@clerk/nextjs/server";
import {notFound} from "next/navigation";

export default function NewApplicationPage() {
    const {userId} = auth();

    if(!userId){
        notFound();
    }

    return (
        <NewApplicationForm userId={userId} />
    );
}
