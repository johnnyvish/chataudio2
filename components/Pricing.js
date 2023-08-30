"use client";

import React, { useEffect, useState } from "react";

export default function Pricing() {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-8 bg-white mt-8">
      <div className="flex flex-col items-center w-full max-w-[70rem]">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-10 text-center">
          Our Plans
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 bg-gradient-to-b from-sky-300 via-blue-500 to-purple-500 p-8 md:p-14 rounded-[3rem] justify-center items-center">
          {/* Free Plan */}
          <div className="h-[500px] w-[300px] bg-white rounded-[2rem] flex flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-semibold mt-8">Free</h1>
              <p className="self-center text-4xl">-</p>
              <ul className="mt-12 text-xl space-y-4 flex flex-col justify-center items-center">
                <li>10 Generations</li>
                <li>Basic Support</li>
                <li>1 GB Storage</li>
              </ul>
            </div>
            <a
              href="/sign-up"
              className="text-xl font-semibold bg-gray-800 text-white hover:bg-gray-800 px-8 py-3 rounded-full mb-8 transition-transform ease-in-out duration-300 hover:scale-105"
            >
              Sign Up
            </a>
          </div>

          {/* Basic Plan */}
          <div className="relative h-[500px] w-[300px] bg-white rounded-[2rem] flex flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-semibold mt-8">Early Access</h1>
              <p className="self-center text-3xl mt-4">$4.99/mo</p>
              <ul className="mt-12 text-xl space-y-4 flex flex-col justify-center items-center">
                <li>1000 Generations</li>
                <li>24/7 Support</li>
                <li>10 GB Storage</li>
              </ul>
            </div>
            <button className="text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold bg-gray-800 text-white hover:bg-gray-800 px-8 py-3 rounded-full mb-8 transition-transform ease-in-out duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="h-[500px] w-[300px] bg-white rounded-[2rem] flex flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-semibold mt-8">Enterprise</h1>
              <p className="self-center text-4xl">-</p>
              <ul className="mt-14 text-xl space-y-4 flex flex-col justify-center items-center">
                <li>Unlimited Generations</li>
                <li>24/7 Support</li>
                <li>Unlimited Storage</li>
              </ul>
            </div>
            <button className="text-xl font-semibold bg-gray-800 text-white hover:bg-gray-800 px-8 py-3 rounded-full mb-8 transition-transform ease-in-out duration-300 hover:scale-105">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
