"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserDashboard() {
    const sessionContext = useSession();
    const session = sessionContext?.data;
    const status = sessionContext?.status || "unauthenticated";
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/LoginPage");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">My Account</h1>
                <p className="text-gray-600 mb-8">Welcome back, <span className="font-semibold">{session?.user?.name}</span>!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border p-6 rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">Order History</h2>
                        <p className="text-gray-500">View your recent orders and their status.</p>
                    </div>
                    <div className="border p-6 rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
                        <p className="text-gray-500">
                            Email: {session?.user?.email}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">Update your personal information and password.</p>
                    </div>
                </div>

                <button
                    onClick={() => signOut({ callbackUrl: "/LoginPage" })}
                    className="mt-8 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
