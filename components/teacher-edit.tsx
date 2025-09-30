"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Teacher } from "@/types/SchoolTypes";

type TeacherFormProps = {
  initialData?: Teacher | null;
  onSubmit: (formData: FormData) => void;
  isPending?: boolean;
};

export default function TeacherForm({
  initialData,
  onSubmit,
  isPending,
}: TeacherFormProps) {
  const [nip, setNip] = useState(initialData?.nip || "");
  const [name, setName] = useState(initialData?.name || "");
  const [jabatan, setJabatan] = useState(initialData?.jabatan || "");
  const [pesan, setPesan] = useState(initialData?.pesan || "");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("nip", nip);
    formData.append("name", name);
    formData.append("jabatan", jabatan);
    formData.append("pesan", pesan);
    if (file) formData.append("image", file);
    onSubmit(formData);
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="NIP"
        value={nip}
        onChange={(e) => setNip(e.target.value)}
      />
      <Input
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Jabatan"
        value={jabatan}
        onChange={(e) => setJabatan(e.target.value)}
      />
      <Input
        placeholder="Pesan"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
      />

      {/* 🔹 Upload Foto */}
      <div className="relative w-40 h-40">
        {initialData?.imageUrl && !file ? (
          <div className="group relative w-full h-full">
            <Image
              src={initialData.imageUrl}
              alt="Teacher"
              fill
              className="object-cover rounded "
            />
            <label className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm opacity-0 group-hover:opacity-100 cursor-pointer rounded">
              Ganti
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
        ) : (
          <div className="border rounded p-2 flex items-center justify-center w-full h-full">
            
              <label >
                Tambah Gambar
                <input
              type="file"
                accept="image/*"
                hidden
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              />
              </label>
          </div>
        )}
      </div>

      <Button onClick={handleSubmit} disabled={isPending} className="w-full">
        {isPending ? "Menyimpan..." : "Simpan"}
      </Button>
    </div>
  );
}
