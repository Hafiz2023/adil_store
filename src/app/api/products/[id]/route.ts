import { NextResponse } from 'next/server';
import { readDb, writeDb } from '@/lib/db';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const db = readDb();

        const index = db.products.findIndex((p: { _id: string }) => p._id === id);
        if (index === -1) {
            return NextResponse.json({ message: 'Product not found' }, { status: 404 });
        }

        db.products[index] = { ...db.products[index], ...body, updatedAt: new Date().toISOString() };
        writeDb(db);

        return NextResponse.json(db.products[index]);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error updating product' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const db = readDb();

        const initialLength = db.products.length;
        db.products = db.products.filter((p: { _id: string }) => p._id !== id);

        if (db.products.length === initialLength) {
            return NextResponse.json({ message: 'Product not found' }, { status: 404 });
        }

        writeDb(db);
        return NextResponse.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error deleting product' }, { status: 500 });
    }
}
