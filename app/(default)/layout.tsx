"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Header from "@/components/ui/header";
import Illustration from "@/public/images/hero-icon.png";
import Footer from "@/components/ui/footer";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header />

      <main className="grow">
        {/* Illustration */}
        <div
          className="hidden md:block absolute pointer-events-none -z-10 left-1/2 -translate-x-1/2 top-[200px]"
          aria-hidden="true"
        >
          <Image
            src={Illustration}
            className="max-w-[200px] filter blur-[5px]"
            priority
            alt="Hero Illustration"
          />
        </div>

        {children}
      </main>

      <Footer />
    </>
  );
}
