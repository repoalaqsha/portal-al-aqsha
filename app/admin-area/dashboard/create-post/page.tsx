"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getYoutubeEmbedUrl } from "@/utils/youtube";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

type Block = {
  id: string;
  type: "PARAGRAPH" | "IMAGE" | "VIDEO";
  content?: string;
  caption?: string;
  file?: File;
};

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("BERITA");
  const [style, setStyle] = useState(1);
  const [blocks, setBlocks] = useState<Block[]>([]);

  // 🔄 reorder block
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(blocks);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setBlocks(reordered);
  };

  // ➕ Tambah block baru
  const addBlock = (type: Block["type"]) => {
    setBlocks([
      ...blocks,
      { id: crypto.randomUUID(), type, content: "", caption: "" },
    ]);
  };

  // 🗑 Hapus block
  const removeBlock = (id: string) => {
    setBlocks(blocks.filter((b) => b.id !== id));
  };

  // 🔄 Update isi block
  const updateBlock = (id: string, data: Partial<Block>) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, ...data } : b)));
  };

  // 🚀 Submit pakai Tanstack
  const mutation = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("category", category);
      formData.append("style", String(style));

      // Kirim block JSON + files
      formData.append(
        "blocks",
        JSON.stringify(
          blocks.map((b, index) => ({
            type: b.type,
            content:
              b.type === "PARAGRAPH" || b.type === "VIDEO"
                ? b.content ?? ""
                : undefined,
            caption: b.type === "IMAGE" ? b.caption ?? "" : undefined,
            order: index + 1,
            newFileIndex: b.type === "IMAGE" && b.file ? index : undefined,
          }))
        )
      );

      // append file
      blocks.forEach((b) => {
        if (b.file) formData.append("files", b.file);
      });

      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create post");
      return res.json();
    },
    onSuccess: () => {
      toast.success("berhasil membuat post");
      setTitle("");
      setAuthor("");
      setBlocks([]);
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <Input
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded p-2"
      >
        <option value="BERITA">Berita</option>
        <option value="INFO">Info</option>
        <option value="PENGUMUMAN">Pengumuman</option>
        <option value="PRESTASI">Prestasi</option>
        <option value="PPDB">PPDB</option>
      </select>

      <select
        value={style}
        onChange={(e) => setStyle(Number(e.target.value))}
        className="border rounded p-2"
      >
        <option value={1}>Style 1</option>
        <option value={2}>Style 2</option>
        <option value={3}>Style 3</option>
      </select>

      <div className="flex gap-2">
        <Button onClick={() => addBlock("PARAGRAPH")}>+ Paragraph</Button>
        <Button onClick={() => addBlock("IMAGE")}>+ Image</Button>
        <Button onClick={() => addBlock("VIDEO")}>+ Video</Button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="blocks">
          {(provided: DroppableProvided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided: DraggableProvided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 my-2 cursor-grab active:cursor-grabbing"
                    >
                      <div className="flex justify-between items-start gap-4">
                        {/* Konten block */}
                        <div className="flex-1 space-y-2">
                          {block.type === "PARAGRAPH" && (
                            <Textarea
                              placeholder="Isi paragraf"
                              value={block.content}
                              onChange={(e) =>
                                updateBlock(block.id, {
                                  content: e.target.value,
                                })
                              }
                            />
                          )}

                          {block.type === "IMAGE" && (
                            <div className="space-y-2">
                              {block.file ? (
                                <Image
                                  src={URL.createObjectURL(block.file)}
                                  alt="preview"
                                  width={300}
                                  height={200}
                                  className="rounded"
                                />
                              ) : (
                                <Input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                      updateBlock(block.id, {
                                        file: e.target.files[0],
                                      });
                                    }
                                  }}
                                />
                              )}
                              <Input
                                placeholder="Caption"
                                value={block.caption}
                                onChange={(e) =>
                                  updateBlock(block.id, {
                                    caption: e.target.value,
                                  })
                                }
                              />
                            </div>
                          )}

                          {block.type === "VIDEO" && (
                            <div className="space-y-2">
                              <Input
                                placeholder="Link video (YouTube share)"
                                value={block.content}
                                onChange={(e) =>
                                  updateBlock(block.id, {
                                    content: e.target.value,
                                  })
                                }
                              />
                              {block.content && (
                                <div className="aspect-video w-full">
                                  <iframe
                                    src={getYoutubeEmbedUrl(block.content)}
                                    title="Video Preview"
                                    allowFullScreen
                                    className="w-full h-full rounded"
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Tombol hapus di kanan */}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeBlock(block.id)}
                          className="shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button
        className="w-full"
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Menyimpan..." : "Simpan Post"}
      </Button>
    </div>
  );
}
