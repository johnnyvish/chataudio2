"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaDownload, FaPlay, FaPause, FaHeart } from "react-icons/fa";

export default function Waveform({ prompt, audioUrl, width, height }) {
  const [heart, setHeart] = useState(false);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const waveformRef = useRef(null);

  useEffect(() => {
    setWavesurfer(
      WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ddd",
        progressColor: "#3b83f6",
        cursorColor: "#3b83f6",
        barWidth: width,
        barRadius: 2,
        responsive: true,
        height: height,
        normalize: true,
        partialRender: true,
      })
    );
  }, []);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.on("finish", function () {
        setIsPlaying(false);
      });

      return () => {
        if (wavesurfer) {
          wavesurfer.un("finish");
        }
      };
    }
  }, [wavesurfer]);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.load(audioUrl);
    }
  }, [wavesurfer, audioUrl]);

  const handleHeart = () => {
    setHeart(!heart);
  };

  const togglePlayPause = () => {
    if (wavesurfer) {
      if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        setIsPlaying(false);
      } else {
        wavesurfer.play();
        setIsPlaying(true);
      }
    }
  };

  const handleDownloadClick = async () => {
    let fileUrl = audioUrl;

    if (fileUrl) {
      console.log(fileUrl);
      const mp3Response = await fetch(fileUrl);

      if (mp3Response.ok) {
        const blob = await mp3Response.blob();

        const objectUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = "audiofile.wav";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="flex w-full">
      <button
        className="self-center text-gray-500 hover:text-blue-500 focus:outline-none ml-4"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <FaPause size={22} color="#3b83f6" />
        ) : (
          <FaPlay size={22} color="#3b83f6" />
        )}
      </button>
      <div
        id="waveform"
        ref={waveformRef}
        className="flex-grow rounded ml-10"
      />
      <div className="flex space-x-4 items-center ml-6">
        <button
          className="text-gray-500 hover:text-green-500 focus:outline-none"
          onClick={handleHeart}
        >
          <FaHeart color={heart ? "red" : "gray"} size={18} />
        </button>

        <button
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
          onClick={handleDownloadClick}
        >
          <FaDownload size={18} />
        </button>
      </div>
    </div>
  );
}
