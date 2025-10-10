"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function VisiMisiSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visiMisi, setVisiMisi] = useState<{
    id: string;
    visi: string;
    misi: string;
  } | null>(null);
  const [progress, setProgress] = useState(0); // progress dari scroll
  const [isEditing, setIsEditing] = useState(false);
  const [editVisi, setEditVisi] = useState("");
  const [editMisi, setEditMisi] = useState("");

  // Ambil data dari backend
  useEffect(() => {
    fetch("/api/visi-misi")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setVisiMisi(data[0]);
          setEditVisi(data[0].visi);
          setEditMisi(data[0].misi);
        } else if (data.visi && data.misi) {
          setVisiMisi(data);
          setEditVisi(data.visi);
          setEditMisi(data.misi);
        }
      })
      .catch((err) => console.error("Failed to fetch visi misi:", err));
  }, []);

  // Animasi scroll (progress global)
  useEffect(() => {
    if (!visiMisi) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const scrollPosition = windowHeight - rect.top;
      const newProgress = Math.min(
        Math.max(scrollPosition / sectionHeight, 0),
        1
      );

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visiMisi]);

  if (!visiMisi)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  // Hitung karakter yang ditampilkan berdasarkan progress
  const visiVisibleCount = Math.floor(progress * visiMisi.visi.length);
  const misiVisibleCount = Math.floor(progress * visiMisi.misi.length);

  const displayedVisi = visiMisi.visi.slice(0, visiVisibleCount);
  const displayedMisi = visiMisi.misi.slice(0, misiVisibleCount);

  const isComplete =
    visiVisibleCount === visiMisi.visi.length &&
    misiVisibleCount === visiMisi.misi.length;

  const handleSave = async () => {
    if (!visiMisi?.id) return;
    await fetch(`/api/visi-misi/${visiMisi.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visi: editVisi, misi: editMisi }),
    });
    setVisiMisi({ ...visiMisi, visi: editVisi, misi: editMisi });
    setIsEditing(false);
  };

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-60 flex flex-col items-center bg-white px-6">
        <div className="max-w-3xl text-center text-gray-800 leading-relaxed">
          {/* === Visi === */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-semibold mb-4">Visi:</p>
            <p className="text-lg md:text-xl">
              {displayedVisi.split("").map((char, i) => (
                <span
                  key={`visi-${i}`}
                  className="inline-block transition-all duration-75 ease-linear"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {visiVisibleCount < visiMisi.visi.length && (
                <span className="border-r-2 border-gray-700 animate-caret-blink ml-1" />
              )}
            </p>
          </div>

          {/* === Misi === */}
          <div>
            <p className="text-2xl md:text-3xl font-semibold mb-4">Misi:</p>
            <p className="text-lg md:text-xl">
              {displayedMisi.split("").map((char, i) => (
                <span
                  key={`misi-${i}`}
                  className="inline-block transition-all duration-75 ease-linear"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {misiVisibleCount < visiMisi.misi.length && (
                <span className="border-r-2 border-gray-700 animate-caret-blink ml-1" />
              )}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>

        {/* Modal Edit */}
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Visi & Misi</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4 mt-2">
              <div>
                <p className="font-medium mb-1">Visi</p>
                <Textarea
                  value={editVisi}
                  onChange={(e) => setEditVisi(e.target.value)}
                  rows={3}
                  className="w-full"
                />
              </div>
              <div>
                <p className="font-medium mb-1">Misi</p>
                <Textarea
                  value={editMisi}
                  onChange={(e) => setEditMisi(e.target.value)}
                  rows={5}
                  className="w-full"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setIsEditing(false)}>
                  Batal
                </Button>
                <Button onClick={handleSave}>Simpan</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
