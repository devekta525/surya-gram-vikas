import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "सूर्यपुरा स्मार्ट विलेज पोर्टल | Suryapura Smart Village Portal",
  description: "शिक्षा, कृषि, डिजिटल पहचान और पारदर्शी प्रशासन के माध्यम से ग्रामीण विकास का नया मॉडल - परंपरा से प्रगति की ओर।",
  keywords: ["Suryapura", "Smart Village", "Rural Development", "Digital India", "Incredible India", "Smart Agriculture"],
  authors: [{ name: "ग्राम विकास टीम, सूर्यपुरा" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      suppressHydrationWarning
      className={`${outfit.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
