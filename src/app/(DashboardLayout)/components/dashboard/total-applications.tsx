import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/react";

export default function TotalApplications(){
    return(
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <h4 className="font-bold text-large">Total Applications</h4>
                <p className="text-2xl text-center text-default-500">100</p>
            </CardBody>
        </Card>
    )
}
