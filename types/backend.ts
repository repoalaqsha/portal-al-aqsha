// types/backend.ts
import {
  Category,
  BlockType,
  Post,
  PostBlock,
  Teacher,
  SchoolProfile,
} from "@/types/SchoolTypes"; // FE types

// Versi BE untuk FormData Post
export interface PostFormValues {
  title: string;
  category: Category;
  style: number;
  author: string;
  blocks: {
    id: string;
    type: BlockType;
    url: string;
    publicId?: string|null;
    content?: string | null;
    order?: number;
    caption?: string | null;
  }[];
  files: File[];
}

// Versi BE setelah parsing (tanpa File, siap masuk DB)
export type PostCreateInput = Omit<PostFormValues, "files"> & {
  blocks: (
    | {
        type: BlockType.PARAGRAPH | BlockType.VIDEO;
        order: number;
        content: string;
      }
    | {
        type: BlockType.IMAGE;
        order: number;
        image: {
          url: string;
          publicId?: string | null;
          caption?: string | null;
        };
      }
  )[];
};


// Versi BE TeacherFormValues (tanpa createdAt/updatedAt)
export type TeacherFormValuesBE = Omit<
  Teacher,
  "id" | "createdAt" | "updatedAt"
>;

