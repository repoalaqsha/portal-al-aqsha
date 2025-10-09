"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus, Pencil, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../app/logo.png";
import useEmblaCarousel from "embla-carousel-react";
import TeacherFormModal from "@/components/teacher-form-modal";
import { useAuth } from "@/hooks/useAuth";
import LoadingText from "@/app/loading";
import { Teacher } from "@/types/SchoolTypes";
import { useDeleteTeacher } from "@/hooks/useTeachers";

export default function TeacherCarousel() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const { data: user } = useAuth();

  const { mutate: deleteTeacher, isPending: deleting } = useDeleteTeacher();

  const [emblaRef] = useEmblaCarousel({ loop: true });
  const loaderRef = useRef<HTMLDivElement | null>(null);

const loadedPages = useRef(new Set<number>());

async function fetchTeachers(pageNum: number) {
  if (loadedPages.current.has(pageNum)) return; // ✅ skip kalau sudah pernah load
  loadedPages.current.add(pageNum);

  setLoading(true);
  const res = await fetch(`/api/teachers?skip=${pageNum * 6}&take=6`);
  const data = await res.json();

  if (!data.teachers || data.teachers.length === 0) {
    setHasMore(false);
  } else {
    setTeachers((prev) => [...prev, ...data.teachers]);
  }
  setLoading(false);
}


  // 🚀 Load pertama kali
  useEffect(() => {
    fetchTeachers(page);
  }, [page]);

  // 🔥 Infinite scroll pakai IntersectionObserver
  useEffect(() => {
    if (!hasMore || loading) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading]);

  return (
    <div className="relative w-full col-span-1 lg:col-span-6 mb-20 lg:mb-0 pt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Daftar Guru</h2>
        {user && (
          <Button
            onClick={() => {
              setSelectedTeacher(null);
              setOpen(true);
            }}
          >
            <Plus className="w-4 h-4 mr-1" /> Tambah
          </Button>
        )}
      </div>

      {/* Wrapper embla → mobile jadi flex-col, desktop flex-row */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-col md:flex-row md:gap-2">
          {teachers.map((t) => (
            <Card
              key={t.id}
              className="w-full md:w-[18rem] h-auto md:h-[30rem] m-2 flex-shrink-0 shadow-md hover:shadow-lg hover:scale-100 hover:md:scale-105 transition-transform duration-300"
            >
              <CardContent className="flex flex-col items-center justify-between h-full cursor-grab active:cursor-grabbing">
                <div className="flex flex-col items-center">
                  <Image
                    src={t.imageUrl || logo.src}
                    alt={t.name}
                    width={120}
                    height={120}
                    className="object-cover w-60 h-70"
                    priority
                  />
                  <h3 className="mt-6 font-bold text-center capitalize">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500 capitalize">
                    {t.jabatan}
                  </p>
                  {t.nip && (
                    <p className="text-xs text-gray-400 mt-1">NIP: {t.nip}</p>
                  )}
                </div>

                {user && (
                  <div className="flex gap-2 mt-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedTeacher(t);
                        setOpen(true);
                      }}
                    >
                      <Pencil className="w-4 h-4 mr-1" /> Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={deleting}
                      onClick={() => deleteTeacher(t.id)}
                    >
                      <Trash className="w-4 h-4 mr-1" /> Hapus
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Loader infinite scroll */}
      {hasMore && (
        <div ref={loaderRef} className="text-center py-6">
          {loading ? (
            <LoadingText />
          ) : (
            <p className="text-gray-500">Scroll untuk load lebih banyak...</p>
          )}
        </div>
      )}

      {open && (
        <TeacherFormModal
          open={open}
          onClose={() => setOpen(false)}
          teacher={selectedTeacher}
        />
      )}
    </div>
  );
}
