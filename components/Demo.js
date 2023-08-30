"use client";

import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function CoverDemo() {
  const [isExploding, setIsExploding] = useState(false);

  const turnOnConfetti = () => {
    setIsExploding(true);
  };

  const turnOffConfetti = () => {
    setIsExploding(false);
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-gray-800 text-center mb-8 w-4/5 z-[100] leading-[1.2] md:leading-[1.5]">
        Create{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500">
          song covers
        </span>{" "}
        using A.I
      </h1>

      <>
        {isExploding && (
          <ConfettiExplosion
            duration={6000}
            height={"300vh"}
            width={2000}
            particleSize={12}
            force={0.4}
            onComplete={turnOffConfetti}
          />
        )}
      </>

      <div className="bg-white w-full sm:w-4/5 md:w-2/3 flex flex-col md:flex-row md:space-x-4">
        <input
          type="text"
          placeholder="Paste a youtube or spotify link..."
          className="flex-grow py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-[2rem] text-black mb-4 md:mb-0 border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={turnOnConfetti}
          className="text-lg md:text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-gray-700 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full w-[120px] md:w-[160px] self-center transition-transform ease-in-out duration-300 md:hover:scale-105"
        >
          Generate
        </button>
      </div>
    </section>
  );
}

export default function Demo() {
  return <CoverDemo />;
}
