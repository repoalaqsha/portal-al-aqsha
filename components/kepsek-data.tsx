"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useHeadTeachers } from "@/hooks/useTeachers";
import logo from "../app/logo.png";

type Guru = {
    id: number
    name: string
    imageUrl: string
    pesan: string
}
export default function KepalaSekolahSection() {
  const { data: kepalaSekolah, isLoading, isError } = useHeadTeachers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="text-red-600">Gagal memuat data</div>;
  if (!kepalaSekolah.length) {
    return <div>Tidak ada kepala sekolah terdaftar.</div>;
  }

  return (
    <div className="w-full space-y-6">
      {kepalaSekolah.map((guru: Guru) => (
        <Card
          key={guru.id}
          className="w-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
            {/* Foto */}
            
            <div className="w-44 h-60 md:w-48 md:h-64 shadow-sm relative flex-shrink-0">
              <Image
                src={guru.imageUrl || logo}
                alt={guru.name}
                fill
                sizes="18rem"
                className="rounded-xl object-cover "
              />
            </div>

            {/* Detail */}
            <div className="flex flex-col text-center md:text-left space-y-3">
              {guru.pesan && (
                <p className="text-gray-700 leading-relaxed text-justify">
                  {guru.pesan}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
