"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTeachers, useDeleteTeacher } from "@/hooks/useTeachers";
import Image from "next/image";
import { Plus, Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import TeacherFormModal from "@/components/teacher-form-modal";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/app/loading";
import LoadingText from "@/app/loading";


export default function TeacherCarousel() {
  const { data: teachers, isLoading } = useTeachers();
  const { mutate: deleteTeacher, isPending: deleting } = useDeleteTeacher();
const [showLoading, setShowLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const { data: user } = useAuth();

  const [emblaRef] = useEmblaCarousel({ loop: true });

 useEffect(() => {
   if (!isLoading) {
     // walaupun data udah ready, tetap tampilkan loading minimal 3 detik
     const timer = setTimeout(() => setShowLoading(false), 3000);
     return () => clearTimeout(timer);
   }
 }, [isLoading]);

 if (showLoading) {
   return <LoadingText />;
 }

  return (
    <div className="relative ">
      <div className="flex justify-between  items-center mb-4">
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

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {teachers?.map((t: any) => (
            <Card
              key={t.id}
              className="w-[15rem] h-[22rem] m-2 flex-shrink-0 shadow-md"
            >
              <CardContent className="p- flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  <Image
                    src={t.imageUrl}
                    alt={t.name}
                    width={120}
                    height={120}
                    className="object-cover w-40 h-40"
                    loading="lazy"
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
