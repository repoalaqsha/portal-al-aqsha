-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_blockId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PostBlock" DROP CONSTRAINT "PostBlock_postId_fkey";

-- AddForeignKey
ALTER TABLE "public"."PostBlock" ADD CONSTRAINT "PostBlock_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "public"."PostBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
