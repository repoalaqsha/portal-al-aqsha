"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getYoutubeEmbedUrl } from "@/utils/youtube";
import { DeletePostButton } from "./btn-delete-post";

type Block = {
  id: string;
  type: "PARAGRAPH" | "IMAGE" | "VIDEO";
  content?: string;
  caption?: string;
  file?: File;
  url?: string;
  image?: {
    id: number;
    url: string;
    caption: string;
    blockId: number;
  } | null;
};

type PostFormProps = {
  mode?: "create" | "edit";
  initialData?: any;
  onSubmit: (formData: FormData) => Promise<any>;
  isPending?: boolean;
  user?: any; // 🔥 auth dipass lewat props
};

export default function PostForm({
  mode = "create",
  initialData,
  onSubmit,
  isPending,
  user,
}: PostFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("BERITA");
  const [style, setStyle] = useState(1);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isEditing, setIsEditing] = useState(mode === "create");

  // Prefill saat edit
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setCategory(initialData.category);
      setStyle(initialData.style);

      const mappedBlocks: Block[] = initialData.blocks.map((b: any) => ({
        id: b.id.toString(),
        type: b.type,
        content: b.type === "PARAGRAPH" || b.type === "VIDEO" ? b.content : "",
        caption: b.type === "IMAGE" ? b.image?.caption : "",
        url: b.type === "IMAGE" ? b.image?.url : undefined,
        image: b.image || null,
      }));

      setBlocks(mappedBlocks);
    }
  }, [initialData]);

  // 🔄 reorder
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const reordered = Array.from(blocks);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setBlocks(reordered);
  };

  // ➕ Tambah block
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

  // 🔄 Update block
  const updateBlock = (id: string, data: Partial<Block>) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, ...data } : b)));
  };

  // 🚀 Submit
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("style", String(style));

    formData.append(
      "blocks",
      JSON.stringify(
        blocks.map((b, index) => ({
          id: b.id,
          type: b.type,
          content:
            b.type === "PARAGRAPH" || b.type === "VIDEO"
              ? b.content
              : undefined,
          caption:
            b.type === "IMAGE" || b.type === "VIDEO" ? b.caption : undefined,
          order: index + 1,
          url: b.url,
        }))
      )
    );

    blocks.forEach((b) => {
      if (b.file) formData.append("files", b.file);
    });

    await onSubmit(formData);
  };

  // ================= VIEW MODE =================
  if (!isEditing) {
    return (
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">
          By {author} • {category}
        </p>

        {blocks.map((block) =>
          block.type === "PARAGRAPH" ? (
            <p key={block.id} className="text-gray-700 leading-relaxed">
              {block.content}
            </p>
          ) : block.type === "IMAGE" && block.url ? (
            <div key={block.id} className="space-y-2">
              <Image
                src={block.url}
                alt={block.caption || "Post image"}
                width={600}
                height={400}
                className="rounded"
              />
              {block.caption && (
                <p className="text-sm text-gray-500">{block.caption}</p>
              )}
            </div>
          ) : block.type === "VIDEO" ? (
            <div key={block.id} className="aspect-video">
              <iframe
                src={getYoutubeEmbedUrl(block.content ?? "")}
                className="w-full h-full rounded"
                allowFullScreen
              />
              {block.caption && (
                <p className="text-sm text-gray-500">{block.caption}</p>
              )}
            </div>
          ) : null
        )}
        {/* 🔥 tombol edit hanya muncul kalau ada user */}
        {user && <Button onClick={() => setIsEditing(true)}>Edit</Button>}
      </div>
    );
  }

  // ================= EDIT MODE =================
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
          {(provided: any) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided: any) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 my-2 space-y-2"
                    >
                      {/* isi block */}
                      {block.type === "PARAGRAPH" && (
                        <Textarea
                          placeholder="Isi paragraf"
                          value={block.content}
                          onChange={(e) =>
                            updateBlock(block.id, { content: e.target.value })
                          }
                        />
                      )}

                      {block.type === "VIDEO" && (
                        <div className="space-y-2">
                          <Input
                            placeholder="Link YouTube / Vimeo"
                            value={block.content}
                            onChange={(e) =>
                              updateBlock(block.id, { content: e.target.value })
                            }
                          />
                          {block.content && (
                            <div className="aspect-video">
                              <iframe
                                src={getYoutubeEmbedUrl(block.content)}
                                className="w-full h-full rounded"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {block.type === "IMAGE" && (
                        <div className="space-y-2">
                          {block.file ? (
                            <Image
                              src={URL.createObjectURL(block.file)}
                              alt="preview baru"
                              width={300}
                              height={200}
                              className="rounded"
                            />
                          ) : block.url ? (
                            <Image
                              src={block.image?.url || block.url || ""}
                              alt={block.image?.caption || "Gambar"}
                              width={300}
                              height={200}
                              className="rounded"
                            />
                          ) : (
                            <p className="text-sm text-gray-500">
                              Belum ada gambar
                            </p>
                          )}

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

                          <Input
                            placeholder="Caption"
                            value={block.caption}
                            onChange={(e) =>
                              updateBlock(block.id, { caption: e.target.value })
                            }
                          />
                        </div>
                      )}

                      <Button
                        variant="destructive"
                        onClick={() => removeBlock(block.id)}
                      >
                        Hapus Block
                      </Button>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button className="w-full" onClick={handleSubmit} disabled={isPending}>
        {isPending
          ? "Menyimpan..."
          : mode === "edit"
          ? "Update Post"
          : "Simpan Post"}
      </Button>
      <Button
        variant="secondary"
        className="w-full"
        onClick={() => setIsEditing(false)}
      >
        Batal
      </Button>
      {mode === "edit" && initialData?.id && (
        <DeletePostButton postId={initialData.id} />
      )}
    </div>
  );
}
