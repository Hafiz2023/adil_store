import { NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/db";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const db = readDb();

    // Check if user exists
    if (db.users.some((u: { email: string }) => u.email === email)) {
      return NextResponse.json(
        { message: "Email already registered." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Determine role (first user is admin, others are user)
    const role = db.users.length === 0 ? "admin" : "user";

    const newUser = {
      id: uuidv4(),
      name,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date().toISOString()
    };

    db.users.push(newUser);
    writeDb(db);

    return NextResponse.json({ message: "Registration successful!" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
