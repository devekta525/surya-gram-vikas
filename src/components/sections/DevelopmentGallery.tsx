"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, Landmark, GraduationCap, Sprout, Milestone, Server } from "lucide-react";

interface GalleryItem {
  id: number;
  category: "infra" | "edu" | "agri" | "digital";
  title: string;
  tag: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  image: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    category: "infra",
    title: "2.4 MW सौर ऊर्जा संयंत्र",
    tag: "ऊर्जा",
    desc: "गाँव को आत्मनिर्भर बनाने वाली अत्याधुनिक सौर पैनल ग्रिड जो 24/7 निर्बाध बिजली प्रदान करती है।",
    icon: Milestone,
    color: "border-orange-500/30 text-orange-400 bg-orange-950/20",
    image: "/smart_energy.png",
  },
  {
    id: 2,
    category: "edu",
    title: "डिजिटल कोडिंग एवं रोबोटिक्स लैब",
    tag: "शिक्षा",
    desc: "पाइथन, रोबोटिक्स और इलेक्ट्रॉनिक्स की शिक्षा के लिए स्थापित आधुनिक कंप्यूटर साइंस लैब।",
    icon: GraduationCap,
    color: "border-amber-500/30 text-amber-400 bg-amber-950/20",
    image: "/smart_edu.png",
  },
  {
    id: 3,
    category: "agri",
    title: "ड्रिप सिंचाई एवं मृदा सेंसर नेटवर्क",
    tag: "स्मार्ट खेती",
    desc: "खेतों में नाइट्रोजन व फास्फोरस के लाइव स्तर की निगरानी करने वाले मृदा सेंसर ग्रिड।",
    icon: Sprout,
    color: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
    image: "/smart_agri.png",
  },
  {
    id: 4,
    category: "digital",
    title: "ब्लॉकचेन ई-गवर्नेंस पंचायत हब",
    tag: "डिजिटल सेवा",
    desc: "सभी प्रमाण पत्रों और ग्राम बजट रिकॉर्ड्स का पारदर्शी ब्लॉकचेन वितरण एवं सत्यापन केंद्र।",
    icon: Server,
    color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20",
    image: "/smart_gov.png",
  },
  {
    id: 5,
    category: "infra",
    title: "स्मार्ट ड्रैनेज एवं स्वच्छ जल हब",
    tag: "अवसंरचना",
    desc: "जल संचयन, जल शोधन और भूमिगत पाइपिंग सिस्टम के साथ पूर्ण जल स्वचालन।",
    icon: Landmark,
    color: "border-blue-500/30 text-blue-400 bg-blue-950/20",
    image: "/smart_infra.png",
  },
];

