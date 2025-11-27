import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        message: 'Admin authentication is now handled via Environment Variables (ADMIN_EMAIL, ADMIN_PASSWORD). Database setup is not required.'
    });
}
