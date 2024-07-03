"use server";

import {QueryResult, sql} from '@vercel/postgres';
import {unstable_noStore as noStore} from 'next/cache';
import {Application, ApplicationStatus} from "@/app/lib/model/application";

export async function fetchApplications(): Promise<Application[]> {
    noStore();

    try {
        const data: QueryResult<Application> = await sql<Application>`SELECT * FROM applications`;
        return data.rows;
    } catch (error) {
        throw new Error('Failed to fetch application data.', error);
    }
}

const ITEMS_PER_PAGE: number = 6;

export async function fetchFilteredApplications(query: string, currentPage: number): Promise<Application[]> {
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

export async function fetchApplicationById(id: string): Promise<Application> {
    noStore();

    try {
        const data: QueryResult<Application> = await sql<Application>`
        SELECT * FROM applications 
        WHERE id = ${id}`;
        return data.rows[0];
    } catch (error) {
        throw new Error('Failed to fetch application data.', error);
    }
}

export async function fetchApplicationsOverTwoWeeks(): Promise<Application[]> {
    noStore();

    try {
        console.log('Fetching application data...');
        const data: QueryResult<Application> = await sql<Application>`
            SELECT * FROM applications
            WHERE created_at > NOW() - INTERVAL '14 days'           
            `;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch application data.');
    }
}

export async function fetchStats(): Promise<any> {
    noStore();

    try {
        const applicationCountPromise: Promise<QueryResult> = sql`SELECT COUNT(*) FROM applications`;

        const applicationCountOverLast7DaysPromise: Promise<QueryResult> = sql`SELECT COUNT(*) 
            FROM applications 
            WHERE status = 'Submitted' 
            AND created_at > NOW() - INTERVAL '7 days'`;

        const rejectedApplicationCountPromise: Promise<QueryResult> = sql`SELECT COUNT(*)
            FROM applications 
            WHERE UPPER(status) = UPPER(${ApplicationStatus.REJECTED})`

        const ghostedApplicationCountPromise: Promise<QueryResult> = sql`SELECT COUNT(*) 
           FROM applications
           WHERE UPPER(status) != UPPER(${ApplicationStatus.REJECTED})
           AND UPPER(status) != UPPER(${ApplicationStatus.DECLINED})
           AND created_at > NOW() - INTERVAL '14 days'`;

        const data = await Promise.all([
            applicationCountPromise,
            applicationCountOverLast7DaysPromise,
            rejectedApplicationCountPromise,
            ghostedApplicationCountPromise,
        ]);

        const applicationCount: number = Number(data[0].rows[0].count ?? '0');
        const applicationCountOverLast7Days: number = Number(data[1].rows[0].count ?? '0');
        const rejectedApplicationCount: number = Number(data[2].rows[0].paid ?? '0');
        const ghostedApplicationCount: number = Number(data[3].rows[0].pending ?? '0');

        return {
            applicationCount,
            applicationCountOverLast7Days,
            rejectedApplicationCount,
            ghostedApplicationCount
        };
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch application stats.');
    }
}
