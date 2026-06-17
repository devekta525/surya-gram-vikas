import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import BeforeAfterTimeline from "@/components/sections/BeforeAfterTimeline";
import Pillars from "@/components/sections/Pillars";
import SmartAgriculture from "@/components/sections/SmartAgriculture";
import EducationRevolution from "@/components/sections/EducationRevolution";
import DigitalIdentity from "@/components/sections/DigitalIdentity";
import GrowthDashboard from "@/components/sections/GrowthDashboard";
import SuccessStories from "@/components/sections/SuccessStories";
import DevelopmentGallery from "@/components/sections/DevelopmentGallery";
import Roadmap from "@/components/sections/Roadmap";
import NewsAnnouncements from "@/components/sections/NewsAnnouncements";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";
import MobileNav from "@/components/mobile/MobileNav";
import SocialCreatives from "@/components/social/SocialCreatives";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Floating Desktop Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Cinematic Hero Section with counters and leader info */}
        <Hero />

        {/* Scroll Storytelling section comparing traditional vs smart features */}
        <BeforeAfterTimeline />

        {/* 3D Development Pillars mapping key objectives */}
        <Pillars />

        {/* Farmer analytics, soil status and e-mandi trackers */}
        <SmartAgriculture />

        {/* School upgrades, digital curriculum pathways, scholarship tracker */}
        <EducationRevolution />

        {/* Unified Identity card visualizer and QR verification */}
        <DigitalIdentity />

        {/* Realtime Recharts dashboard with 5 distinct analytical curves */}
        <GrowthDashboard />

        {/* Dynamic testimonial carousel sharing citizen stories */}
        <SuccessStories />

        {/* Grid gallery of developments alongside image-compare slider */}
        <DevelopmentGallery />

        {/* Neon vertical milestone timeline showing planning to 2030 */}
        <Roadmap />

        {/* News card grids showing village upgrades */}
        <NewsAnnouncements />

        {/* Pre-formatted high-impact social media creatives with copy controls */}
        <SocialCreatives />

        {/* Call To Action subscription wrapper */}
        <CallToAction />
      </main>

      {/* Multi-column government portal structured footer */}
      <Footer />

      {/* Mobile-only bottom drawer menu and sticky buttons */}
      <MobileNav />
    </div>
  );
}
