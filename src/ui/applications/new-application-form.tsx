'use client';

import {Input, Textarea} from "@nextui-org/input";
import {Select, SelectItem} from "@nextui-org/select";
import {ApplicationStatus, WorkType} from "@/app/lib/model/application";
import {DatePicker} from "@nextui-org/date-picker";
import {Button} from "@nextui-org/button";
import {ApplicationFormState, createApplication} from "@/app/lib/database/application.actions";
import {useFormState, useFormStatus} from 'react-dom'
import Link from "next/link";

export default function NewApplicationForm({userId}: {userId: string}) {
    const {pending} = useFormStatus();

    const initialState: ApplicationFormState = {message: null, errors: {}};
    const createApplicationWithUserId = createApplication.bind(null, userId);

    const [state, formAction] = useFormState(createApplicationWithUserId, initialState);

    return (
        <div className='rounded-lg bg-gray-50 p-4 md:p-6'>
            <h1 className="text-xl mt-2 mb-4">Add a new application to track</h1>
            <form action={formAction}>
                <div className="flex flex-col gap-4">
                    <div className='flex flex-row gap-4'>
                        <Input type="text"
                               name="companyName"
                               label="Company"
                               isInvalid={!!state?.errors?.companyName}
                               errorMessage={state?.errors?.companyName}
                        />
                        <Input type="text"
                               name="position"
                               label="Position"
                               isInvalid={!!state?.errors?.position}
                               errorMessage={state?.errors?.position}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <DatePicker
                            label="Application date"
                            name="applicationDate"
                            isInvalid={!!state?.errors?.applicationDate}
                            errorMessage={state?.errors?.applicationDate}
                        />
                        <Select
                            label="Application Status"
                            placeholder="Select a status"
                            name="status"
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
                            isInvalid={!!state?.errors?.followUpDate}
                            errorMessage={state?.errors?.followUpDate}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <Input
                            type="text"
                            label="Location"
                            name="location"
                            isInvalid={!!state?.errors?.location}
                            errorMessage={state?.errors?.location}
                        />
                        <Select
                            label="Work Type"
                            placeholder="Select a type"
                            name="workType"
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
                            isInvalid={!!state?.errors?.applicationLink}
                            errorMessage={state?.errors?.applicationLink}
                        />
                    </div>
                    <div>
                        <Textarea
                            label="Notes"
                            placeholder="Additional notes"
                            name="notes"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Button
                        as={Link}
                        href="/applications"
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
