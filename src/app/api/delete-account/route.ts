import {auth, clerkClient} from "@clerk/nextjs/server";
import {NextResponse} from 'next/server';

export async function DELETE(): Promise<NextResponse> {
    const userMetaData = auth();
    const userId: string | null = userMetaData.userId;

    try {
        if (userId) {
            await clerkClient.users.deleteUser(userId);
            return NextResponse.json({message: 'User deleted'});
        } else {
            return NextResponse.json({error: 'User not found'});
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: 'Error deleting user'});
    }
}
