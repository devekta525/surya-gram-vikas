"use client";

import { useState } from "react";
import { Copy, Check, Fingerprint, Sprout } from "lucide-react";

export default function SocialCreatives() {
  const [copiedCaption, setCopiedCaption] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      campaignName: "Digital Identity Campaign (डिजिटल पहचान अभियान)",
      title: "एक गाँव • एक डिजिटल पहचान",
      subHeadline: "100% क्यूआर-सत्यापित ब्लॉकचेन जनहित सुरक्षा प्रणाली",
      accentColor: "from-indigo-600 via-slate-900 to-cyan-600 border-cyan-500/30 text-cyan-400",
      icon: Fingerprint,
      caption: "🌞 सूर्यपुरा: जहाँ परंपरा से प्रगति का मिलन डिजिटल क्रांति से होता है! 100% ब्लॉकचेन-आधारित डिजिटल नागरिक बहीखाता के साथ, हर सरकारी योजना सीधे हितग्राहियों तक पारदर्शी रूप से पहुँच रही है। अब कोई बिचौलिया नहीं, कोई कागज़ी देरी नहीं। \n\n#DigitalIndia #SmartVillage #Suryapura #BlockchainGovernance #TransparentIndia",
      graphicDetails: [
        "100% सुरक्षित ब्लॉकचेन रिकॉर्ड",
        "5 मिनट में स्वतः जारी डिजिटल प्रमाण पत्र",
        "डायरेक्ट बेनिफिट ट्रांसफर (DBT) एकीकरण",
      ],
    },
    {
      id: 2,
      campaignName: "Smart Farmer Program (स्मार्ट किसान कार्यक्रम)",
      title: "स्मार्ट किसान • समृद्ध भविष्य",
      subHeadline: "मृदा सेंसर एवं ड्रोन तकनीक से कृषि उत्पादन में 140% तक की भारी वृद्धि",
      accentColor: "from-emerald-600 via-slate-900 to-teal-600 border-emerald-500/30 text-emerald-400",
      icon: Sprout,
      caption: "🌾 स्मार्ट किसान, समृद्ध भविष्य! सूर्यपुरा में आधुनिक तकनीक ने कृषि का चेहरा बदल दिया है। मृदा सेंसर डेटा विश्लेषण और ड्रोन आधारित छिड़काव ने पानी की खपत को 40% घटाया और किसानों के मुनाफे को दोगुना किया है। \n\n#SmartFarming #AgriTech #DigitalAgriculture #FarmerEmpowerment #IncredibleIndia",
      graphicDetails: [
        "मृदा नाइट्रोजन-फॉस्फोरस सेंसर",
        "मौसम व सिंचाई ऑटो-अलर्ट",
        "सीधे मोबाइल पर लाइव मंडी दरें",
      ],
    },
  ];

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCaption(id);
    setTimeout(() => {
      setCopiedCaption(null);
    }, 2000);
  };

  return (
    <section id="creatives" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden border-b border-border/20">
      
      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">सोशल मीडिया कैम्पेन</h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-title">
            प्रचार और सोशल ब्रांडिंग क्रिएटिव्स
          </p>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto font-hindi">
            सूर्यपुरा की डिजिटल और कृषि क्रांति का सोशल मीडिया पर प्रचार करने के लिए डिज़ाइन किए गए दो प्रीमियम कैंपेन पोस्टर।
          </p>
        </div>

        {/* Creatives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <div key={post.id} className="space-y-6">
                
                {/* Visual Poster representation */}
                <div className="rounded-2xl border border-border/40 overflow-hidden shadow-2xl bg-slate-950 select-none">
                  
                  {/* Poster Header */}
                  <div className="p-4 bg-slate-900 border-b border-white/5 flex justify-between items-center text-[10px]">
                    <span className="text-muted-foreground font-semibold uppercase font-sans tracking-wide">
                      Campaign Creative #{post.id}
                    </span>
                    <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to Share
                    </span>
                  </div>

                  {/* Poster Graphic area */}
                  <div className={`p-8 bg-gradient-to-br ${post.accentColor} min-h-[300px] flex flex-col justify-between relative overflow-hidden`}>
                    
                    {/* Tech grid overlay */}
                    <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
                    
                    {/* Glowing Accent Ring */}
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                    {/* Logo tag */}
                    <div className="flex items-center gap-2 text-white z-10">
                      <span className="text-lg">🌞</span>
                      <span className="text-xs uppercase font-extrabold tracking-wider font-sans">Suryapura Smart Village</span>
                    </div>

                    {/* Core Poster Message */}
                    <div className="my-8 z-10">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-hindi tracking-wide leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-[10px] sm:text-xs text-white/80 font-hindi leading-relaxed mt-2.5 max-w-sm">
                        {post.subHeadline}
                      </p>
                    </div>

                    {/* Features checklist printed on the poster graphic */}
                    <div className="border-t border-white/10 pt-4 z-10 grid grid-cols-3 gap-2 text-[8px] sm:text-[9px] text-white/70">
                      {post.graphicDetails.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-1 font-hindi">
                          <span className="h-1 w-1 bg-white rounded-full mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Caption Control Panel */}
                <div className="glass p-5 rounded-2xl border border-border/40 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white font-hindi">कैप्शन (Social Media Caption)</span>
                    
                    <button
                      onClick={() => handleCopy(post.caption, post.id)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white border border-border/60 hover:border-white/20 text-[10px] font-semibold rounded-lg flex items-center gap-1.5 transition-all"
                    >
                      {copiedCaption === post.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Caption</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Pre-formatted caption box */}
                  <pre className="p-3 bg-slate-950 border border-white/5 rounded-xl text-[10px] text-muted-foreground whitespace-pre-wrap font-hindi font-medium leading-relaxed max-h-24 overflow-y-auto">
                    {post.caption}
                  </pre>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
