"use server";

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


const ITEMS_PER_PAGE: number = 6;

export async function fetchFilteredApplications(query: string, currentPage: number): Promise<Application[]> {
    console.log(currentPage)
    noStore();

    const offset: number = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const data: QueryResult<Application> = await sql<Application>`
        SELECT * FROM applications
        WHERE 
            company_name ILIKE ${`%${query}%`} OR
            position ILIKE ${`%${query}%`} OR
            status ILIKE ${`%${query}%`}
        ORDER BY created_at DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
   `;


        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch filtered application data.');
    }

}

export async function fetchApplicationPages(query: string): Promise<number> {
    noStore();

    console.log(query);

    try {
        const data: QueryResult = await sql`SELECT COUNT(*)
    FROM applications
    WHERE
        company_name ILIKE ${`%${query}%`} OR
        position ILIKE ${`%${query}%`} OR
        status ILIKE ${`%${query}%`}
  `;

        return Math.ceil(data.rows[0].count / 6);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch application pages.');
    }
}
