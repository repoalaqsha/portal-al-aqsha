"use client";
import dynamic from "next/dynamic";

// lazy load TeacherCarousel (di luar komponen)
const TeacherCarousel = dynamic(() => import("@/components/teacher-carousel"), {
  ssr: false,
  loading: () => <p>Loading guru...</p>,
});

export default function GuruPage() {
  return (
    <div className="w-[90%] max-w-6xl mx-auto px-4">
      <TeacherCarousel />
    </div>
  );
}
