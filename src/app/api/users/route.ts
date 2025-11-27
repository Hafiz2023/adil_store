import { NextResponse } from 'next/server';
import { readDb } from '@/lib/db';

export async function GET() {
    try {
        const db = readDb();
        // Return users without passwords
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const users = db.users.map(({ password, ...user }: { password: string;[key: string]: unknown }) => ({
            _id: (user as { id: string }).id, // Map id to _id for frontend compatibility
            ...user
        })).sort((a: { createdAt: string }, b: { createdAt: string }) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
    }
}
