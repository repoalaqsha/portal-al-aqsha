import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "./logo.png";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Providers from "./providers";
import { Toaster } from "sonner";
import MarqueeText from "@/components/runnning-text";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MTSS AL-AQSHA",
  description: "DATA SEKOLAH MTSS AL-AQSHA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <Providers>
          {/* Header */}
              <div className="flex items-center gap-4 ml-20">
                <div className="relative group">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={70}
                    className="transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                  />
                  <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-30"></span>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-700/90 to-cyan-600/90 bg-clip-text text-transparent drop-shadow-md">
                    MTSS Al-Aqsha
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-600 tracking-wide">
                    Kelapa Gading Timur
                  </p>
                </div>
          
              </div>
          <header className="w-full bg-white shadow-md sticky top-0 z-30">
              <Navbar />
            <MarqueeText />
          </header>

          {/* Konten Utama */}
          <main className="flex-1">{children}</main>

          {/* Toast dalam provider */}
          <Toaster />

          {/* Footer */}
          {/* <footer className="bg-gray-800 text-white p-4 mt-auto text-center text-sm tracking-wide">
            COPYRIGHT © 2025 — MTSS AL-AQSHA KELAPA GADING TIMUR
          </footer> */}
        </Providers>
      </body>
    </html>
  );
}
