/*
  Warnings:

  - A unique constraint covering the columns `[nip]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nip` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Teacher" ADD COLUMN     "nip" TEXT NOT NULL,
ALTER COLUMN "imageUrl" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."SchoolProfile" (
    "id" TEXT NOT NULL,
    "namaSekolah" TEXT NOT NULL,
    "jenisSekolah" TEXT NOT NULL,
    "nss" TEXT,
    "npsn" TEXT,
    "tanggalBerdiri" TIMESTAMP(3),
    "akreditasi" TEXT,
    "programJurusan" TEXT,
    "izinOperasional" TEXT,
    "luasTanah" INTEGER,
    "kurikulum" TEXT,
    "jamAktif" INTEGER,
    "jumlahGuruStaff" INTEGER,
    "jumlahSiswa" INTEGER,
    "jumlahRombel" INTEGER,
    "jumlahPrestasi" INTEGER,
    "sloganSekolah" TEXT,
    "kepsek" TEXT,
    "nipKepsek" TEXT,
    "masaKerja" TEXT,
    "izinMemimpin" TEXT,
    "statusKepegawaian" TEXT,
    "pendidikanTerakhir" TEXT,
    "deskripsiSekolah" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SchoolProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Visitor" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "readAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Visitor_postId_visitorId_key" ON "public"."Visitor"("postId", "visitorId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_nip_key" ON "public"."Teacher"("nip");

-- AddForeignKey
ALTER TABLE "public"."Visitor" ADD CONSTRAINT "Visitor_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
