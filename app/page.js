"use client";

import Demo from "@/components/Demo";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import CommunityFeed from "@/components/CommunityFeed";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col">
        <Nav />
        <Demo />
        {/* <Products /> */}
        <CommunityFeed />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
