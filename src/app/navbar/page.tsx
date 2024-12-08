"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white text-black fixed top-4 sm:top-14 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:py-3 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-sm sm:text-2xl text-green-600 font-bold ">
                  ONLINE ADOL STORE
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close.png"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <Image
                      src="/menu.png"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-xl  py-2 md:px-6 text-center hover:bg-green-600 md:hover:text-black md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center hover:bg-green-600 md:hover:text-black md:hover:bg-transparent">
                  <Link href="/teacher" onClick={() => setNavbar(!navbar)}>
                    Teachers
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center hover:bg-green-600 md:hover:text-black md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center hover:bg-green-600 md:hover:text-black md:hover:bg-transparent">
                  <Link href="/contactUs" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center hover:bg-green-600 md:hover:text-black md:hover:bg-transparent">
                  <Link
                    href="/servicePackages"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Fee
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center hover:bg-green-600 md:hover:text-black md:hover:bg-transparent">
                  <Link
                    href="/quranDownload"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Quran Pak
                  </Link>
                </li>
                <li className="mt-4 md:mt-0 md:ml-4">
                  <Button className="text-black rounded-xl bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-5 py-2.5 text-center">
                    <Link href="/courseRegistrationForm">Free Trial</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
