"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Landmark, GraduationCap, HeartHandshake } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  category: string;
  story: string;
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
  metricLabel: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "रामफल यादव",
    role: "प्रगतिशील कृषक",
    category: "Agriculture",
    story: "“मृदा सेंसर और किसान साथी ऐप की मदद से मुझे सटीक पता चलता है कि मिट्टी में नाइट्रोजन की कितनी कमी है और कब पानी देना है। ड्रिप ऑटोमेशन से न सिर्फ पानी बचा, बल्कि इस वर्ष हमारी आलू और गेहूं की फसल से कुल आय दोगुना से अधिक हो गई।”",
    icon: Landmark,
    metric: "140% आय वृद्धि",
    metricLabel: "वार्षिक कृषि मुनाफा",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    name: "आरती सिंह",
    role: "पाइथन प्रोग्रामिंग छात्रा",
    category: "Education",
    story: "“सरकारी स्कूल में वाईफाई और कंप्यूटर लैब सेटअप के माध्यम से मैंने घर बैठे ही वेब डेवलपमेंट और कोडिंग सीखी। हाल ही में मुझे राज्य स्तरीय टेक ओलंपियाड में प्रथम पुरस्कार मिला। मेरे पूरे परिवार के लिए यह गर्व की बात है।”",
    icon: GraduationCap,
    metric: "प्रथम स्थान",
    metricLabel: "राज्य टेक ओलंपियाड",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    name: "नीलम देवी",
    role: "उद्यमी, सूर्य शक्ति स्वयं सहायता समूह",
    category: "Women Empowerment",
    story: "“हमारा समूह पारंपरिक हाथ से बने अचार और जैविक अनाज तैयार करता है। गाँव के ई-कॉमर्स और लॉजिस्टिक्स हब के जरिए अब हम देश-विदेश में सीधे उत्पाद बेच रहे हैं। आज हमारे साथ जुड़ी 35 महिलाएँ पूरी तरह आत्मनिर्भर हैं।”",
    icon: HeartHandshake,
    metric: "35+ महिला रोजगार",
    metricLabel: "स्वयं सहायता समूह सदस्य",
    color: "from-purple-500 to-fuchsia-600",
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonials[currentIndex];
  const Icon = activeTestimonial.icon;

  return (
    <section id="stories" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden border-b border-white/10 dark">
      
      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">प्रेरणादायक सफलता गाथाएं</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-title">
            आत्मनिर्भरता की नई कहानियां
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            डिजिटल और कृषि क्रांति के माध्यम से सूर्यपुरा के आम नागरिकों ने अपनी मेहनत और आधुनिक तकनीक के बल पर सफलता की नई ऊंचाइयों को छुआ है।
          </p>
        </div>

        {/* Testimonial slider frame */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative glass rounded-3xl border border-border/60 p-8 sm:p-12 overflow-hidden shadow-2xl">
            
            {/* Saffron/Green/Purple Indicator Line */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${activeTestimonial.color}`} />
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-foreground/5">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Left Side: Photo/Avatar representation + Stat badge */}
                <div className="md:col-span-4 flex flex-col items-center">
                  
                  {/* Avatar graphic wrapper */}
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${activeTestimonial.color} flex items-center justify-center text-white mb-4 shadow-xl`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground font-hindi text-center">{activeTestimonial.name}</h3>
                  <p className="text-xs text-muted-foreground text-center font-hindi mt-1 leading-snug">{activeTestimonial.role}</p>
                  
                  {/* Metric widget */}
                  <div className="mt-6 px-4 py-2 bg-muted/40 rounded-xl border border-border/60 text-center">
                    <p className="text-sm font-extrabold text-foreground">{activeTestimonial.metric}</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5 font-hindi font-medium uppercase tracking-wider">{activeTestimonial.metricLabel}</p>
                  </div>

                </div>

                {/* Right Side: Text Narrative */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-hindi italic">
                    {activeTestimonial.story}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Testimonial slider navigation buttons */}
          <div className="flex justify-between items-center mt-6 px-4">
            <div className="flex gap-1">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-6 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full glass border border-border/60 hover:bg-muted flex items-center justify-center text-foreground active:scale-95 transition-transform cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full glass border border-border/60 hover:bg-muted flex items-center justify-center text-foreground active:scale-95 transition-transform cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
