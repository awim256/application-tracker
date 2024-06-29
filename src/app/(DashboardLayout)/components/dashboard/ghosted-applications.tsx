import {Card, CardBody} from "@nextui-org/card";

export default function GhostedApplications(){
    return(
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <h4 className="font-bold text-large">Applications Ghosted</h4>
                <p className="text-2xl text-center text-default-500">100</p>
            </CardBody>
        </Card>
    )
}
