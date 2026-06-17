"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, Award, GraduationCap, Sprout, Milestone } from "lucide-react";

interface NewsItem {
  id: number;
  category: string;
  tagColor: string;
  icon: React.ComponentType<{ className?: string }>;
  date: string;
  title: string;
  desc: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    category: "विकास परियोजना (Projects)",
    tagColor: "text-orange-400 bg-orange-950/20 border-orange-500/20",
    icon: Milestone,
    date: "15 जून, 2026",
    title: "ग्राम पंचायत वाईफाई ग्रिड विस्तार का द्वितीय चरण शुरू",
    desc: "गांव के बाहरी कृषि खेतों और सामुदायिक केंद्रों तक हाई-स्पीड फाइबर ऑप्टिक इंटरनेट का विस्तार किया जा रहा है जिससे किसान सीधे खेतों से मृदा सेंसर कनेक्ट कर सकें।",
    link: "#",
  },
  {
    id: 2,
    category: "कृषि प्रशिक्षण (Farmer Training)",
    tagColor: "text-emerald-400 bg-emerald-950/20 border-emerald-500/20",
    icon: Sprout,
    date: "10 जून, 2026",
    title: "कृषि ड्रोन परिचालन एवं मृदा सेंसर डेटा विश्लेषण कार्यशाला",
    desc: "गांव के 120 से अधिक प्रगतिशील किसानों को फसल स्वास्थ्य की जांच करने के लिए ड्रोन उड़ाने और सॉइल सेंसर रिपोर्ट पढ़ने का व्यावहारिक प्रशिक्षण दिया गया।",
    link: "#",
  },
  {
    id: 3,
    category: "शिक्षा उन्नयन (School Upgrade)",
    tagColor: "text-amber-400 bg-amber-950/20 border-amber-500/20",
    icon: GraduationCap,
    date: "05 जून, 2026",
    title: "राजकीय उच्च विद्यालय में वर्चुअल रियलिटी (VR) विज्ञान लैब का उद्घाटन",
    desc: "जीव विज्ञान, भौतिकी और रसायन विज्ञान के प्रैक्टिकल्स को मनोरंजक और त्रि-आयामी बनाने के लिए छात्रों को VR गॉगल्स और सिम्युलेटर किट्स प्रदान किए गए।",
    link: "#",
  },
  {
    id: 4,
    category: "महिला विकास (Empowerment)",
    tagColor: "text-purple-400 bg-purple-950/20 border-purple-500/20",
    icon: Award,
    date: "28 मई, 2026",
    title: "स्वयं सहायता समूह ई-कॉमर्स पैकेजिंग यूनिट का शिलान्यास",
    desc: "महिला समूहों द्वारा निर्मित जैविक हस्तशिल्प और खाद्यान्न के लिए अंतरराष्ट्रीय पैकेजिंग और बारकोडिंग यूनिट की स्थापना की गई, जिससे निर्यात में सुगमता होगी।",
    link: "#",
  },
];

export default function NewsAnnouncements() {
  return (
    <section id="news" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-b border-border/20">
      
      {/* Dynamic Background */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">समाचार एवं घोषणाएं</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-primary font-title">
            सक्रिय विकास गतिविधियां
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            सूर्यपुरा ग्राम पंचायत में हो रहे नवीनतम विकास कार्यों, प्रशिक्षण शिविरों और सामाजिक आयोजनों की अद्यतन जानकारी।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl glass border border-border/40 hover:border-primary/20 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md border flex items-center justify-center shrink-0 border-border/40 text-primary">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${item.tagColor} font-hindi`}>
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-hindi">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white font-hindi group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground font-hindi leading-relaxed mt-3.5">
                    {item.desc}
                  </p>

                </div>

                {/* Bottom Link Action */}
                <div className="mt-6 pt-4 border-t border-border/20 flex justify-between items-center text-xs">
                  <span className="text-muted-foreground font-hindi">पूरी रिपोर्ट पढ़ें</span>
                  <div className="w-7 h-7 rounded-full bg-slate-900 border border-border/60 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
