"use client";

import { useEffect } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";
import GameResult1 from "@/public/images/gameresults-1.webp";
import GameResult2 from "@/public/images/gameresults-2.webp";
import GameResult3 from "@/public/images/gameresults-3.webp";
import GameResult4 from "@/public/images/gameresults-4.webp";
import GameResult5 from "@/public/images/gameresults-5.webp";

// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Navigation]);

export default function GameplayResults() {
  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Gameplay Results
              </span>
            </h2>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image
                  className="mb-3 w-full h-full object-cover"
                  src={GameResult1}
                  alt="Gameplay Result 01"
                />
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image
                  className="mb-3 w-full h-full object-cover"
                  src={GameResult2}
                  alt="Gameplay Result 02"
                />
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image
                  className="mb-3 w-full h-full object-cover"
                  src={GameResult3}
                  alt="Gameplay Result 03"
                />
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image
                  className="mb-3 w-full h-full object-cover"
                  src={GameResult4}
                  alt="Gameplay Result 04"
                />
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image
                  className="mb-3 w-full h-full object-cover"
                  src={GameResult5}
                  alt="Gameplay Result 05"
                />
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
