"use client";

import React, { useEffect, useState } from "react";
import Waveform from "@/components/Waveform";

const CommunityPost = ({ prompt, username, url, image }) => {
  return (
    <div className="bg-white rounded-[2rem] p-4 mb-4 w-full shadow-lg transition-transform ease-in-out duration-300 md:hover:-translate-y-2 md:hover:shadow-xl">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full cursor-pointer"
          src={image}
          alt="User Profile"
        />

        <div className="ml-4">
          <h3 className="text-md font-semibold">{prompt}</h3>
        </div>
      </div>
      <div className="mt-4 text-xl">
        <Waveform prompt="hello" audioUrl={url} width={5} height={50} />
      </div>
    </div>
  );
};

const CommunityPostSkeleton = () => {
  return (
    <div className="bg-gray-200 rounded-[2rem] p-4 mb-4 w-full shadow-lg">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        <div className="ml-4">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default function CommunityFeed() {
  const [generations, setGenerations] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    fetch("/api/community")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setGenerations(data.data);
          updateVisiblePosts(data.data);
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const updateVisiblePosts = (posts) => {
    const isMobile = window.innerWidth <= 1024;
    setVisiblePosts(isMobile ? posts.slice(0, 3) : posts);
  };

  useEffect(() => {
    window.addEventListener("resize", () => updateVisiblePosts(generations));
    return () =>
      window.removeEventListener("resize", () =>
        updateVisiblePosts(generations)
      );
  }, [generations]);

  const loading = generations.length === 0;

  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-4 py-8 bg-white mt-8">
      <div className="flex flex-col items-center w-full max-w-[70rem]">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-10 text-center">
          Community Generations
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full bg-gradient-to-b from-sky-300 via-blue-500 to-purple-500 p-8 rounded-[3rem]">
          {loading
            ? // Show 3 skeleton components while loading
              Array.from({ length: 3 }).map((_, index) => (
                <CommunityPostSkeleton key={index} />
              ))
            : visiblePosts.map((post, index) => (
                <CommunityPost
                  key={index}
                  prompt={post.prompt}
                  username={post.userId}
                  url={post.url}
                  image={post.profileImage}
                />
              ))}
        </div>
        <button className="text-xl font-semibold bg-gray-800 text-white hover:bg-gray-800 px-8 py-3 rounded-full mt-8 transition-transform ease-in-out duration-300 hover:scale-105">
          See More
        </button>
      </div>
    </section>
  );
}
