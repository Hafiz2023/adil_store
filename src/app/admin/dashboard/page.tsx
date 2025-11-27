"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const router = useRouter();
    const [stats, setStats] = useState({
        products: 0,
        users: 0,
        orders: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [productsRes, usersRes] = await Promise.all([
                    fetch("/api/products"),
                    fetch("/api/users")
                ]);

                const products = await productsRes.json();
                const users = await usersRes.json();

                setStats({
                    products: Array.isArray(products) ? products.length : 0,
                    users: Array.isArray(users) ? users.length : 0,
                    orders: 0 // Placeholder
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <div className="p-8 text-center">Loading dashboard...</div>;
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-600">Overview of your store performance</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                        {stats.products}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                        {stats.orders}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                        {stats.users}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/admin/products" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                        <h3 className="font-semibold text-blue-600">Manage Products</h3>
                        <p className="text-sm text-gray-500">Add, edit, or delete products from your store.</p>
                    </Link>
                    <Link href="/admin/users" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                        <h3 className="font-semibold text-blue-600">View Users</h3>
                        <p className="text-sm text-gray-500">See all registered users and their details.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
