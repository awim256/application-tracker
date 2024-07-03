export interface Application {
    id: string,
    user_id: string,
    company_name: string,
    position: string,
    application_date: Date,
    status: string,
    notes?: string,
    follow_up_date?: Date,
    location: string,
    work_type: string,
    application_link?: string,
    created_at: Date,
    updated_at: Date,
}

export enum ApplicationStatus {
    APPLIED = 'Applied',
    INTERVIEW = 'Interview',
    REJECTED = 'Rejected',
    OFFER = 'Offer',
    ACCEPTED = 'Accepted',
    DECLINED = 'Declined',
    ARCHIVED = 'Archived',
}

export enum WorkType {
    REMOTE = 'Remote',
    HYBRID = 'Hybrid',
    ONSITE = 'Onsite',
}
