"use server";

import {QueryResult, sql} from '@vercel/postgres';
import {unstable_noStore as noStore} from 'next/cache';
import {Application, ApplicationStatus} from "@/app/lib/model/application";

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
        console.error('Database Error:', error);
        throw new Error('Failed to fetch application data.');
    }
}

export async function fetchTotalApplicationCount(): Promise<number> {
    noStore();

    try {
        const data: QueryResult = await sql`SELECT COUNT(*) FROM applications`;
        return data.rows[0].count;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total application count.');
    }
}

export async function fetchRecentlySubmittedApplicationCount(): Promise<number> {
    noStore();

    try {
        const data: QueryResult = await sql`SELECT COUNT(*) 
           FROM applications
           WHERE status = 'Submitted' 
           AND created_at > NOW() - INTERVAL '7 days'
        `;
        return data.rows[0].count;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch recently submitted application count.');
    }
}

export async function fetchRejectedApplicationCount(): Promise<number> {
    noStore();

    try {
        const data: QueryResult = await sql`SELECT COUNT(*) 
           FROM applications
           WHERE UPPER(status) = UPPER(${ApplicationStatus.REJECTED});
        `;
        return data.rows[0].count;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch rejected application count.');
    }
}

export async function fetchGhostedApplicationCount(): Promise<number> {
    noStore();

    try {
        const data: QueryResult = await sql`SELECT COUNT(*) 
           FROM applications
           WHERE UPPER(status) != UPPER(${ApplicationStatus.REJECTED})
           AND UPPER(status) != UPPER(${ApplicationStatus.DECLINED})
           AND created_at > NOW() - INTERVAL '30 days'
        `;
        return data.rows[0].count;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch ghosted application count.');
    }
}
