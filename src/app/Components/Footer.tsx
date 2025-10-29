/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubscribe = async () => {
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("http://127.0.0.1:8000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("✅ " + data.message);
        setEmail("");
      } else {
        setMsg("⚠️ " + data.detail);
      }
    } catch (err) {
      setMsg("❌ Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl font-bold tracking-wide">ADIL</div>
          </Link>
          <p>3252 Winding Way, Central Plaza, Willowbrook, CA 90210</p>
          <span className="font-semibold">adilamin374@gmail.com</span>
          <span className="font-semibold">+92 339 407 8880</span>
          <div className="flex gap-6">
            {["facebook", "instagram", "youtube", "pinterest", "x"].map((s) => (
              <Image key={s} src={`/${s}.png`} alt={s} width={20} height={20} />
            ))}
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          {/* MENS */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg underline">MENS</h1>
            <div className="flex flex-col gap-2">
              <Link href="/Mens_60_off">Mens 60% Off</Link>
              <Link href="/Mens_product">Mens Product</Link>
              <Link href="/Mens_selection">Mens Selection</Link>
              <Link href="/New_Arrivals_Men">New Arrivals</Link>
            </div>
          </div>

          {/* WOMEN */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg underline">WOMEN</h1>
            <div className="flex flex-col gap-2">
              <Link href="/Female_60_off">Female 60% Off</Link>
              <Link href="/Sale_women">Sale Women</Link>
              <Link href="/Arrivals_women">Arrivals Women</Link>
            </div>
          </div>

          {/* KIDS */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg underline">KIDS</h1>
            <div className="flex flex-col gap-2">
              <Link href="/Kids_acne">Kids Acne</Link>
              <Link href="/Kids_adidas">Kids Adidas</Link>
              <Link href="/Kids_base">Kids Base</Link>
              <Link href="/Kids_Products">Kids Products</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h1 className="font-semibold text-lg underline">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends and promotions!
          </p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="p-3 w-3/4 rounded-l-lg border focus:ring focus:ring-gray-300"
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="w-1/4 bg-black text-white rounded-r-lg hover:bg-gray-800 transition"
            >
              {loading ? "..." : "JOIN"}
            </button>
          </div>
          {msg && <p className="text-sm mt-2">{msg}</p>}

          <span className="font-semibold mt-4">Secure Payments</span>
          <div className="flex justify-between">
            {["discover", "skrill", "paypal", "mastercard", "visa"].map((p) => (
              <Image key={p} src={`/${p}.png`} alt={p} width={40} height={20} />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-16 text-gray-600">
        <div>© 2025 Adil Shop. All rights reserved.</div>
        <div className="flex gap-6">
          <span>Language: English (US)</span>
          <span>Currency: $ USD</span>
        </div>
      </div>

      <WhatsAppIcon />
    </div>
  );
}
