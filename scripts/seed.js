const {db} = require('@vercel/postgres');
const {applications, users,} = require('./placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedApplications(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "Applications" table if it doesn't exist
        const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL, 
    company_name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    application_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    notes TEXT,
    follow_up_date DATE,
    location VARCHAR(255) NOT NULL,
    work_type VARCHAR(50) NOT NULL,  
    application_link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

        console.log(`Created "Applications" table`);

        // Insert data into the "Applications" table
        const insertedApplications = await Promise.all(
            applications.map(
                (application) => client.sql`
        INSERT INTO applications (user_id, company_name, position, application_date, status, notes, follow_up_date, location, work_type, application_link)
        VALUES (${application.user_id}, ${application.company_name}, ${application.position}, ${application.application_date}, ${application.status}, ${application.notes}, ${application.follow_up_date}, ${application.location}, ${application.work_type}, ${application.application_link})
        ON CONFLICT (id) DO NOTHING;
      `,
            ),
        );

        console.log(`Seeded ${insertedApplications.length} applications`);

        return {
            createTable,
            applications: insertedApplications,
        };
    } catch (error) {
        console.error('Error seeding applications:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedApplications(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
