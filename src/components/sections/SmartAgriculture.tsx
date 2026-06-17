"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Sprout, CloudSun, Droplets, Landmark, Tablet, CheckCircle } from "lucide-react";
import { useState } from "react";

const moistureData = [
  { day: "सोम", moisture: 34, irrigation: 10 },
  { day: "मंगल", moisture: 38, irrigation: 0 },
  { day: "बुध", moisture: 42, irrigation: 0 },
  { day: "गुरु", moisture: 31, irrigation: 15 },
  { day: "शुक्र", moisture: 45, irrigation: 0 },
  { day: "शनि", moisture: 40, irrigation: 5 },
  { day: "रवि", moisture: 43, irrigation: 0 },
];

export default function SmartAgriculture() {
  const [selectedCrop, setSelectedCrop] = useState("गेहूं (Wheat)");

  const cropSuggestions = [
    { name: "गेहूं (Wheat)", confidence: "94%", soilType: "दोमट (Loamy)", growthTime: "120 दिन" },
    { name: "सरसों (Mustard)", confidence: "87%", soilType: "बलुई दोमट", growthTime: "110 दिन" }
  ];
  return (
    <section id="agriculture" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden border-b border-white/10 dark">      {/* Background Grids */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-2">स्मार्ट कृषि प्रणाली</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-title">
            स्मार्ट किसान, समृद्ध भविष्य
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            सेंसर-आधारित सिंचाई, मृदा परीक्षण डेटा और वास्तविक समय के बाजार मूल्यों से लैस सूर्यपुरा के प्रगतिशील कृषक।
          </p>
        </div>

        {/* Interactive Layout: iPad Mockup & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Farmers Tablet Dashboard Mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-slate-900 border-4 border-slate-800 shadow-2xl overflow-hidden neon-glow-secondary">
              
              {/* Tablet Top Notch and Camera */}
              <div className="bg-slate-800 h-6 flex justify-center items-center px-4">
                <div className="w-16 h-3 rounded-full bg-slate-950" />
              </div>

              {/* Tablet Application UI Screen */}
              <div className="p-4 sm:p-6 bg-slate-950 text-white select-none">
                
                {/* Header inside App */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Tablet className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm sm:text-base tracking-wider uppercase">किसान साथी v2.5</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    खेत ग्रिड #12: सक्रिय
                  </span>
                </div>

                {/* Dashboard Widgets Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  
                  {/* Weather widget */}
                  <div className="bg-slate-900/70 p-4 rounded-xl border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-xs text-slate-400 font-semibold">मौसम पूर्वानुमान</p>
                      <CloudSun className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">32°C</p>
                    <p className="text-[10px] text-emerald-300 font-semibold font-hindi mt-1">आज आंशिक बादल, सिंचाई की आवश्यकता कम है।</p>
                  </div>

                  {/* Water usage widget */}
                  <div className="bg-slate-900/70 p-4 rounded-xl border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-xs text-slate-400 font-semibold">जल उपयोग दक्षता</p>
                      <Droplets className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">40% बचत</p>
                    <p className="text-[10px] text-cyan-300 font-semibold font-hindi mt-1">ड्रिप स्वचालन द्वारा पानी की बर्बादी नियंत्रित।</p>
                  </div>

                </div>

                {/* Soil Moisture Chart Container */}
                <div className="bg-slate-900/70 p-4 rounded-xl border border-white/10 mb-6">
                  <p className="text-xs text-slate-400 font-semibold mb-3">मृदा नमी सूचकांक (Soil Moisture Trend)</p>
                  <div className="h-48 w-full text-xs">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={moistureData}>
                        <defs>
                          <linearGradient id="moisture" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                        <XAxis dataKey="day" stroke="#9ca3af" tickLine={false} />
                        <YAxis stroke="#9ca3af" tickLine={false} domain={[0, 60]} />
                        <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#1f2937", borderRadius: 8 }} />
                        <Area type="monotone" dataKey="moisture" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#moisture)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Real-time recommendations */}
                <div className="bg-slate-900/70 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-slate-400 font-semibold mb-3">ऑटो-सिंचाई वाल्व स्थिति</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <CheckCircle className="w-4 h-4" />
                      वाल्व #1 (उत्तर क्षेत्र): बंद
                    </span>
                    <span className="text-slate-400 font-hindi">नमी स्तर पर्याप्त: 43%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Crop suggestions & Market prices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Crop Predictor */}
            <div className="glass border border-border/40 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-foreground font-hindi">मृदा-फसल मिलान पूर्वानुमान</h3>
              </div>
              <p className="text-xs text-muted-foreground font-hindi mb-4">
                मृदा संरचना (NPK स्तर) और ऐतिहासिक डेटा के आधार पर सर्वश्रेष्ठ सफलता दर वाली फसलें:
              </p>
              
              <div className="space-y-3">
                {cropSuggestions.map((crop) => (
                  <button
                    key={crop.name}
                    onClick={() => setSelectedCrop(crop.name)}
                    className={`w-full flex justify-between items-center p-3 rounded-xl border text-left text-xs transition-all duration-300 cursor-pointer ${
                      selectedCrop === crop.name
                        ? "bg-emerald-500/10 dark:bg-emerald-950/30 border-emerald-500/40 text-foreground"
                        : "bg-background/40 border-border/40 text-muted-foreground hover:bg-muted/20"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-foreground font-hindi">{crop.name}</p>
                      <p className="text-[10px] text-muted-foreground font-hindi mt-0.5">
                        मिट्टी: {crop.soilType} | चक्र: {crop.growthTime}
                      </p>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/20">
                      {crop.confidence} मैच
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Market Price Index widget */}
            <div className="glass border border-border/40 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-foreground font-hindi">डिजिटल मंडी मूल्य सूचकांक</h3>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  Live
                </span>
              </div>
              
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-hindi text-foreground font-semibold">गेहूं (Wheat - A Grade)</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">₹2,450 / कुंतल</span>
                </div>
                <div className="h-px bg-border/40" />
                <div className="flex justify-between items-center text-xs">
                  <span className="font-hindi text-foreground font-semibold">बासमती धान (Rice - Premium)</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">₹6,800 / कुंतल</span>
                </div>
                <div className="h-px bg-border/40" />
                <div className="flex justify-between items-center text-xs">
                  <span className="font-hindi text-foreground font-semibold">सरसों (Mustard Seeds)</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">₹5,400 / कुंतल</span>
                </div>
                <div className="h-px bg-border/40" />
                <div className="flex justify-between items-center text-xs">
                  <span className="font-hindi text-foreground font-semibold">चना (Desi Gram)</span>
                  <span className="font-bold text-red-600 dark:text-red-400">₹4,850 / कुंतल</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
