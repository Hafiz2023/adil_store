/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Loader2, Lock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useStore } from "@/context/StoreContext";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { login } = useStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simple hardcoded check for demo purposes
      if (form.email && form.password) {
        login(form.email, "admin");
        toast({
          title: "✅ Login Successful",
          description: "Redirecting...",
        });
        router.push("/admin/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast({
        title: "❌ Login Failed",
        description: "Please enter any email and password.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
              <Mail size={18} /> Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          {/* Password Field */}
          <div>
            <Label htmlFor="password" className="flex items-center gap-2 text-gray-700">
              <Lock size={18} /> Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-5 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/RegisterPage"
            className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
          >
            Create one
          </a>
        </p>
      </motion.div>
    </div>
  );
}
