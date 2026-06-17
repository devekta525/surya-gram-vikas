"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeftRight, CheckCircle2, CloudLightning, TreeDeciduous, GraduationCap, Server } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  oldDesc: string;
  newDesc: string;
  oldSpecs: string[];
  newSpecs: string[];
  oldImage: string;
  newImage: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "infrastructure",
    title: "बुनियादी ढांचा (Roads & Water)",
    icon: TreeDeciduous,
    oldDesc: "कच्ची सड़कें, बारिश में जलभराव, और पीने के पानी के लिए लंबी लाइनें।",
    newDesc: "98% पक्की डामर सड़कें, स्मार्ट भूमिगत जल निकासी, और हर घर में 24/7 नल से जल आपूर्ति।",
    oldSpecs: ["कच्ची ऊबड़-खाबड़ गलियां", "बारिश में कीचड़ और ठहराव", "कुएं-तालाबों पर निर्भरता"],
    newSpecs: ["Solar स्ट्रीट लाइट्स युक्त सड़कें", "स्मार्ट वॉटर मीटरिंग ग्रिड", "भूमिगत ड्रेनेज चैनल"],
    oldImage: "/old_infra.png",
    newImage: "/smart_infra.png",
  },
  {
    id: "agriculture",
    title: "कृषि (Smart Agriculture)",
    icon: ArrowLeftRight,
    oldDesc: "मौसम और पारंपरिक ज्ञान पर निर्भरता, कम पैदावार, और बिचौलियों का प्रभाव।",
    newDesc: "स्मार्ट मृदा सेंसर, ड्रिप सिंचाई स्वचालन, फसल स्वास्थ्य विश्लेषण, और डिजिटल मंडी।",
    oldSpecs: ["अत्यधिक पानी की बर्बादी", "फसल रोगों का देर से पता चलना", "कमजोर बाजार मूल्य जानकारी"],
    newSpecs: ["मृदा नमी सेंसर एकीकरण", "कृषि ड्रोन द्वारा सर्वेक्षण", "सीधे ई-मंडी संपर्क व भुगतान"],
    oldImage: "/old_agri.png",
    newImage: "/smart_agri.png",
  },
  {
    id: "education",
    title: "शिक्षा (Digital Classroom)",
    icon: GraduationCap,
    oldDesc: "सीमित संसाधन, पुरानी किताबें, और कमजोर इंटरनेट-प्रौद्योगिकी सुविधा।",
    newDesc: "स्मार्ट क्लासरूम, हाई-स्पीड वाईफाई, एआई शिक्षण सहायक, और डिजिटल लाइब्रेरी।",
    oldSpecs: ["श्यामपट्ट (Blackboard) शिक्षा", "प्रैक्टिकल लैब्स का अभाव", "सीमित करियर मार्गदर्शन"],
    newSpecs: ["इंटरैक्टिव स्मार्ट एलईडी स्क्रीन", "वर्चुअल लैब सिम्युलेटर", "कोडिंग व रोबोटिक्स क्लासेस"],
    oldImage: "/old_edu.png",
    newImage: "/smart_edu.png",
  },
  {
    id: "energy",
    title: "ऊर्जा (Solar Swavalamban)",
    icon: CloudLightning,
    oldDesc: "बार-बार बिजली कटौती, लोड शेडिंग, और केरोसिन लैंप पर निर्भरता।",
    newDesc: "100% सोलर संचालित विलेज ग्रिड, घरों में स्मार्ट मीटर, और नेट-मीटरिंग के साथ आय।",
    oldSpecs: ["12-14 घंटे दैनिक बिजली कटौती", "असुरक्षित केरोसिन बत्तियां", "अंधेरे में डूबी गलियां"],
    newSpecs: ["2.4 MW सोलर क्षमता ग्रिड", "स्मार्ट एलईडी स्ट्रीट लाइट नेटवर्क", "इलेक्ट्रिक चार्जिंग स्टेशन"],
    oldImage: "/old_energy.png",
    newImage: "/smart_energy.png",
  },
  {
    id: "governance",
    title: "प्रशासन (Digital Panchayat)",
    icon: Server,
    oldDesc: "दफ्तरों के चक्कर, कागजी काम, प्रमाणपत्र मिलने में हफ्तों की देरी।",
    newDesc: "QR सत्यापित ब्लॉकचेन दस्तावेज, सिंगल-विंडो पोर्टल, और ग्राम सभा की लाइव स्ट्रीमिंग।",
    oldSpecs: ["फाइल-कागजात का भारी अंबार", "पारदर्शिता का भारी अभाव", "दलालों के चक्कर लगाना"],
    newSpecs: ["100% पेपरलेस डिजिटल पंचायत", "5 मिनट में प्रमाण पत्र निष्कासन", "पारदर्शी लाइव ग्रामसभा ऑडिट"],
    oldImage: "/old_gov.png",
    newImage: "/smart_gov.png",
  },
];

