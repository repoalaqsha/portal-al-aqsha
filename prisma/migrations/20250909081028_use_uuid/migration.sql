/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."PostBlock" DROP CONSTRAINT "PostBlock_postId_fkey";

-- AlterTable
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Post_id_seq";

-- AlterTable
ALTER TABLE "public"."PostBlock" ALTER COLUMN "postId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."Teacher" DROP CONSTRAINT "Teacher_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Teacher_id_seq";

-- AddForeignKey
ALTER TABLE "public"."PostBlock" ADD CONSTRAINT "PostBlock_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
