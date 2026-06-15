"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slider Data
const SLIDES = [
  {
    title: "Men's Collection",
    banner: "/MainPics/Man.png",
  },
  {
    title: "Women's Collection",
    banner: "/WomanPic/Women.png",
  },

  {
    title: "Kids' Collection",
    banner: "/Kids.jpg",
  },
];

/**
 * HomeImage Component
 * Renders an auto-playing image slider for the main homepage banner.
 * Supports manual navigation, touch swiping, and pauses on hover.
 */
const HomeImage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    if (timeoutRef.current) clearInterval(timeoutRef.current);

    timeoutRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isAutoPlaying]);

  // Restart autoplay after manual interaction
  useEffect(() => {
    if (!isAutoPlaying) {
      const restart = setTimeout(() => setIsAutoPlaying(true), 5000);
      return () => clearTimeout(restart);
    }
  }, [isAutoPlaying]);

  // Mouse handlers
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation
  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  return (
    <div
      className="relative overflow-hidden select-none w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {SLIDES.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <Image
              src={slide.banner}
              alt={slide.title}
              width={2000}
              height={800}
              className="w-full h-[60vh] md:h-[80vh] object-cover"
              priority={index === 0}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+pPwAEdQJhO3e4OQAAAABJRU5ErkJggg=="
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = "/placeholder.jpg";
              }}
            />
            {/* Overlay & Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <h2 className="absolute bottom-10 left-8 text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">
              {slide.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all duration-200 z-10 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-gray-800" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all duration-200 z-10 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-white w-10 h-3 shadow-md"
                : "bg-white/60 w-3 h-3 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImage;
