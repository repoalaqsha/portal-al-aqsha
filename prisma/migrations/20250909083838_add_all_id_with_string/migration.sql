/*
  Warnings:

  - The primary key for the `Contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostBlock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Sosmed` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `VisiMisi` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_blockId_fkey";

-- AlterTable
ALTER TABLE "public"."Contact" DROP CONSTRAINT "Contact_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Contact_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Contact_id_seq";

-- AlterTable
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "blockId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Image_id_seq";

-- AlterTable
ALTER TABLE "public"."PostBlock" DROP CONSTRAINT "PostBlock_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PostBlock_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "PostBlock_id_seq";

-- AlterTable
ALTER TABLE "public"."Sosmed" DROP CONSTRAINT "Sosmed_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Sosmed_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Sosmed_id_seq";

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "public"."VisiMisi" DROP CONSTRAINT "VisiMisi_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "VisiMisi_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "VisiMisi_id_seq";

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "public"."PostBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
