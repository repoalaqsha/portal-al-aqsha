-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('BERITA', 'INFO', 'PENGUMUMAN', 'PRESTASI', 'PPDB');

-- CreateEnum
CREATE TYPE "public"."BlockType" AS ENUM ('PARAGRAPH', 'IMAGE', 'VIDEO');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "style" INTEGER NOT NULL,
    "category" "public"."Category" NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'Hamba_Allah',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PostBlock" (
    "id" SERIAL NOT NULL,
    "type" "public"."BlockType" NOT NULL,
    "content" TEXT,
    "order" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PostBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "caption" TEXT,
    "blockId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "pesan" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VisiMisi" (
    "id" SERIAL NOT NULL,
    "visi" TEXT NOT NULL,
    "misi" TEXT NOT NULL,

    CONSTRAINT "VisiMisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sosmed" (
    "id" SERIAL NOT NULL,
    "sosmedName" TEXT NOT NULL,
    "sosmedUrl" TEXT NOT NULL DEFAULT 'www.example.com',

    CONSTRAINT "Sosmed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Image_blockId_key" ON "public"."Image"("blockId");

-- AddForeignKey
ALTER TABLE "public"."PostBlock" ADD CONSTRAINT "PostBlock_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "public"."PostBlock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
