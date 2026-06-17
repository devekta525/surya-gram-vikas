"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { GraduationCap, Sprout, Milestone, Landmark, Fingerprint, Sparkles } from "lucide-react";
import React, { useRef } from "react";

interface PillarItem {
  id: string;
  title: string;
  subTitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  glowColor: string;
}

const pillarsData: PillarItem[] = [
  {
    id: "education",
    title: "शिक्षा क्रांति",
    subTitle: "Education Revolution",
    desc: "स्मार्ट क्लासेज, हाई-स्पीड इंटरनेट, और एआई कोडिंग टूल्स से सुसज्जित स्कूल जो छात्रों को वैश्विक स्तर पर प्रतिस्पर्धी बनाते हैं।",
    icon: GraduationCap,
    color: "from-amber-500 to-orange-600",
    glowColor: "rgba(249, 115, 22, 0.15)",
  },
  {
    id: "agriculture",
    title: "स्मार्ट कृषि",
    subTitle: "Smart Agriculture",
    desc: "मृदा सेंसर, स्वचालित ड्रिप सिंचाई, ड्रोन सर्वेक्षण, और सीधे बाजार तक पहुंच सुनिश्चित करने वाला डिजिटल मंडी नेटवर्क।",
    icon: Sprout,
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "infrastructure",
    title: "हरित अवसंरचना",
    subTitle: "Green Infrastructure",
    desc: "24 घंटे निर्बाध सौर ऊर्जा, कंक्रीट-डामर सड़कें, स्मार्ट स्ट्रीटलाइट ग्रिड, और शत-प्रतिशत नल-जल आपूर्ति कनेक्टिविटी।",
    icon: Milestone,
    color: "from-blue-500 to-cyan-600",
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    id: "panchayat",
    title: "डिजिटल पंचायत",
    subTitle: "Paperless Governance",
    desc: "त्वरित ब्लॉकचेन-आधारित प्रमाण पत्र, ई-ग्राम सभा, लाइव बजट ऑडिटिंग, और 100% पारदर्शी ग्राम पंचायत प्रशासन।",
    icon: Landmark,
    color: "from-indigo-500 to-violet-600",
    glowColor: "rgba(99, 102, 241, 0.15)",
  },
  {
    id: "digital-id",
    title: "डिजिटल पहचान",
    subTitle: "Unified Citizen ID",
    desc: "नागरिकों के लिए क्यूआर कोड-आधारित डिजिटल पहचान जो जन कल्याणकारी योजनाओं, स्वास्थ्य रिकॉर्ड और बैंक खातों को एकीकृत करती है।",
    icon: Fingerprint,
    color: "from-rose-500 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.15)",
  },
  {
    id: "women-empowerment",
    title: "महिला सशक्तिकरण",
    subTitle: "Women Leadership",
    desc: "स्वयं सहायता समूहों के उत्पादों के लिए वैश्विक ई-कॉमर्स प्लेटफॉर्म, कोडिंग और उद्यमिता कौशल प्रशिक्षण कार्यक्रम।",
    icon: Sparkles,
    color: "from-purple-500 to-fuchsia-600",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
];

// Interactive 3D Card component
function PillarCard({ item }: { item: PillarItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map motion values to card rotations
  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates from center of card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = item.icon;

  return (
    <div className="perspective-[1000px] w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative h-full w-full rounded-2xl glass p-8 border border-border/40 transition-all duration-300 cursor-pointer overflow-hidden group hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
      >
        {/* Glow Element */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.glowColor}, transparent 80%)`,
          }}
        />

        {/* Dynamic color border flash */}
        <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.color}`} />

        {/* Icon & Title */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              <Icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground font-hindi tracking-wide mb-1 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              {item.subTitle}
            </p>
            <p className="text-sm text-muted-foreground font-hindi leading-relaxed">
              {item.desc}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
            <span>विवरण देखें</span>
            <span>→</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative border-b border-border/20">
      
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-secondary font-bold mb-2">विकास के मुख्य स्तंभ</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-secondary font-title">
            स्मार्ट ग्रामीण विकास मॉडल
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            इन छह प्रमुख स्तंभों पर आधारित विकास प्रणाली सूर्यपुरा को आत्मनिर्भर, ऊर्जा-सक्षम और पूर्णतः डिजिटल ग्राम में परिवर्तित कर रही है।
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillarsData.map((item) => (
            <PillarCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
