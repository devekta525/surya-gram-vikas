"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area,
  BarChart, Bar,
  LineChart, Line,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { TrendingUp, Users, Sprout, Milestone, GraduationCap, HeartHandshake } from "lucide-react";

// Mock Data for the 5 charts
const populationData = [
  { year: "2020", pop: 9800, retention: 76 },
  { year: "2021", pop: 10400, retention: 81 },
  { year: "2022", pop: 11000, retention: 85 },
  { year: "2023", pop: 11500, retention: 89 },
  { year: "2024", pop: 12100, retention: 94 },
  { year: "2025", pop: 12500, retention: 98 },
];

const farmerData = [
  { year: "2021", traditional: 2200, smart: 100 },
  { year: "2022", traditional: 1800, smart: 600 },
  { year: "2023", traditional: 1200, smart: 1400 },
  { year: "2024", traditional: 600, smart: 2100 },
  { year: "2025", traditional: 150, smart: 2800 },
];

const roadData = [
  { year: "2020", percentage: 45 },
  { year: "2021", percentage: 55 },
  { year: "2022", percentage: 70 },
  { year: "2023", percentage: 85 },
  { year: "2024", percentage: 93 },
  { year: "2025", percentage: 98 },
];

const educationData = [
  { year: "2020", literacy: 68, digitalLabs: 1 },
  { year: "2021", literacy: 72, digitalLabs: 3 },
  { year: "2022", literacy: 77, digitalLabs: 6 },
  { year: "2023", literacy: 83, digitalLabs: 8 },
  { year: "2024", literacy: 89, digitalLabs: 10 },
  { year: "2025", literacy: 94, digitalLabs: 12 },
];

const womenData = [
  { subject: "पंचायत नेतृत्व", A: 85, fullMark: 100 },
  { subject: "डिजिटल साक्षरता", A: 78, fullMark: 100 },
  { subject: "स्वयं सहायता आय", A: 92, fullMark: 100 },
  { subject: "स्वतंत्र उद्यम", A: 65, fullMark: 100 },
  { subject: "उच्चतर शिक्षा", A: 74, fullMark: 100 },
];

