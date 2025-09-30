// =====================
// Enums
// =====================
export enum Category {
  BERITA = "BERITA",
  INFO = "INFO",
  PENGUMUMAN = "PENGUMUMAN",
  PRESTASI = "PRESTASI",
  PPDB = "PPDB",
}

export enum BlockType {
  PARAGRAPH = "PARAGRAPH",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

// =====================
// Base Models (FE version)
// =====================
export interface User {
  id: string;
  username: string;
  email?: string | null;
  createdAt: string; // ISO date
}

// ---------------------
export interface Post {
  id: string;
  title: string;
  style: number;
  category: Category;
  author: string;
  createdAt: string; // ISO date

  blocks: PostBlock[];
  visitors: Visitor[];
}

// ---------------------
export interface PostBlock {
  id: string;
  type: BlockType;
  content?: string | null;
  order: number;
  postId: string;

  image?: Image | null;
}

// ---------------------
export interface Image {
  id: string;
  url: string;
  caption?: string | null;
  blockId: string;
  publicId?: string | null;
}

// ---------------------
export interface Teacher {
  id: string;
  name: string;
  nip?: string | null;
  jabatan: string;
  pesan: string;
  imageUrl?: string | null;
  publicId?: string | null;
}

// ---------------------
export interface VisiMisi {
  id: string;
  visi: string;
  misi: string;
}

// ---------------------
export interface Contact {
  id: string;
  email: string;
  address: string;
  phone: string;
}

// ---------------------
export interface Sosmed {
  id: string;
  sosmedName: string;
  sosmedUrl: string;
}

// ---------------------
export interface SchoolProfile {
  id: string;
  namaSekolah: string;
  jenisSekolah: string;
  nss?: string | null;
  npsn?: string | null;
  tanggalBerdiri?: string | null; // ISO date
  akreditasi?: string | null;
  programJurusan?: string | null;
  izinOperasional?: string | null;
  luasTanah?: number | null;
  kurikulum?: string | null;
  jamAktif?: number | null;
  jumlahGuruStaff?: number | null;
  jumlahSiswa?: number | null;
  jumlahRombel?: number | null;
  jumlahPrestasi?: number | null;
  sloganSekolah?: string | null;
  kepsek?: string | null;
  nipKepsek?: string | null;
  masaKerja?: string | null;
  izinMemimpin?: string | null;
  statusKepegawaian?: string | null;
  pendidikanTerakhir?: string | null;
  deskripsiSekolah?: string | null;

  createdAt: string;
  updatedAt: string;
}

// ---------------------
export interface Visitor {
  id: string;
  postId: string;
  visitorId: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  readAt: string; // ISO date
}
