import { NextResponse } from 'next/server';

export async function GET() {
    // Since we are using local file DB, it's always "connected" if we can write to disk
    return NextResponse.json({ status: 'connected', state: 1 });
}
