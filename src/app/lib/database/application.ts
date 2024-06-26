import {QueryResult, sql} from '@vercel/postgres';
import {unstable_noStore as noStore} from 'next/cache';
import {Application} from "@/app/lib/model/application";

export async function fetchApplications(): Promise<Application[]> {
    noStore();

    try {
        console.log('Fetching application data...');
        const data: QueryResult<Application> = await sql<Application>`SELECT * FROM applications`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch application data.');
    }
}
