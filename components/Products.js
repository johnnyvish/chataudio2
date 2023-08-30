"use client";

import React, { useEffect, useState } from "react";

export default function Products() {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-8 bg-white mt-8">
      <div className="flex flex-col items-center w-full max-w-[70rem]">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-10 text-center">
          Our Products
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 bg-gradient-to-b from-sky-300 via-blue-500 to-purple-500 p-8 md:p-14 rounded-[3rem] justify-center items-center">
          <div className="h-[400px] w-[300px] bg-white rounded-[2rem]"></div>
          <div className="h-[400px] w-[300px] bg-white rounded-[2rem]"></div>
          <div className="h-[400px] w-[300px] bg-white rounded-[2rem]"></div>
        </div>
      </div>
    </section>
  );
}
