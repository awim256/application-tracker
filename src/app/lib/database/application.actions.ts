'use server'

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {sql} from "@vercel/postgres";
import {SafeParseError, SafeParseSuccess, z} from 'zod';
import {ApplicationStatus, WorkType} from "@/app/lib/model/application";

export type ApplicationFormState = {
    errors?: {
        companyName?: string[],
        position?: string[],
        applicationDate?: string[],
        status?: string[],
        notes?: string[],
        followUpDate?: string[],
        location?: string[],
        workType?: string[],
        applicationLink?: string[],
    };
    message?: string | null;
};

const FormSchema = z.object({
    id: z.string(),
    companyName: z.string().min(1, {message: 'Please enter a company name.'}),
    position: z.string().min(1, {message: 'Please enter a position.'}),
    applicationDate: z.string().refine(
        (dateString) => {
            const date = new Date(dateString);
            return !isNaN(date.getTime()) && date < new Date();
        }, {
            message: 'Please enter a valid date application date',
        }
    ),
    status: z.nativeEnum(ApplicationStatus, {
        errorMap: (issue, ctx) => ({message: 'Please select a status'}),
    }),
    notes: z.string().optional(),
    followUpDate: z.string().refine(
        (dateString) => {
            const date = new Date(dateString);
            return !isNaN(date.getTime()) && date > new Date();
        }, {
            message: 'Please enter a valid follow up date',
        }
    ),
    location: z.string().min(1, {message: 'Please enter a location.'}),
    workType: z.nativeEnum(WorkType, {
        errorMap: (issue, ctx) => ({message: 'Please select a status'}),
    }),
    applicationLink: z.string().min(1, {message: 'Please enter a link to the application.'}),
    created_at: z.string().pipe(z.coerce.date()),
    updated_at: z.string().pipe(z.coerce.date()),
});

const ApplicationForm = FormSchema.omit({id: true, created_at: true, updated_at: true});

export async function createApplication(prevState: ApplicationFormState, formData: FormData): Promise<any> {
    const validatedFields: SafeParseSuccess<any> | SafeParseError<any> = validateApplicationForm(formData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    const {
        companyName,
        position,
        applicationDate,
        status,
        notes,
        followUpDate,
        location,
        workType,
        applicationLink
    } = validatedFields.data;

    try {
        await sql`
      INSERT INTO applications (company_name, position, application_date, status, notes, follow_up_date, location, work_type, application_link)
      VALUES (${companyName}, ${position}, ${applicationDate}, ${status}, ${notes}, ${followUpDate}, ${location}, ${workType}, ${applicationLink})
    `;
    } catch (error) {
        return {message: 'Database Error: Failed to Create Invoice.',}
    }

    revalidatePath('/(DashboardLayout)/applications');
    redirect('/dashboard/applications');
}

export async function updateApplication(id: string, prevState: ApplicationFormState, formData: FormData): Promise<any> {
    const validatedFields: SafeParseSuccess<any> | SafeParseError<any> = validateApplicationForm(formData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.'
        };
    }

    const {
        companyName,
        position,
        applicationDate,
        status,
        notes,
        followUpDate,
        location,
        workType,
        applicationLink
    } = validatedFields.data;


    try {
        await sql`
    UPDATE applications
    SET
     company_name = ${companyName},
     position = ${position},
     application_date = ${applicationDate},
     status = ${status},
     notes = ${notes},
     follow_up_date = ${followUpDate},
     location = ${location},
     work_type = ${workType},
     application_link = ${applicationLink},
     updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
  `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Update Application. ${error}`
        };
    }

    revalidatePath('/(DashboardLayout)/applications');
    redirect('/dashboard/applications');
}

export async function deleteApplication(id: string): Promise<{message: string}> {
    console.log('deleting', id)
    try {
        await sql`DELETE FROM applications WHERE id = ${id}`;
        revalidatePath('/(DashboardLayout)/applications');
        return { message: 'Deleted Application.' };
    }catch (error) {
        return {
            message: 'Database Error: Failed to Delete Application.'
        };
    }
}
const validateApplicationForm = (formData: FormData): SafeParseSuccess<any> | SafeParseError<any> => {
    return ApplicationForm.safeParse({
        companyName: formData.get('companyName'),
        position: formData.get('position'),
        applicationDate: formData.get('applicationDate'),
        status: formData.get('status'),
        notes: formData.get('notes'),
        followUpDate: formData.get('followUpDate'),
        location: formData.get('location'),
        workType: formData.get('workType'),
        applicationLink: formData.get('applicationLink'),
    });
}
