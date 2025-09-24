"use client";
import dynamic from "next/dynamic";

// lazy load TeacherCarousel (di luar komponen)
const TeacherCarousel = dynamic(() => import("@/components/teacher-carousel"), {
  ssr: false,
  loading: () => <p>Loading guru...</p>,
});

export default function Page() {
  return (
    <div>
      <TeacherCarousel />
    </div>
  );
}
