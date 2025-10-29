/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Server error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/category.png"
            alt="App Logo"
            width={80}
            height={80}
            className="rounded-full shadow-md"
          />
          <h2 className="text-3xl font-bold mt-3 text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Join us and start your journey today!
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {message && (
            <p
              className={`mt-3 text-center font-semibold ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200">
            <FaGoogle size={18} /> Continue with Google
          </button>

          <button className="flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition duration-200">
            <FaFacebookF size={18} /> Continue with Facebook
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/LoginPage"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
