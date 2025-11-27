"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Types
export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

export interface User {
    name: string;
    email: string;
    role: "admin" | "user";
}

interface StoreContextType {
    user: User | null;
    products: Product[];
    login: (email: string, role?: "admin" | "user") => void;
    logout: () => void;
    addProduct: (product: Product) => void;
    deleteProduct: (id: string) => void;
    isAuthenticated: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load data from LocalStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("adil_store_user");
        const storedProducts = localStorage.getItem("adil_store_products");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            // Initial dummy products if none exist
            setProducts([
                { id: "1", name: "Classic T-Shirt", price: 29.99, category: "Men", image: "/product1.png" },
                { id: "2", name: "Summer Dress", price: 49.99, category: "Women", image: "/product2.png" },
            ]);
        }
        setIsInitialized(true);
    }, []);

    // Save products to LocalStorage whenever they change
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("adil_store_products", JSON.stringify(products));
        }
    }, [products, isInitialized]);

    const login = (email: string, role: "admin" | "user" = "admin") => {
        const newUser: User = { name: "Admin User", email, role };
        setUser(newUser);
        localStorage.setItem("adil_store_user", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("adil_store_user");
    };

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
    };

    const deleteProduct = (id: string) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <StoreContext.Provider
            value={{
                user,
                products,
                login,
                logout,
                addProduct,
                deleteProduct,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
}
