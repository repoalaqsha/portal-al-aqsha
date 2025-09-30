"use client";

import LoadingText from "@/app/loading";
import { SchoolProfile } from "@/types/SchoolTypes";
import { useEffect, useState } from "react";

export default function SchoolProfilePage() {
  const [profile, setProfile] = useState<SchoolProfile|null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // 🔎 Ambil data dari API
  useEffect(() => {
    fetch("/api/school-profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProfile(data.profile);
        setLoading(false);
      });
  }, []);

  // 🚀 Simpan perubahan
  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/school-profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });
    setSaving(false);
    setIsEditing(false);
    alert("✅ Profil sekolah berhasil diupdate");
  }

  if (loading) return <LoadingText/>
  if (!profile)
    return <p className="text-center py-10">Profil sekolah tidak ditemukan.</p>;

  // 🔧 Input builder
  type SchoolProfileField = keyof SchoolProfile;
  const renderRow = (label: string, field: SchoolProfileField, type: string = "text") => (
    <tr className="border-b">
      <td className="p-2 font-medium text-gray-700 w-1/3">{label}</td>
      <td className="p-2 w-2/3">
        {isEditing ? (
          <input
            type={type}
            value={profile[field] || ""}
            onChange={(e) =>
              setProfile({ ...profile, [field]: e.target.value })
            }
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-teal-500"
          />
        ) : (
          <span className="text-gray-800">{profile[field] || "-"}</span>
        )}
      </td>
    </tr>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-4 text-teal-700">Profil Sekolah</h1>

      <form onSubmit={handleSave}>
        <table className="w-full border border-gray-200 text-sm">
          <tbody>
            {renderRow("Nama Sekolah", "namaSekolah")}
            {renderRow("Jenis Sekolah", "jenisSekolah")}
            {renderRow("NSS", "nss")}
            {renderRow("NPSN", "npsn")}
            {renderRow("Tanggal Berdiri", "tanggalBerdiri", "date")}
            {renderRow("Akreditasi", "akreditasi")}
            {renderRow("Program Jurusan", "programJurusan")}
            {renderRow("Izin Operasional", "izinOperasional")}
            {renderRow("Luas Tanah (m²)", "luasTanah", "number")}
            {renderRow("Kurikulum", "kurikulum")}
            {renderRow("Jam Aktif", "jamAktif", "number")}
            {renderRow("Jumlah Guru & Staff", "jumlahGuruStaff", "number")}
            {renderRow("Jumlah Siswa", "jumlahSiswa", "number")}
            {renderRow("Jumlah Rombel", "jumlahRombel", "number")}
            {renderRow("Jumlah Prestasi", "jumlahPrestasi", "number")}
            {renderRow("Slogan Sekolah", "sloganSekolah")}
            {renderRow("Kepala Sekolah", "kepsek")}
            {renderRow("NIP Kepala Sekolah", "nipKepsek")}
            {renderRow("Masa Kerja", "masaKerja")}
            {renderRow("Izin Memimpin", "izinMemimpin")}
            {renderRow("Status Kepegawaian", "statusKepegawaian")}
            {renderRow("Pendidikan Terakhir", "pendidikanTerakhir")}
            {renderRow("Deskripsi Sekolah", "deskripsiSekolah")}
          </tbody>
        </table>

        {/* Tombol */}
        <div className="mt-6 flex justify-end gap-3">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:opacity-50"
              >
                {saving ? "Menyimpan..." : "Simpan"}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
