// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: '',
    email: '',
    password: '',
  },
];

const applications = [
  {
    user_id: 'user_2ii8YcYLx9uZi1MfgCGYXtTk7cx',
    company_name: 'Hootsuite',
    position: 'Senior Front-End Developer',
    application_date: '2024-06-01',
    status: 'applied',
    notes: 'Follow up in two weeks',
    follow_up_date: '2024-06-15',
    location: 'Vancouver, BC',
    work_type: 'hybrid',
    application_link: 'https://hootsuite.com/careers/job-posting'
  },
  {
    user_id: 'user_2ii8YcYLx9uZi1MfgCGYXtTk7cx',
    company_name: 'SAP',
    position: 'Developer',
    application_date: '2024-06-05',
    status: 'interviewing',
    notes: 'Prepare for technical interview',
    follow_up_date: '2024-06-20',
    location: 'Vancouver, BC',
    work_type: 'onsite',
    application_link: 'https://sap.com/careers/job-posting'
  },
  {
    user_id: 'user_2ii8YcYLx9uZi1MfgCGYXtTk7cx',
    company_name: 'Lululemon',
    position: 'Senior Engineer',
    application_date: '2024-06-10',
    status: 'applied',
    notes: 'Sent follow-up email',
    follow_up_date: '2024-06-24',
    location: 'Vancouver, BC',
    work_type: 'remote',
    application_link: 'https://lululemon.com/careers/job-posting'
  },
  {
    user_id: 'user_2ii8YcYLx9uZi1MfgCGYXtTk7cx',
    company_name: 'Mastercard',
    position: 'Software Engineer II',
    application_date: '2024-06-12',
    status: 'offered',
    notes: 'Accepted offer',
    follow_up_date: null,
    location: 'Vancouver, BC',
    work_type: 'hybrid',
    application_link: 'https://mastercard.com/careers/job-posting'
  },
  {
    user_id: 'user_2ii8YcYLx9uZi1MfgCGYXtTk7cx',
    company_name: 'Cority',
    position: 'Senior Front-End Developer',
    application_date: '2024-06-15',
    status: 'rejected',
    notes: 'Received rejection email',
    follow_up_date: null,
    location: 'Toronto, ON',
    work_type: 'remote',
    application_link: 'https://cority.com/careers/job-posting'
  }
];

module.exports = {
  users,
  applications
};