export default function DevelopmentGallery() {
  const [filter, setFilter] = useState<"all" | "infra" | "edu" | "agri" | "digital">("all");
  const [miniSliderPos, setMiniSliderPos] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(600);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setSliderWidth(containerRef.current.clientWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setSliderWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredItems = filter === "all" ? galleryData : galleryData.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-b border-border/20">
      
      {/* Background Grids */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-secondary font-bold mb-2">विकास गैलरी</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-secondary font-title">
            विकास कार्यों की झांकी
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            विभिन्न क्षेत्रों में संपन्न हुए बुनियादी ढांचा परियोजनाओं, शैक्षणिक केंद्रों और स्मार्ट डिजिटल सुविधाओं का दृश्य संकलन।
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "सभी विकास कार्य" },
            { id: "infra", label: "अवसंरचना (Infra)" },
            { id: "edu", label: "शिक्षा (Education)" },
            { id: "agri", label: "कृषि (Agriculture)" },
            { id: "digital", label: "डिजिटल सेवा (Digital)" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as "all" | "infra" | "edu" | "agri" | "digital")}
              className={`px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-300 font-hindi ${
                filter === cat.id
                  ? "bg-secondary text-white border-transparent shadow-[0_0_15px_rgba(16,185,129,0.25)] scale-105"
                  : "bg-card/40 text-muted-foreground border-border/60 hover:bg-card/80 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Draggable Compare Box inside the Gallery */}
          <div className="md:col-span-2 rounded-2xl glass border border-border/40 overflow-hidden min-h-[300px] flex flex-col justify-between p-6 relative select-none">
            
            <div className="flex justify-between items-center z-10 mb-4">
              <div>
                <span className="text-[10px] bg-secondary/20 text-secondary border border-secondary/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider font-hindi">
                  तुलना स्लाइडर
                </span>
                <h3 className="text-lg font-bold text-white font-hindi mt-1.5">स्मार्ट पंचायत घर का बदलाव</h3>
              </div>
              <p className="text-xs text-muted-foreground font-hindi leading-relaxed max-w-xs hidden sm:block">
                नीचे दिए गए हैंडल को खिसका कर पंचायत भवन के आधुनिक स्वरूप (सोलर रूफटॉप, शीशे की दीवारें) बनाम पुराने स्वरूप की तुलना करें।
              </p>
            </div>

            {/* Draggable panel mockup */}
            <div
              ref={containerRef}
              className="relative w-full h-80 rounded-xl overflow-hidden border border-border/40 cursor-ew-resize bg-slate-950"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSliderWidth(rect.width);
                if (isSliding) {
                  const x = e.clientX - rect.left;
                  setMiniSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
                }
              }}
              onMouseDown={() => setIsSliding(true)}
              onMouseUp={() => setIsSliding(false)}
              onMouseLeave={() => setIsSliding(false)}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSliderWidth(rect.width);
                const x = e.touches[0].clientX - rect.left;
                setMiniSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
              }}
            >
              {/* Right State (Smart) */}
              <div className="absolute inset-0">
                <img
                  src="/smart_gov.png"
                  alt="Smart Panchayat"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                <div className="absolute bottom-5 left-5 right-5 text-left space-y-2 z-10">
                  <h4 className="text-sm font-bold text-white tracking-wide font-hindi bg-secondary/25 backdrop-blur-md border border-secondary/30 px-2.5 py-1 rounded inline-block font-hindi">
                    स्मार्ट पंचायत भवन
                  </h4>
                  <p className="text-xs text-emerald-200 font-hindi leading-relaxed bg-slate-950/70 backdrop-blur-md p-3 rounded-xl border border-secondary/10">
                    पेपरलेस डिजिटल सेवाएं, रूफटॉप सोलर ग्रिड, बायोमेट्रिक सुरक्षा एवं हाई-स्पीड ब्रॉडबैंड कनेक्टिविटी।
                  </p>
                </div>
              </div>

              {/* Left State (Old) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${miniSliderPos}%` }}
              >
                <div
                  className="absolute inset-y-0 left-0 h-full"
                  style={{ width: `${sliderWidth}px` }}
                >
                  <img
                    src="/old_gov.png"
                    alt="Old Panchayat Office"
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                  <div className="absolute bottom-5 left-5 right-5 text-left space-y-2 z-10">
                    <h4 className="text-sm font-bold text-white tracking-wide font-hindi bg-red-500/25 backdrop-blur-md border border-red-500/30 px-2.5 py-1 rounded inline-block font-hindi">
                      जर्जर पुराना पंचायत दफ्तर
                    </h4>
                    <p className="text-xs text-red-200 font-hindi leading-relaxed bg-slate-950/70 backdrop-blur-md p-3 rounded-xl border border-red-500/10">
                      सीलन भरी फाइलें, लगातार बिजली कटौती, और जर्जर खपरैल छत वाली असुरक्षित पुरानी इमारत।
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider Line */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white/40 pointer-events-none"
                style={{ left: `${miniSliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg absolute top-1/2 -translate-y-1/2 -translate-x-1/2 border border-border/40 cursor-ew-resize">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

            </div>

            <p className="text-[10px] text-muted-foreground mt-3 font-hindi text-center">
              ← ड्रैग करके पंचायत दफ्तर का कायाकल्प देखें →
            </p>
          </div>

          {/* Map components mapping filtered elements */}
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl glass border border-border/40 hover:border-secondary/30 transition-colors overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Card Image Cover with Zoom effect on hover */}
                    <div className="relative h-44 w-full overflow-hidden border-b border-border/40">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                      
                      {/* Floating Badge & Icon */}
                      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                        <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-secondary border border-secondary/30 font-hindi">
                          {item.tag}
                        </span>
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center backdrop-blur-md ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-foreground font-hindi group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-muted-foreground font-hindi leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0 flex items-center gap-1.5 text-[10px] font-bold text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>परियोजना विवरण</span>
                    <span>→</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
