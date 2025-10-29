import { NextResponse } from "next/server";

// Temporary in-memory store (for testing)
const users: { name: string; email: string; password: string }[] = [];

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  const existing = users.find((u) => u.email === email);
  if (existing) {
    return NextResponse.json(
      { message: "Email already registered." },
      { status: 400 }
    );
  }

  users.push({ name, email, password });
  return NextResponse.json({ message: "Registration successful!" });
}
