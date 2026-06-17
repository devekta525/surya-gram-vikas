"use client";

import { CheckCircle2, Flame, Cpu, Globe, Rocket } from "lucide-react";
import { useState } from "react";

interface MilestoneItem {
  year: string;
  title: string;
  status: "done" | "active" | "planned";
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  details: string[];
}

const roadmapData: MilestoneItem[] = [
  {
    year: "2025",
    title: "100% सोलर ग्रिड व वाईफाई एकीकरण",
    status: "done",
    icon: CheckCircle2,
    desc: "गाँव के समस्त घरों में सौर विद्युत मीटर स्थापित और पूरे सार्वजनिक क्षेत्र में हाई-स्पीड इंटरनेट हॉटस्पॉट्स सक्रिय।",
    details: ["2.4 MW सोलर प्लांट पूरा चालू", "ग्रामीण वाईफाई ग्रिड संस्थापन", "हर परिवार की डिजिटल आईडी मैपिंग"],
  },
  {
    year: "2026",
    title: "कृषि डेटा ग्रिड व स्वचालित सिंचाई",
    status: "active",
    icon: Flame,
    desc: "कृषि भूमि पैच पर मृदा नमी सेंसर और मौसम स्टेशनों की लाइव एपीआई रिपोर्टिंग प्रणाली की पूर्ण स्थापना।",
    details: ["मृदा सेंसर नोड्स का 100% कवरेज", "ड्रोन आधारित उर्वरक वितरण परीक्षण", "ई-मंडी सीधा खरीद भुगतान चालू"],
  },
  {
    year: "2027",
    title: "एआई डिजिटल स्कूल व वोकेशनल लैब",
    status: "planned",
    icon: Cpu,
    desc: "स्कूलो में एआई गुरु शिक्षण सहायकों, कोडिंग रोबोटिक्स सेंटरों और व्यावसायिक प्रशिक्षण कार्यक्रमों की शुरुआत।",
    details: ["एआई-आधारित व्यक्तिगत पाठ्यचर्या", "रोबोटिक्स व 3D प्रिंटिंग प्रयोगशाला", "युवाओं हेतु व्यावसायिक तकनीकी प्रशिक्षण"],
  },
  {
    year: "2028",
    title: "हस्तशिल्प ग्लोबल ई-कॉमर्स व एक्सपोर्ट हब",
    status: "planned",
    icon: Globe,
    desc: "स्वयं सहायता समूहों (SHG) के उत्पादों के प्रसंस्करण, निर्यात मानकों की पैकेजिंग और वैश्विक डिलीवरी हब का निर्माण।",
    details: ["वैश्विक ई-कॉमर्स निर्यात नेटवर्क", "डिजिटल लॉजिस्टिक्स व वेयरहाउस हब", "300+ ग्रामीण महिलाओं को प्रत्यक्ष आय"],
  },
  {
    year: "2030",
    title: "शून्य कार्बन आत्मनिर्भर स्मार्ट मॉडल",
    status: "planned",
    icon: Rocket,
    desc: "पूर्णतया कार्बन-मुक्त, शून्य कचरा और जल-पुनर्चक्रण आधारित आत्मनिर्भर ग्रीन विलेज इकोसिस्टम की उपलब्धि।",
    details: ["100% शून्य कार्बन उत्सर्जन विलेज", "जल-पुनर्चक्रण संयंत्र (Zero Waste)", "भारत के सर्वोच्च पर्यावरण पुरस्कार की दावेदारी"],
  },
];

export default function Roadmap() {
  const [selectedYear, setSelectedYear] = useState<string>("2026");

  const activeMilestone = roadmapData.find((m) => m.year === selectedYear) || roadmapData[1];

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden border-b border-white/10 dark">
      {/* Tech Grid & Light */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">विकास मार्गचित्र</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-title">
            सूर्यपुरा रोडमैप 2030
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            एक सुनियोजित रूपरेखा जिसके तहत सूर्यपुरा को अगले कुछ वर्षों में संपूर्ण हरित, आत्मनिर्भर और तकनीक संपन्न ग्राम बनाया जा रहा है।
          </p>
        </div>

        {/* Roadmap Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Timeline Node Rail */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="relative border-l-2 border-border/40 pl-6 space-y-8 py-2 ml-4">
              
              {roadmapData.map((item) => {
                const isSelected = item.year === selectedYear;
                const isCompleted = item.status === "done";
                const isActive = item.status === "active";

                return (
                  <div
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className="relative cursor-pointer group"
                  >
                    {/* Glowing Node Dot on Rail */}
                    <div
                      className={`absolute -left-[33px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-primary border-primary scale-125 shadow-[0_0_10px_rgba(249,115,22,0.6)]"
                          : isCompleted
                          ? "bg-emerald-500 border-emerald-500"
                          : isActive
                          ? "bg-orange-500 border-orange-500 animate-pulse"
                          : "bg-slate-900 border-border/60 group-hover:border-primary"
                      }`}
                    >
                      {isCompleted && <div className="w-1.5 h-1.5 bg-slate-950 rounded-full" />}
                    </div>

                    {/* Timeline Node Content Card */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 ${
                      isSelected
                        ? "bg-primary/5 border-primary text-foreground"
                        : "bg-card/20 border-border/40 text-muted-foreground group-hover:bg-card/40 group-hover:text-foreground"
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-bold px-2 py-0.5 rounded ${
                          isCompleted
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                            : isSelected
                            ? "bg-primary/20 text-primary border border-primary/30"
                            : "bg-muted text-muted-foreground border border-border/40"
                        }`}>
                          वर्ष {item.year}
                        </span>
                        
                        {isCompleted ? (
                          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">पूर्ण</span>
                        ) : isActive ? (
                          <span className="text-[10px] uppercase font-bold tracking-wider text-orange-500 dark:text-orange-400 animate-pulse">प्रगति पर</span>
                        ) : (
                          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">प्रस्तावित</span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-foreground font-hindi mt-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Right Column: Detailed Year Overview */}
          <div className="lg:col-span-5">
            <div className="glass p-6 sm:p-8 rounded-2xl border border-border/60 relative overflow-hidden min-h-[350px] flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <activeMilestone.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-bold">रोडमैप वर्ष: {activeMilestone.year}</span>
                    <h3 className="text-lg font-bold text-foreground font-hindi leading-snug mt-0.5">{activeMilestone.title}</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground font-hindi leading-relaxed mb-6">
                  {activeMilestone.desc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 font-hindi">मुख्य लक्ष्य और रणनीतियाँ:</h4>
                <div className="space-y-2.5">
                  {activeMilestone.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 font-hindi">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{detail}</span>
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
