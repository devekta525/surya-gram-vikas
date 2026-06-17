"use client";

import { motion } from "framer-motion";
import { Fingerprint, QrCode, FileCheck2, ShieldCheck, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function DigitalIdentity() {
  const [verificationState, setVerificationState] = useState<"idle" | "verifying" | "success">("idle");
  const [activeFeature, setActiveFeature] = useState("family");

  const simulateVerification = () => {
    setVerificationState("verifying");
    setTimeout(() => {
      setVerificationState("success");
    }, 1800);
  };

  const featureDetails: Record<string, { title: string; desc: string; list: string[] }> = {
    family: {
      title: "डिजिटल परिवार रजिस्ट्री",
      desc: "ग्राम पंचायत की एकीकृत ब्लॉकचेन बहीखाता प्रणाली, जो परिवारों के समग्र डेटा को सुरक्षित एवं पारदर्शी रखती है।",
      list: ["पारिवारिक संबंधों का डिजिटल प्रमाणन", "राशन व जनकल्याणकारी योजनाओं का तत्काल जुड़ाव", "केंद्रीकृत डेटा जिससे सरकारी योजना आवंटन हो आसान"],
    },
    certificates: {
      title: "पेपरलेस डिजिटल प्रमाणपत्र",
      desc: "जन्म, जाति, निवास व आय प्रमाणपत्र प्राप्त करने के लिए अब तहसील के चक्कर काटने की आवश्यकता नहीं है।",
      list: ["आवेदन के 5 मिनट के भीतर स्वतः स्वीकृत प्रमाण पत्र", "क्यूआर कोड (QR) द्वारा त्वरित सत्यापन प्रणाली", "डिजिटल लॉकर (DigiLocker) के साथ सीधा एकीकरण"],
    },
    benefits: {
      title: "प्रत्यक्ष लाभ हस्तांतरण (DBT)",
      desc: "सभी पेंशन, कृषि सब्सिडी और छात्रवृत्ति सीधे जनधन बैंक खातों में बिना किसी तीसरे पक्ष के भेजी जाती है।",
      list: ["100% पारदर्शी फंड वितरण ट्रैकिंग", "बिचौलियों और भ्रष्टाचार का पूर्ण उन्मूलन", "मोबाइल पर तत्काल एसएमएस अलर्ट एवं रसीद"],
    },
  };

  return (
    <section id="identity" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden border-b border-white/10 dark">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-2">एकीकृत डिजिटल पहचान</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-title">
            डिजिटल पहचान प्रणाली (Unified Digital ID)
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-hindi">
            100% नागरिकों के पास सुरक्षित, ब्लॉकचेन-आधारित डिजिटल पहचान पत्र है जो सभी सरकारी योजनाओं और सेवाओं तक त्वरित पहुंच सुनिश्चित करता है।
          </p>
        </div>

        {/* Dashboard UI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Digital ID Card Representation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Smart ID Card Container */}
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              className="relative w-full max-w-sm aspect-[1.6/1] rounded-2xl bg-gradient-to-tr from-cyan-900/60 via-slate-900 to-indigo-950/70 border border-cyan-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl neon-glow-accent group cursor-pointer"
            >
              {/* Futuristic overlay lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* ID Card Top Header */}
              <div className="flex justify-between items-start z-10">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">Suryapura Gram</h4>
                    <p className="text-[8px] text-cyan-300 font-semibold tracking-wider">डिजिटल नागरिक पत्र</p>
                  </div>
                </div>
                <span className="text-[8px] bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded font-extrabold uppercase tracking-wider">
                  Verified
                </span>
              </div>

              {/* ID Card Middle Content */}
              <div className="flex items-center gap-4 my-3 z-10">
                {/* Profile Avatar */}
                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 text-cyan-400" fill="currentColor">
                    <path d="M50 15a15 15 0 100 30 15 15 0 000-30zM25 75c0-13.8 11.2-25 25-25s25 11.2 25 25v5H25v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-hindi">देवेंद्र कुमार</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-hindi">पेशा: छात्र (रोबोटिक्स लैब)</p>
                  <p className="text-[9px] text-cyan-300 font-mono mt-1 font-semibold">SUR-ID: 2030-9831-4091</p>
                </div>
              </div>

              {/* ID Card Bottom Footer */}
              <div className="flex justify-between items-end border-t border-cyan-500/10 pt-3 z-10">
                <div className="text-[8px] text-muted-foreground">
                  <p>जारी करने की तिथि: 12-04-2025</p>
                  <p className="mt-0.5">ब्लॉकचेन रिकॉर्ड: #893-A12</p>
                </div>
                {/* QR Symbol */}
                <div className="w-10 h-10 bg-white p-1 rounded-md shrink-0">
                  <QrCode className="w-full h-full text-slate-950" />
                </div>
              </div>
            </motion.div>

            {/* Verification Simulator Buttons */}
            <div className="mt-8 w-full max-w-sm">
              <div className="glass p-4 rounded-xl border border-border/60 flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-hindi text-foreground font-semibold">आईडी कार्ड सत्यापन प्रणाली:</span>
                  
                  {verificationState === "idle" && (
                    <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded border border-border/40 font-semibold font-hindi">तैयार</span>
                  )}
                  {verificationState === "verifying" && (
                    <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded font-semibold font-hindi flex items-center gap-1">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      जांच जारी...
                    </span>
                  )}
                  {verificationState === "success" && (
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold font-hindi flex items-center gap-1.5 animate-bounce">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      100% सत्यापित
                    </span>
                  )}
                </div>

                <button
                  onClick={simulateVerification}
                  disabled={verificationState === "verifying"}
                  className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  Verify QR Code Link
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive details on Citizen Benefits/Certificates */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Horizontal Tabs Selection */}
            <div className="flex gap-2 border-b border-border/40 pb-2">
              <button
                onClick={() => setActiveFeature("family")}
                className={`pb-3 text-sm font-semibold border-b-2 font-hindi transition-all cursor-pointer ${
                  activeFeature === "family"
                    ? "border-cyan-500 dark:border-cyan-400 text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                परिवार रजिस्ट्री
              </button>
              <button
                onClick={() => setActiveFeature("certificates")}
                className={`pb-3 text-sm font-semibold border-b-2 font-hindi transition-all cursor-pointer ${
                  activeFeature === "certificates"
                    ? "border-cyan-500 dark:border-cyan-400 text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                डिजिटल प्रमाणपत्र
              </button>
              <button
                onClick={() => setActiveFeature("benefits")}
                className={`pb-3 text-sm font-semibold border-b-2 font-hindi transition-all cursor-pointer ${
                  activeFeature === "benefits"
                    ? "border-cyan-500 dark:border-cyan-400 text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                सीधे जनहित लाभ (DBT)
              </button>
            </div>

            {/* Feature Description Panel */}
            <div className="p-6 rounded-2xl glass border border-border/60 space-y-4 min-h-[200px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground font-hindi">
                  {featureDetails[activeFeature].title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-hindi leading-relaxed mt-2">
                  {featureDetails[activeFeature].desc}
                </p>
              </div>

              <div className="space-y-2">
                {featureDetails[activeFeature].list.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-cyan-700 dark:text-cyan-200 font-hindi">
                    <FileCheck2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
