"use client";
import Marquee from "react-fast-marquee";
export default function MarqueeText() {
  return (
    <Marquee
      gradient={false}
      speed={60}
      className="bg-black text-white"
      autoFill
      pauseOnClick
    >
      Selamat Datang di Website MTSS Al-Aqsha — Informasi terbaru PPDB — Hubungi
      admin untuk info lebih lanjut ✨
    </Marquee>
  );
}
