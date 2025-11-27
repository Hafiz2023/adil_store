"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simple check for token presence (in a real app, verify token validity)
    useEffect(() => {
        // This is a client-side check. Middleware is better for security.
        // For now, we'll check if we are on the login page.
        if (pathname === "/admin/login") {
            return;
        }

        // Check for cookie or local storage (if we used it)
        // Since we used httpOnly cookie, we can't read it easily in JS.
        // We'll assume if the API call fails, we redirect.
        // Or we can check a non-httpOnly flag cookie if we set one.
        // For this demo, let's just render children and handle 401s in components.
    }, [pathname, router]);

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
                </div>
                <nav className="mt-6">
                    <Link
                        href="/admin/dashboard"
                        className={`block px-6 py-3 hover:bg-gray-50 ${pathname === "/admin/dashboard"
                            ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                            : "text-gray-600"
                            }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/products"
                        className={`block px-6 py-3 hover:bg-gray-50 ${pathname === "/admin/products"
                            ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                            : "text-gray-600"
                            }`}
                    >
                        Products
                    </Link>
                    {/* Add more links here */}
                </nav>
                <div className="absolute bottom-0 w-64 p-6 border-t">
                    <button
                        onClick={async () => {
                            await fetch("/api/auth/admin/logout", { method: "POST" });
                            router.push("/admin/login");
                        }}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
