"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// ==========================================
// Types & Interfaces
// ==========================================

// Defines the structure of a Product in the store
export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

// Defines the structure of a User object
export interface User {
    name: string;
    email: string;
    role: "admin" | "user"; // User role determines access to certain pages (e.g. Dashboard)
}

// Defines the shape of the global state provided by StoreContext
interface StoreContextType {
    user: User | null; // Currently logged-in user or null if guest
    products: Product[]; // List of all available products
    login: (email: string, role?: "admin" | "user") => void; // Function to authenticate a user
    logout: () => void; // Function to log the user out
    addProduct: (product: Product) => void; // Function to add a new product (admin)
    deleteProduct: (id: string) => void; // Function to remove a product (admin)
    isAuthenticated: boolean; // Helper boolean to check if user is logged in
}

// Create the context with an undefined default value.
// It will be populated by the StoreProvider below.
const StoreContext = createContext<StoreContextType | undefined>(undefined);

// ==========================================
// Provider Component
// ==========================================

export function StoreProvider({ children }: { children: React.ReactNode }) {
    // State to hold the current user session
    const [user, setUser] = useState<User | null>(null);
    
    // State to hold the global list of products
    const [products, setProducts] = useState<Product[]>([]);
    
    // Flag to ensure we don't overwrite localStorage before initial load completes
    const [isInitialized, setIsInitialized] = useState(false);

    // ------------------------------------------
    // Side Effects (Initialization & Persistence)
    // ------------------------------------------

    // Effect: Load initial data from LocalStorage when the application mounts
    useEffect(() => {
        const storedUser = localStorage.getItem("adil_store_user");
        const storedProducts = localStorage.getItem("adil_store_products");

        // Restore user session if it exists
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        // Restore products if they exist, otherwise load dummy data
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            // Initial dummy products for demonstration purposes
            setProducts([
                { id: "1", name: "Classic T-Shirt", price: 29.99, category: "Men", image: "/product1.png" },
                { id: "2", name: "Summer Dress", price: 49.99, category: "Women", image: "/product2.png" },
            ]);
        }
        
        // Mark as initialized so the saving effect can start working
        setIsInitialized(true);
    }, []);

    // Effect: Automatically save products to LocalStorage whenever the products array changes
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("adil_store_products", JSON.stringify(products));
        }
    }, [products, isInitialized]);

    // ------------------------------------------
    // Context Actions (Methods)
    // ------------------------------------------

    // Authenticates a user and saves session to localStorage
    const login = (email: string, role: "admin" | "user" = "admin") => {
        const newUser: User = { name: "Admin User", email, role };
        setUser(newUser);
        localStorage.setItem("adil_store_user", JSON.stringify(newUser));
    };

    // Clears the user session from state and localStorage
    const logout = () => {
        setUser(null);
        localStorage.removeItem("adil_store_user");
    };

    // Appends a new product to the existing products list
    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
    };

    // Removes a product from the list by its unique ID
    const deleteProduct = (id: string) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    // Render the Context Provider, wrapping child components
    return (
        <StoreContext.Provider
            value={{
                user,
                products,
                login,
                logout,
                addProduct,
                deleteProduct,
                isAuthenticated: !!user, // evaluates to true if user is not null
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}

// ==========================================
// Custom Hook
// ==========================================

// useStore is a custom hook that makes it easier to consume the context
export function useStore() {
    const context = useContext(StoreContext);
    
    // Throw an error if a component tries to use this hook outside of a StoreProvider wrapper
    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
}