export default function BeforeAfterTimeline() {
  const [activeTab, setActiveTab] = useState(timelineData[0].id);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [containerWidth, setContainerWidth] = useState(672);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = timelineData.find((item) => item.id === activeTab) || timelineData[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-b border-border/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">क्रांतिकारी बदलाव</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-primary font-title">
            सफ़र: पहले बनाम अब का बदलाव
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            स्लाइडर को घुमाकर देखें कि किस प्रकार सूर्यपुरा ने एक पारंपरिक गांव से भारत के पहले स्मार्ट विलेज का सफर तय किया।
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {timelineData.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSliderPosition(isActive ? sliderPosition : 50);
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-orange-600 text-white border-transparent shadow-[0_0_15px_rgba(249,115,22,0.3)] scale-105"
                    : "bg-card/40 text-muted-foreground border-border/60 hover:bg-card/80 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-hindi">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Grid: Left/Right text comparison + Interactive Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Comparison Cards (Before vs After) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Old Card (Left state) */}
            <motion.div
              key={`old-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-6 rounded-2xl border border-red-500/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-500/20 flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-xs uppercase font-extrabold text-red-400 tracking-wider">पारंपरिक सूर्यपुरा (भूतकाल)</span>
              </div>
              <p className="text-sm font-hindi text-foreground/90 leading-relaxed mb-4">
                {activeItem.oldDesc}
              </p>
              <ul className="space-y-2">
                {activeItem.oldSpecs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground font-hindi">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Smart Card (Right state) */}
            <motion.div
              key={`new-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-2xl border border-emerald-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider">स्मार्ट सूर्यपुरा (वर्तमान व भविष्य)</span>
              </div>
              <p className="text-sm font-hindi text-foreground/90 leading-relaxed mb-4">
                {activeItem.newDesc}
              </p>
              <ul className="space-y-2">
                {activeItem.newSpecs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 font-hindi font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Draggable Slider Container */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center">
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                isDragging.current = true;
                handleMove(e.clientX);
              }}
              onMouseMove={(e) => {
                if (isDragging.current) handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                isDragging.current = true;
                handleMove(e.touches[0].clientX);
              }}
              onTouchMove={(e) => {
                if (isDragging.current) handleMove(e.touches[0].clientX);
              }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-border/40 max-w-2xl bg-slate-950"
            >
              
              {/* Right Side Image (Smart) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeItem.newImage}
                  alt={activeItem.title}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)] select-none font-hindi flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    स्मार्ट सूर्यपुरा
                  </span>
                </div>
              </div>

              {/* Left Side Image Overlay (Old) */}
              <div
                className="absolute inset-y-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Content width is constrained to containerWidth to prevent distortion during dragging */}
                <div 
                  className="absolute inset-y-0 left-0 h-full overflow-hidden"
                  style={{ width: containerWidth }}
                >
                  <img
                    src={activeItem.oldImage}
                    alt={activeItem.title}
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-red-950/90 border border-red-500/30 text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)] select-none font-hindi flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      पारंपरिक सूर्यपुरा
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Line handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white/60 backdrop-blur-md cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg border border-slate-300 transform -translate-x-1/2">
                  <ArrowLeftRight className="w-4 h-4 shrink-0" />
                </div>
              </div>

            </div>
            
            <p className="text-xs text-muted-foreground mt-4 font-hindi flex items-center gap-1.5">
              <span>← ड्रैग करके पहले/अब के स्वरूप को देखें →</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
