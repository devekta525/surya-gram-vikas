"use client";

import { Mail, Phone, MapPin, Heart } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-border/40 text-muted-foreground text-xs sm:text-sm font-hindi">
      
      {/* Upper Main Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column: Brand logo & tag */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <span className="text-xl">🌞</span>
            <span className="font-extrabold text-base tracking-wider">सूर्यपुरा स्मार्ट विलेज</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            &#34;परंपरा से प्रगति की ओर&#34; - हमारा उद्देश्य भारतीय गांवों को उन्नत प्रौद्योगिकी से जोड़कर एक आत्मनिर्भर विकास चक्र स्थापित करना है।
          </p>
          
          <div className="flex gap-3 pt-2">
            {/* Mock social icons */}
            {["Twitter", "YouTube", "GitHub"].map((soc) => (
              <span
                key={soc}
                className="w-8 h-8 rounded-full border border-border/40 hover:border-primary/40 hover:text-white flex items-center justify-center cursor-pointer transition-colors text-[10px] font-semibold font-sans"
              >
                {soc[0]}
              </span>
            ))}
          </div>
          
          <div className="pt-2 flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground">थीम बदलें:</span>
            <ThemeToggle />
          </div>
        </div>

        {/* Column 2: Pillars Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">विकास स्तंभ</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#journey" className="hover:text-primary transition-colors">विकास यात्रा</a></li>
            <li><a href="#pillars" className="hover:text-primary transition-colors">मुख्य स्तंभ</a></li>
            <li><a href="#agriculture" className="hover:text-primary transition-colors">स्मार्ट खेती</a></li>
            <li><a href="#education" className="hover:text-primary transition-colors">शिक्षा क्रांति</a></li>
            <li><a href="#identity" className="hover:text-primary transition-colors">डिजिटल नागरिक आईडी</a></li>
          </ul>
        </div>

        {/* Column 3: Quick tools / Transparent Audits */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">त्वरित टूल्स व पारदर्शिता</h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>लाइव मौसम व वर्षा पूर्वानुमान</span>
            </li>
            <li className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>डिजिटल शिकायत निवारण (e-Grievance)</span>
            </li>
            <li className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>ग्राम पंचायत बजट लाइव ऑडिट</span>
            </li>
            <li className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>कल्याणकारी सरकारी योजना डायरेक्टरी</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">संपर्क व सहायता</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>ग्राम पंचायत कार्यालय, सूर्यपुरा, वाराणसी मंडल, उत्तर प्रदेश - 221001</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <span>+91 542 2289400</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>contact@suryapura.gov.in</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40 py-6 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs">
          <p>© {new Date().getFullYear()} सूर्यपुरा ग्राम विकास पोर्टल। सभी अधिकार सुरक्षित हैं।</p>
          <div className="flex items-center gap-1.5 text-muted-foreground font-sans">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Digital India Mission</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
