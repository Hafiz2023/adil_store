import { NextResponse } from 'next/server';
import { readDb, writeDb } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const db = readDb();
        // Sort by createdAt desc
        const products = db.products.sort((a: { createdAt: string }, b: { createdAt: string }) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const db = readDb();

        const newProduct = {
            _id: uuidv4(), // Use _id to match frontend expectation
            ...body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        db.products.push(newProduct);
        writeDb(db);

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error creating product' }, { status: 500 });
    }
}
