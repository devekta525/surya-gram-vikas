"use client";

import { useState } from "react";
import { Home, Sprout, GraduationCap, Fingerprint, Menu, Bell, X, ShieldAlert, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [grievanceModal, setGrievanceModal] = useState(false);
  const [grievanceStatus, setGrievanceStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [complaintText, setComplaintText] = useState("");

  const submitGrievance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaintText) return;
    setGrievanceStatus("submitting");
    setTimeout(() => {
      setGrievanceStatus("success");
      setComplaintText("");
    }, 1500);
  };

  const navItems = [
    { label: "मुख्य", icon: Home, href: "#" },
    { label: "कृषि", icon: Sprout, href: "#agriculture" },
    { label: "शिक्षा", icon: GraduationCap, href: "#education" },
    { label: "पहचान", icon: Fingerprint, href: "#identity" },
  ];

  return (
    <>
      {/* Bottom Sticky Mobile Navigation Bar (Visible on Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/80 backdrop-blur-xl border-t border-white/10 px-6 py-2 pb-4 flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.4)]">
        
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary active:scale-95 transition-all"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-hindi font-semibold">{item.label}</span>
            </a>
          );
        })}

        {/* Floating Action Button (FAB) trigger in Nav Bar */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary active:scale-95 transition-all"
        >
          <Menu className="w-5 h-5" />
          <span className="text-[10px] font-hindi font-semibold">मेन्यू</span>
        </button>

      </div>

      {/* Floating Sticky Quick Notification Bell on Mobile (Top Right) */}
      <div className="fixed top-4 right-4 z-40 md:hidden flex gap-2">
        <button
          onClick={() => setShowNotification(true)}
          className="w-10 h-10 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-white relative shadow-lg active:scale-95 transition-transform"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full animate-ping" />
          <span className="absolute top-2 right-2 w-2 bg-primary rounded-full" />
        </button>
      </div>

      {/* Collapsible Action Drawer (Slide up from bottom) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900 border-t border-white/15 rounded-t-3xl p-6 pb-10 space-y-6 max-h-[70vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <h3 className="text-sm font-bold text-white font-hindi">ग्राम त्वरित सेवाएं</h3>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Action Buttons List */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setGrievanceModal(true);
                  }}
                  className="p-4 rounded-xl bg-card border border-white/5 flex flex-col items-center justify-center text-center gap-2 text-xs font-hindi"
                >
                  <ShieldAlert className="w-6 h-6 text-red-400" />
                  <span className="font-bold text-white leading-snug">ई-शिकायत दर्ज़ करें</span>
                </button>
                
                <a
                  href="#dashboard"
                  onClick={() => setIsOpen(false)}
                  className="p-4 rounded-xl bg-card border border-white/5 flex flex-col items-center justify-center text-center gap-2 text-xs font-hindi"
                >
                  <Menu className="w-6 h-6 text-primary" />
                  <span className="font-bold text-white leading-snug">प्रगति डैशबोर्ड</span>
                </a>
              </div>

              {/* Quick info status */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-[10px]">
                <p className="text-muted-foreground font-hindi">ग्राम वाईफाई नेटवर्क: <span className="text-emerald-400 font-bold">उत्कृष्ट (500 Mbps)</span></p>
                <p className="text-muted-foreground font-hindi mt-1">सौर ऊर्जा उत्पादन: <span className="text-primary font-bold">2.1 Megawatts</span></p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Notifications Collapsible Drawer */}
      <AnimatePresence>
        {showNotification && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotification(false)}
              className="fixed inset-0 z-50 bg-black md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 md:hidden bg-slate-900 border-l border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-6">
                  <h3 className="text-sm font-bold text-white font-hindi">घोषणा बुलेटिन</h3>
                  <button onClick={() => setShowNotification(false)} className="text-muted-foreground hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-card border border-white/5 rounded-lg text-xs font-hindi">
                    <p className="text-[10px] text-primary font-bold">17 जून, 2026</p>
                    <p className="text-white font-medium mt-1 leading-snug">आज शाम 05:00 बजे लाइव ग्रामसभा ऑडिट और ई-पंचायत रिपोर्ट।</p>
                  </div>
                  <div className="p-3 bg-card border border-white/5 rounded-lg text-xs font-hindi">
                    <p className="text-[10px] text-emerald-400 font-bold">15 जून, 2026</p>
                    <p className="text-white font-medium mt-1 leading-snug">सभी किसानों के खातों में कृषि अनुदान की तीसरी किस्त जारी।</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowNotification(false)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg font-hindi"
              >
                बंद करें
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Grievance Modal Dialog */}
      <AnimatePresence>
        {grievanceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setGrievanceModal(false)}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm rounded-2xl bg-slate-900 border border-white/15 p-6 shadow-2xl z-10"
            >
              <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-6">
                <h3 className="text-sm font-bold text-white font-hindi">डिजिटल जन शिकायत निवारण (e-Grievance)</h3>
                <button
                  onClick={() => {
                    setGrievanceModal(false);
                    setGrievanceStatus("idle");
                  }}
                  className="text-muted-foreground hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {grievanceStatus === "idle" || grievanceStatus === "submitting" ? (
                  <form onSubmit={submitGrievance} className="space-y-4">
                    <p className="text-[10px] text-muted-foreground font-hindi leading-relaxed">
                      शिकायत ब्लॉकचेन लेजर में दर्ज़ होगी और ग्राम पंचायत 48 घंटों में इसका जवाब देगी।
                    </p>
                    <textarea
                      required
                      placeholder="अपनी शिकायत या समस्या का संक्षिप्त विवरण लिखें..."
                      rows={4}
                      value={complaintText}
                      onChange={(e) => setComplaintText(e.target.value)}
                      className="w-full p-3 bg-slate-950 border border-white/10 rounded-xl text-xs text-white placeholder-muted-foreground focus:outline-none focus:border-red-500 font-hindi"
                    />
                    <button
                      type="submit"
                      disabled={grievanceStatus === "submitting"}
                      className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 font-hindi transition-colors"
                    >
                      {grievanceStatus === "submitting" ? "दर्ज़ की जा रही है..." : "शिकायत दर्ज़ करें"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6 space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-sm font-bold text-white font-hindi">शिकायत दर्ज़ की गई!</h4>
                    <p className="text-[10px] text-muted-foreground font-hindi leading-relaxed">
                      आपकी शिकायत संदर्भ संख्या: <span className="font-mono font-bold text-cyan-400">#SUR-GR-2026-9023</span> सफलतापूर्वक दर्ज हो चुकी है।
                    </p>
                    <button
                      onClick={() => {
                        setGrievanceModal(false);
                        setGrievanceStatus("idle");
                      }}
                      className="mt-2 text-xs font-bold text-primary hover:underline font-hindi"
                    >
                      वापस जाएं
                    </button>
                  </div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
