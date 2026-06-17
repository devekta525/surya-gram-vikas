"use client";

import { motion } from "framer-motion";
import { Laptop, Cpu, BookOpen, Award, CheckCircle, BrainCircuit } from "lucide-react";
import { useState } from "react";

export default function EducationRevolution() {
  const [activeTab, setActiveTab] = useState("ai-tutor");

  const educationStats = [
    { title: "क्लासरूम डिजिटलीकरण", percentage: 100, color: "bg-amber-500" },
    { title: "मुफ़्त कोडिंग साक्षरता", percentage: 85, color: "bg-emerald-500" },
    { title: "स्कॉलरशिप वितरण गति", percentage: 95, color: "bg-cyan-500" },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-b border-border/20">
      
      {/* Glow Rings */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-amber-500 font-bold mb-2">शिक्षा क्षेत्र में डिजिटल क्रांति</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-amber-500 font-title">
            भविष्योन्मुखी शिक्षा का केंद्र
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            सूर्यपुरा के सरकारी विद्यालय अब पारंपरिक नहीं रहे। यहां बच्चे स्मार्ट स्क्रीन्स, वर्चुअल लैब्स और एआई ट्यूटर्स के माध्यम से शिक्षा प्राप्त कर रहे हैं।
          </p>
        </div>

        {/* Interactive content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Education features detailed list */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex flex-col gap-4">
              
              {/* Item 1: Smart Boards */}
              <div className="glass p-5 rounded-2xl border border-border/40 hover:border-amber-500/30 transition-colors">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-hindi">स्मार्ट बोर्ड व 3D क्लासरूम</h3>
                    <p className="text-xs text-muted-foreground font-hindi mt-1">
                      कठिन विज्ञान अवधारणाओं को 3D विज़ुअलाइज़ेशन और डिजिटल एनिमेशन के माध्यम से समझाया जाता है।
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2: AI Personal Learning */}
              <div className="glass p-5 rounded-2xl border border-border/40 hover:border-emerald-500/30 transition-colors">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-hindi">एआई संचालित शिक्षण सहायक</h3>
                    <p className="text-xs text-muted-foreground font-hindi mt-1">
                      प्रत्येक छात्र की सीखने की क्षमता के अनुसार व्यक्तिगत होमवर्क, सुझाव और समाधान प्रदान करने वाली एआई प्रणाली।
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3: Scholarship Tracking */}
              <div className="glass p-5 rounded-2xl border border-border/40 hover:border-cyan-500/30 transition-colors">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-hindi">पारदर्शी स्कॉलरशिप ट्रैकिंग</h3>
                    <p className="text-xs text-muted-foreground font-hindi mt-1">
                      ब्लॉकचेन-आधारित सत्यापन प्रणाली, जहां छात्रवृत्ति सीधे बिना किसी बिचौलिए के छात्र के बैंक खाते में जमा होती है।
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4: Digital Library */}
              <div className="glass p-5 rounded-2xl border border-border/40 hover:border-orange-500/30 transition-colors">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-hindi">निःशुल्क डिजिटल लाइब्रेरी</h3>
                    <p className="text-xs text-muted-foreground font-hindi mt-1">
                      विश्वस्तरीय ई-बुक्स, कोडिंग कोर्सेज और प्रतियोगी परीक्षाओं की अध्ययन सामग्री छात्रों के लिए 24 घंटे उपलब्ध।
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: AI Tutor Interactive Screen Simulator */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Simulator Container */}
            <div className="relative w-full rounded-2xl bg-slate-950 border border-border/60 shadow-2xl p-6 overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Top Bar */}
              <div className="flex justify-between items-center pb-4 border-b border-border/40 mb-6">
                <div>
                  <h3 className="text-sm font-bold text-white font-hindi">एआई वर्चुअल क्लासरूम सिम्युलेटर</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">सक्रिय छात्र सत्र: देवेंद्र कुमार (कक्षा 10)</p>
                </div>
                <div className="flex gap-1.5 text-xs">
                  <button
                    onClick={() => setActiveTab("ai-tutor")}
                    className={`px-3 py-1.5 rounded-lg font-semibold border transition-all ${
                      activeTab === "ai-tutor"
                        ? "bg-amber-500 text-slate-950 border-transparent"
                        : "bg-slate-900 text-muted-foreground border-border/40"
                    }`}
                  >
                    AI Tutor
                  </button>
                  <button
                    onClick={() => setActiveTab("course-map")}
                    className={`px-3 py-1.5 rounded-lg font-semibold border transition-all ${
                      activeTab === "course-map"
                        ? "bg-amber-500 text-slate-950 border-transparent"
                        : "bg-slate-900 text-muted-foreground border-border/40"
                    }`}
                  >
                    Course Map
                  </button>
                </div>
              </div>

              {/* Tabs Content */}
              {activeTab === "ai-tutor" ? (
                <div className="space-y-4">
                  
                  {/* Prompt Box */}
                  <div className="p-3 bg-slate-900 rounded-xl border border-white/5 text-xs font-hindi">
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">Student Question</p>
                    <p className="text-white">&#34;सर, रोबोटिक्स सर्किट में मोटर चालक (L298N) को सीधे अरुडिनो से जोड़ने पर बिजली की समस्या क्यों आती है?&#34;</p>
                  </div>

                  {/* Reply Box */}
                  <div className="p-4 bg-amber-950/20 rounded-xl border border-amber-500/20 text-xs font-hindi relative">
                    <div className="absolute top-2 right-2">
                      <BrainCircuit className="w-4 h-4 text-amber-500 animate-pulse" />
                    </div>
                    <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-1">AI Guru AI Assistant</p>
                    <p className="text-gray-200 leading-relaxed">
                      &#34;नमस्ते देवेंद्र! बहुत बढ़िया सवाल। L298N मोटर ड्राइवर अधिक करंट खींचता है, जिसे आर्डुइनो का ऑन-बोर्ड 5V रेगुलेटर सीधे सहन नहीं कर सकता। ऐसा करने पर आर्डुइनो रीसेट हो सकता है या खराब हो सकता है। 
                      <br /><br />
                      <strong>सुझाव:</strong> हमेशा मोटर के लिए एक बाहरी पावर सप्लाई (जैसे 9V या 12V बैटरी) का उपयोग करें, और आर्डुइनो तथा मोटर ड्राइवर के GND पिन को आपस में अवश्य कनेक्ट करें।&#34;
                    </p>
                  </div>

                  {/* Level system badge */}
                  <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-xl border border-white/5 text-xs">
                    <span className="text-muted-foreground font-hindi">करियर लक्ष्य: रोबोटिक्स इंजीनियर</span>
                    <span className="text-amber-400 font-bold uppercase">स्तर (Level) 14 • 82% पूरा</span>
                  </div>

                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground font-hindi">व्यक्तिगत कोडिंग व तकनीकी शिक्षण मार्ग (Personalized Path):</p>
                  
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/20 flex justify-between items-center text-xs">
                      <span className="font-hindi text-white">1. बुनियादी इलेक्ट्रॉनिक्स व सर्किट डिजाइन</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        सफल
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/20 flex justify-between items-center text-xs">
                      <span className="font-hindi text-white">2. सी++/आर्डुइनो कोडिंग बेसिक्स</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        सफल
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 flex justify-between items-center text-xs">
                      <span className="font-hindi text-white font-medium">3. ऑटोनॉमस रोबोटिक्स प्रोजेक्ट्स</span>
                      <span className="text-amber-400 font-bold animate-pulse font-hindi">प्रगति पर</span>
                    </div>
                  </div>

                </div>
              )}

              {/* Progress bars showing school digitization progress */}
              <div className="mt-8 pt-6 border-t border-border/40 space-y-4">
                <p className="text-xs font-bold text-foreground uppercase tracking-wider font-hindi">विद्यालय प्रगति सूचकांक (Growth Indicators)</p>
                <div className="space-y-3">
                  {educationStats.map((stat) => (
                    <div key={stat.title}>
                      <div className="flex justify-between items-center text-xs text-muted-foreground mb-1 font-hindi">
                        <span>{stat.title}</span>
                        <span className="font-bold text-foreground">{stat.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.percentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full ${stat.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
