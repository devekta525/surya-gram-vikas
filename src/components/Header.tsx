"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 text-foreground hover:scale-105 transition-transform duration-300">
          <span className="text-xl">🌞</span>
          <span className="font-extrabold text-sm sm:text-base tracking-wider font-title">
            सूर्यपुरा <span className="text-primary">स्मार्ट पोर्टल</span>
          </span>
        </a>

        {/* Desktop Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold font-hindi text-muted-foreground">
          <a href="#journey" className="hover:text-primary hover:-translate-y-0.5 transition-all">विकास यात्रा</a>
          <a href="#pillars" className="hover:text-primary hover:-translate-y-0.5 transition-all">मुख्य स्तंभ</a>
          <a href="#agriculture" className="hover:text-primary hover:-translate-y-0.5 transition-all">स्मार्ट खेती</a>
          <a href="#education" className="hover:text-primary hover:-translate-y-0.5 transition-all">शिक्षा क्रांति</a>
          <a href="#identity" className="hover:text-primary hover:-translate-y-0.5 transition-all">डिजिटल आईडी</a>
          <a href="#dashboard" className="hover:text-primary hover:-translate-y-0.5 transition-all">डैशबोर्ड</a>
          <a href="#creatives" className="hover:text-primary hover:-translate-y-0.5 transition-all">सोशल कैम्पेन</a>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <a
            href="#journey"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-orange-600 text-white font-semibold text-xs hover:shadow-[0_0_15px_rgba(249,115,22,0.35)] transition-all active:scale-95"
          >
            Explore
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
}
