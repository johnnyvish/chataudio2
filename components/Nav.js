"use client";

import { useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import Image from "next/image";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();

  const toggleMobileMenu = () => {
    console.log("Toggling mobile menu");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-white p-5 rounded-[2rem] shadow-lg z-[1000]">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <a className="flex items-center space-x-4" href="/">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="ChatAudio Logo"
            />
            <h1 className="text-2xl font-bold">ChatAudio</h1>
          </a>
          <div className="hidden md:flex space-x-6 items-center font-semibold">
            {!isSignedIn ? (
              <>
                <a
                  href="/sign-in"
                  className="text-xl text-gray-800 hover:text-gray-800"
                >
                  Login
                </a>
                <a
                  href="/sign-up"
                  className="text-xl bg-gray-800 text-white hover:bg-gray-800 px-8 py-3 rounded-full"
                >
                  Sign Up
                </a>
              </>
            ) : (
              <img
                onClick={toggleMobileMenu}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={user?.imageUrl}
                alt="User Profile"
              />
            )}
          </div>
          <div className="md:hidden">
            {isSignedIn ? (
              <img
                onClick={toggleMobileMenu}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={user?.imageUrl}
                alt="User Profile"
              />
            ) : (
              <button
                onClick={toggleMobileMenu}
                className="text-2xl text-gray-600 hover:text-gray-800"
              >
                ☰
              </button>
            )}
          </div>
        </div>

        <div
          className={`flex flex-col justify-center items-center space-y-3 font-semibold overflow-hidden transition-all duration-300 ease-in-out 
            ${isMobileMenuOpen ? "opacity-100 h-[100px]" : "opacity-0 h-0"}`}
        >
          {!isSignedIn ? (
            <>
              <a
                href="/sign-in"
                className="text-xl text-gray-800 hover:text-gray-800"
              >
                Login
              </a>
              <a
                href="/sign-up"
                className="text-lg bg-gray-800 text-white hover:bg-gray-800 px-8 py-3 rounded-full"
              >
                Sign Up
              </a>
            </>
          ) : (
            <>
              <button
                onClick={() => signOut()}
                className="text-lg bg-gray-800 text-white hover:bg-gray-800 px-8 py-3 rounded-full"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
