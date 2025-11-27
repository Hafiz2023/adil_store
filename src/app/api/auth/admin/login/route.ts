import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Create token
        const token = jwt.sign({ email: ADMIN_EMAIL, role: 'admin' }, JWT_SECRET, {
            expiresIn: '1d',
        });

        const response = NextResponse.json({ message: 'Login successful', token });

        // Set cookie
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