export default function GrowthDashboard() {
  const [activeTab, setActiveTab] = useState<"pop" | "farmer" | "road" | "edu" | "women">("pop");

  const tabs = [
    { id: "pop", label: "जनसंख्या वृद्धि", icon: Users, desc: "शहरों की ओर पलायन में भारी कमी और स्थानीय निवास प्रतिधारण दर।" },
    { id: "farmer", label: "कृषक नामांकन", icon: Sprout, desc: "पारंपरिक कृषि से वैज्ञानिक व स्मार्ट तकनीक अपनाने वाले किसानों का आँकड़ा।" },
    { id: "road", label: "सड़क संपर्क", icon: Milestone, desc: "सोलर पावर्ड पक्की सड़कों का समग्र विकास और कनेक्टिविटी स्कोर।" },
    { id: "edu", label: "शिक्षा व साक्षरता", icon: GraduationCap, desc: "साक्षरता दर में वृद्धि और स्मार्ट स्कूल लैब्स की स्थापना यात्रा।" },
    { id: "women", label: "महिला सहभागिता", icon: HeartHandshake, desc: "पंचायती राज, तकनीकी ज्ञान और आर्थिक क्षेत्रों में महिलाओं की सक्रियता।" },
  ];

  return (
    <section id="dashboard" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-b border-border/20">
      
      {/* Dynamic light bursts */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">लाइव प्रगति डैशबोर्ड</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-primary font-title">
            विकास गाथा आंकड़ों की ज़ुबानी
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            सभी आँकड़े सीधे ग्राम पंचायत लेजर और संबंधित विभागों से सत्यापित हैं, जो पूर्ण पारदर्शिता को रेखांकित करते हैं।
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Sidebar Controls */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "pop" | "farmer" | "road" | "edu" | "women")}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 border-primary text-white shadow-[0_0_15px_rgba(249,115,22,0.15)] scale-[1.01]"
                      : "bg-card/30 border-border/40 text-muted-foreground hover:bg-card/75 hover:text-foreground"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-hindi">{tab.label}</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1 font-hindi">{tab.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Visualizing the Selected Chart */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl glass border border-border/50 p-6 sm:p-8">
            
            {/* Chart Info Header */}
            <div className="mb-6 flex justify-between items-start gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded font-extrabold uppercase tracking-wide">
                  <TrendingUp className="w-3.5 h-3.5" /> Real-time Verified
                </span>
                <h3 className="text-lg font-bold text-white font-hindi mt-2">
                  {tabs.find(t => t.id === activeTab)?.label} - प्रगति ग्राफ़
                </h3>
              </div>
              <p className="text-xs text-muted-foreground font-hindi leading-relaxed max-w-sm hidden sm:block">
                {tabs.find(t => t.id === activeTab)?.desc}
              </p>
            </div>

            {/* Recharts Wrapper */}
            <div className="h-72 w-full text-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    {activeTab === "pop" ? (
                      <AreaChart data={populationData}>
                        <defs>
                          <linearGradient id="popGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                        <XAxis dataKey="year" stroke="#9ca3af" tickLine={false} />
                        <YAxis stroke="#9ca3af" tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#1f2937", borderRadius: 8 }} />
                        <Area type="monotone" dataKey="pop" stroke="#f97316" strokeWidth={2.5} fillOpacity={1} fill="url(#popGlow)" name="कुल नागरिक संख्या" />
                      </AreaChart>
                    ) : activeTab === "farmer" ? (
                      <BarChart data={farmerData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                        <XAxis dataKey="year" stroke="#9ca3af" tickLine={false} />
                        <YAxis stroke="#9ca3af" tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#1f2937", borderRadius: 8 }} />
                        <Bar dataKey="smart" fill="#10b981" radius={[4, 4, 0, 0]} name="स्मार्ट / वैज्ञानिक कृषक" />
                        <Bar dataKey="traditional" fill="#ef4444" radius={[4, 4, 0, 0]} name="पारंपरिक कृषक" />
                      </BarChart>
                    ) : activeTab === "road" ? (
                      <LineChart data={roadData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                        <XAxis dataKey="year" stroke="#9ca3af" tickLine={false} />
                        <YAxis stroke="#9ca3af" tickLine={false} domain={[0, 100]} />
                        <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#1f2937", borderRadius: 8 }} />
                        <Line type="monotone" dataKey="percentage" stroke="#06b6d4" strokeWidth={3} activeDot={{ r: 8 }} name="सड़क डामरीकरण %" />
                      </LineChart>
                    ) : activeTab === "edu" ? (
                      <AreaChart data={educationData}>
                        <defs>
                          <linearGradient id="eduGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                        <XAxis dataKey="year" stroke="#9ca3af" tickLine={false} />
                        <YAxis stroke="#9ca3af" tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#1f2937", borderRadius: 8 }} />
                        <Area type="monotone" dataKey="literacy" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#eduGlow)" name="साक्षरता दर (%)" />
                      </AreaChart>
                    ) : (
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={womenData}>
                        <PolarGrid stroke="#1f2937" />
                        <PolarAngleAxis dataKey="subject" stroke="#9ca3af" tick={{ fill: "#9ca3af", fontSize: 10 }} />
                        <PolarRadiusAxis stroke="#1f2937" angle={30} domain={[0, 100]} />
                        <Radar name="सहभागिता स्कोर" dataKey="A" stroke="#a855f7" fill="#a855f7" fillOpacity={0.3} />
                        <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#1f2937", borderRadius: 8 }} />
                      </RadarChart>
                    )}
                  </ResponsiveContainer>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Legend / Info Footer inside dashboard container */}
            <div className="mt-6 pt-4 border-t border-border/40 flex justify-between items-center text-xs">
              <span className="text-muted-foreground font-hindi">अंतिम अद्यतन: आज 08:30 AM IST</span>
              <span className="text-primary font-bold font-hindi flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                डेटा सिंक संपन्न
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
