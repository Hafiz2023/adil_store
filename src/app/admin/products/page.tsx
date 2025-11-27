"use client";

import { useState, useEffect } from "react";
import ProductForm from "@/components/admin/ProductForm";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import Image from "next/image";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    stock: number;
}

export default function AdminProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchProducts = async () => {
        try {
            const res = await fetch("/api/products");
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        try {
            await fetch(`/api/products/${id}`, { method: "DELETE" });
            setProducts(products.filter((p) => p._id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleEdit = (product: Product) => {
        setCurrentProduct(product);
        setIsEditing(true);
    };

    const handleAddNew = () => {
        setCurrentProduct(null);
        setIsEditing(true);
    };

    const handleSuccess = () => {
        setIsEditing(false);
        fetchProducts();
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="p-8 text-center">Loading products...</div>;

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold text-gray-800">Products Management</h1>
                {!isEditing && (
                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <button
                            onClick={handleAddNew}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow-md whitespace-nowrap"
                        >
                            <FaPlus /> Add Product
                        </button>
                    </div>
                )}
            </div>

            {isEditing ? (
                <ProductForm
                    existingProduct={currentProduct}
                    onSuccess={handleSuccess}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6">Image</th>
                                    <th className="py-3 px-6">Name</th>
                                    <th className="py-3 px-6">Category</th>
                                    <th className="py-3 px-6">Price</th>
                                    <th className="py-3 px-6">Stock</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {filteredProducts.map((product) => (
                                    <tr
                                        key={product._id}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="py-3 px-6 text-left">
                                            <div className="w-12 h-12 relative rounded overflow-hidden bg-gray-100">
                                                {product.image ? (
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Img</div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left font-medium">{product.name}</td>
                                        <td className="py-3 px-6 text-left">{product.category}</td>
                                        <td className="py-3 px-6 text-left">${product.price}</td>
                                        <td className="py-3 px-6 text-left">{product.stock}</td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex item-center justify-center gap-4">
                                                <button
                                                    onClick={() => handleEdit(product)}
                                                    className="text-blue-500 hover:text-blue-700 transform hover:scale-110 transition"
                                                    title="Edit"
                                                >
                                                    <FaEdit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className="text-red-500 hover:text-red-700 transform hover:scale-110 transition"
                                                    title="Delete"
                                                >
                                                    <FaTrash size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredProducts.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="py-6 text-center text-gray-500">
                                            {searchTerm ? "No products found matching your search." : "No products found. Add one to get started!"}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
