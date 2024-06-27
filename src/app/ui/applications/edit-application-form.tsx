'use client';

import {Input, Textarea} from "@nextui-org/input";
import {Select, SelectItem} from "@nextui-org/select";
import {Application, ApplicationStatus, WorkType} from "@/app/lib/model/application";
import {DatePicker} from "@nextui-org/date-picker";
import {Button} from "@nextui-org/button";
import {ApplicationFormState, updateApplication} from "@/app/lib/database/application.actions";
import {useFormState, useFormStatus} from 'react-dom'
import Link from "next/link";
import {CalendarDate} from "@nextui-org/react";
import {parseDate, toCalendarDate} from '@internationalized/date';

export default function EditApplicationForm({application}: { application: Application }) {
    const {pending} = useFormStatus();

    const initialState: ApplicationFormState = {message: null, errors: {}};
    const updateApplicationWithId = updateApplication.bind(null, application.id);

    const [state, formAction] = useFormState(updateApplicationWithId, initialState);

    console.log(state)

    const convertToCalendarDate = (date?: Date): CalendarDate | null => {
        if(!date){
            return null;
        }

        try {
            const isoString: string = date.toISOString().split('T')[0];
            const parsedDate: CalendarDate = parseDate(isoString);
            return toCalendarDate(parsedDate);
        } catch (error) {
            throw new Error(`Invalid date format: ${error}`);
        }
    }

    return (
        <div className='rounded-lg bg-gray-50 p-4 md:p-6'>
            <h1 className="text-xl mt-2 mb-4">Edit Application</h1>
            <form action={formAction}>
                <div className="flex flex-col gap-4">
                    <div className='flex flex-row gap-4'>
                        <Input type="text"
                               name="companyName"
                               label="Company"
                               isRequired
                               onChange={(e) => { console.log(e.target.value); }}
                               defaultValue={application.company_name}
                               isInvalid={!!state?.errors?.companyName}
                               errorMessage={state?.errors?.companyName}
                        />
                        <Input type="text"
                               name="position"
                               label="Position"
                               isRequired
                               defaultValue={application.position}
                               isInvalid={!!state?.errors?.position}
                               errorMessage={state?.errors?.position}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <DatePicker
                            label="Application date"
                            name="applicationDate"
                            isRequired
                            defaultValue={convertToCalendarDate(application.application_date)}
                            isInvalid={!!state?.errors?.applicationDate}
                            errorMessage={state?.errors?.applicationDate}
                        />
                        <Select
                            label="Application Status"
                            placeholder="Select a status"
                            name="status"
                            isRequired
                            defaultSelectedKeys={[application.status]}
                            isInvalid={!!state?.errors?.status}
                            errorMessage={state?.errors?.status}
                        >
                            {Object.values(ApplicationStatus).map((status) => (
                                <SelectItem key={status}>
                                    {status}
                                </SelectItem>
                            ))}
                        </Select>
                        <DatePicker
                            label="Follow up date"
                            name='followUpDate'
                            isRequired
                            defaultValue={convertToCalendarDate(application.follow_up_date)}
                            isInvalid={!!state?.errors?.followUpDate}
                            errorMessage={state?.errors?.followUpDate}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <Input
                            type="text"
                            label="Location"
                            name="location"
                            isRequired
                            defaultValue={application.location}
                            isInvalid={!!state?.errors?.location}
                            errorMessage={state?.errors?.location}
                        />
                        <Select
                            label="Work Type"
                            placeholder="Select a type"
                            name="workType"
                            isRequired
                            defaultSelectedKeys={[application.work_type]}
                            isInvalid={!!state?.errors?.workType}
                            errorMessage={state?.errors?.workType}
                        >
                            {Object.values(WorkType).map((type) => (
                                <SelectItem key={type}>
                                    {type}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="Application link"
                            name="applicationLink"
                            isRequired
                            defaultValue={application.application_link}
                            isInvalid={!!state?.errors?.applicationLink}
                            errorMessage={state?.errors?.applicationLink}
                        />
                    </div>
                    <div>
                        <Textarea
                            label="Notes"
                            placeholder="Additional notes"
                            name="notes"
                            defaultValue={application.notes}
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Button
                        as={Link}
                        href="/dashboard/applications"
                        color="default"
                        variant="bordered"
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        variant="ghost"
                        aria-disabled={pending}
                        type="submit"
                    >
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}
