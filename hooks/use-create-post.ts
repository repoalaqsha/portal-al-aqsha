"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useCreatePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [style, setStyle] = useState("1");
  const [blocks, setBlocks] = useState<any[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Gagal membuat post");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Post berhasil dibuat 🎉");
      setTitle("");
      setAuthor("");
      setCategory("");
      setStyle("1");
      setBlocks([]);
      setFiles([]);

      const fileInput = document.getElementById(
        "fileInput"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    },
    onError: () => {
      toast.error("Gagal membuat post");
    }
  });
}
