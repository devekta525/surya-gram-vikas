"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import CountUp from "@/components/CountUp";
import { ArrowRight, Activity, Cpu, Sparkles, UserCheck, ShieldCheck, Milestone } from "lucide-react";

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  const backgroundImages = [
    "/smart_village_sunrise.png",
    "/smart_agriculture_drones.png",
    "/smart_panchayat_twilight.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const floatingWidgets = [
    { label: "Smart Agriculture", icon: Cpu, color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20" },
    { label: "Digital Schools", icon: Sparkles, color: "text-amber-400 bg-amber-950/40 border-amber-500/20" },
    { label: "WiFi Connectivity", icon: Activity, color: "text-cyan-400 bg-cyan-950/40 border-cyan-500/20" },
    { label: "Solar Energy", icon: ShieldCheck, color: "text-orange-400 bg-orange-950/40 border-orange-500/20" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-border/20">
      {/* Animated Slideshow Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {backgroundImages.map((src, idx) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === bgIndex ? 0.22 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Soft light/dark mask to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/15 via-background/85 to-background" />
        <div className="absolute inset-0 tech-grid opacity-40" />
      </div>
      
      {/* Ambient Neon Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-gradient-to-tr from-amber-600/10 to-orange-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-gradient-to-br from-emerald-600/10 to-cyan-500/10 blur-[120px] pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Headlines and CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border/40 text-xs sm:text-sm font-medium tracking-wide text-primary w-fit mb-6 shadow-sm hover:border-primary/30 transition-colors"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            🌞 सूर्यपुरा ग्राम विकास पोर्टल • &#34;परंपरा से प्रगति की ओर&#34;
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-relaxed md:leading-[1.25] pb-2 mb-6 font-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary"
          >
            सूर्यपुरा: भारत के <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">स्मार्ट गांव का भविष्य</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground font-hindi leading-relaxed max-w-2xl mb-8"
          >
            शिक्षा, कृषि, डिजिटल पहचान और पारदर्शी प्रशासन के माध्यम से ग्रामीण विकास का नया मॉडल। हम पारंपरिक विरासत को भविष्य की तकनीक से जोड़ रहे हैं।
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#journey"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-600 text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Village Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="#dashboard"
              className="flex items-center justify-center gap-2 px-8 py-4 glass text-foreground font-semibold rounded-xl hover:bg-card/90 transition-all duration-300 border border-border/60"
            >
              View Live Dashboard
            </a>
          </motion.div>

          {/* Floating elements showcasing village parameters (Desktop only) */}
          <motion.div
            variants={itemVariants}
            className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {floatingWidgets.map((w, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-default ${w.color}`}
              >
                <w.icon className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold">{w.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Hero Character (अरुण प्रताप सिंह) & Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Avatar Container & Glowing Ring */}
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden glass p-6 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
            
            {/* Image Placeholder with rich SVG illustration representing futuristic leader */}
            <div className="relative w-full h-64 rounded-xl bg-gradient-to-br from-orange-500/20 via-slate-900 to-emerald-500/20 flex flex-col justify-between p-4 overflow-hidden border border-border/30">
              
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-48 h-48 border border-dashed border-primary/20 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="w-32 h-32 border border-dashed border-emerald-500/20 rounded-full absolute animate-[spin_20s_linear_infinite_reverse]" />
              </div>

              {/* Top Banner tags */}
              <div className="flex justify-between items-center z-10 w-full">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                  Exclusive Profile
                </span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Duty
                </span>
              </div>

              {/* Vector representation representing Arun Pratap Singh */}
              <div className="relative z-10 self-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-2 border-primary bg-slate-950 flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary" fill="currentColor">
                    <path d="M50 15a15 15 0 100 30 15 15 0 000-30zM25 75c0-13.8 11.2-25 25-25s25 11.2 25 25v5H25v-5z" />
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-bold text-white tracking-wide">अरुण प्रताप सिंह</h3>
                  <p className="text-xs text-primary font-semibold tracking-wider uppercase">ग्राम विकास दूत</p>
                </div>
              </div>

              {/* Bottom Card Credentials */}
              <div className="z-10 bg-black/60 backdrop-blur-sm border border-white/5 rounded-lg p-2.5 flex justify-between items-center text-[10px]">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Milestone className="w-3.5 h-3.5 text-secondary" />
                  <span>Roads: 98%</span>
                </div>
                <div className="w-px h-3.5 bg-border/40" />
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <UserCheck className="w-3.5 h-3.5 text-accent" />
                  <span>ID Verify: 100%</span>
                </div>
              </div>
            </div>

            {/* Profile Info & Bullet achievements */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">मिशन वक्तव्य</h4>
                <p className="text-xs text-foreground/80 leading-relaxed font-hindi">
                  &#34;हमारा लक्ष्य सूर्यपुरा को सिर्फ एक डिजिटल ढांचा नहीं, बल्कि खुशहाली, पर्यावरण संरक्षण और आर्थिक रूप से सशक्त स्मार्ट समुदाय बनाना है।&#34;
                </p>
              </div>

              <div className="h-px bg-border/40" />

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-lg bg-card/40 border border-border/20 text-center hover:border-emerald-500/20 transition-all">
                  <p className="text-[10px] text-muted-foreground font-semibold">खेती उन्नति</p>
                  <p className="text-xs font-bold text-emerald-400 mt-1">₹4.2 Cr+ Annual Yield</p>
                </div>
                <div className="p-2.5 rounded-lg bg-card/40 border border-border/20 text-center hover:border-primary/20 transition-all">
                  <p className="text-[10px] text-muted-foreground font-semibold">सोलर स्वावलंबन</p>
                  <p className="text-xs font-bold text-primary mt-1">2.4 Megawatt Capacity</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats Section with CountUp counters */}
      <div className="relative max-w-7xl mx-auto w-full mt-20 z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 rounded-2xl glass border border-border/50 shadow-xl bg-card/25 backdrop-blur-lg">
          
          <div className="text-center p-3 border-r border-border/20 last:border-0 md:border-r">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary flex items-center justify-center">
              <CountUp end={12500} suffix="+" />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-wide">
              Citizens (नागरिक)
            </p>
          </div>

          <div className="text-center p-3 border-r border-border/20 last:border-0 md:border-r">
            <p className="text-3xl sm:text-4xl font-extrabold text-secondary flex items-center justify-center">
              <CountUp end={2800} suffix="+" />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-wide">
              Farmers (किसान)
            </p>
          </div>

          <div className="text-center p-3 border-r border-border/20 last:border-0 md:border-r">
            <p className="text-3xl sm:text-4xl font-extrabold text-accent flex items-center justify-center">
              <CountUp end={12} />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-wide">
              Smart Schools (स्कूल)
            </p>
          </div>

          <div className="text-center p-3 border-r border-border/20 last:border-0 md:border-r">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-400 flex items-center justify-center">
              <CountUp end={98} suffix="%" />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-wide">
              Road Connectivity
            </p>
          </div>

          <div className="text-center p-3 col-span-2 md:col-span-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 flex items-center justify-center">
              <CountUp end={100} suffix="%" />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-wide">
              Digital Identity
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
