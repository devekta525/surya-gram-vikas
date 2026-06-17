"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CheckCircle, ArrowRight } from "lucide-react";

export default function CallToAction() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-b border-border/20">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/smart_village_sunrise.png"
          alt="Suryapura Smart Village"
          className="w-full h-full object-cover opacity-55 filter brightness-[0.7] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/45 to-background/90" />
      </div>

      {/* Background Grids */}
      <div className="absolute inset-0 tech-grid opacity-20 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Glowing Heart/Action Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-pulse neon-glow-primary">
          <Heart className="w-8 h-8 fill-primary/10" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 font-title">
          आइए मिलकर बनाएं <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">भारत का अगला स्मार्ट गांव</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted-foreground font-hindi leading-relaxed max-w-2xl mx-auto mb-10">
          सूर्यपुरा ग्राम विकास मॉडल सिर्फ एक गाँव तक सीमित नहीं है। तकनीकी विशेषज्ञता, वित्तीय योगदान अथवा स्वयंसेवक के रूप में आप भी इस स्वर्णिम क्रांति का हिस्सा बन सकते हैं।
        </p>

        {/* Submit Form */}
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="अपना ईमेल पता दर्ज करें"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-5 py-3.5 rounded-xl bg-slate-900 border border-border/60 text-white placeholder-muted-foreground text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 bg-gradient-to-r from-primary to-orange-600 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] text-white font-semibold rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 shrink-0"
                >
                  {isSubmitting ? "पंजीकरण जारी..." : "Join Mission"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl flex flex-col items-center gap-2"
              >
                <CheckCircle className="w-8 h-8 text-emerald-400 animate-bounce" />
                <h4 className="text-sm font-bold text-white font-hindi">पंजीकरण संपन्न हुआ!</h4>
                <p className="text-[10px] text-muted-foreground font-hindi">हम शीघ्र ही विकास बुलेटिन और भागीदारी गाइड आपके ईमेल पर साझा करेंगे।</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[10px] font-bold text-emerald-400 hover:underline"
                >
                  पुनः प्रयास करें
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
