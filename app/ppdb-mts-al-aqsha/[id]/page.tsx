"use client";

import { useParams } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import PostForm from "@/components/PostForm";
import Loading from "@/app/loading";
import PostVisitorTracker from "@/components/post-visitors";
import VisitorCount from "@/components/visitor-count";

export default function EditPostPage() {
  const { data: user, isLoading: authLoading } = useAuth();
  const params = useParams();
  const id = params?.id as string;

  // 🔎 Ambil data post
  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await fetch(`/api/posts/${id}`);
      if (!res.ok) throw new Error("Gagal ambil post");
      return res.json();
    },
  });

  // 🚀 Update post
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (!res.ok) throw new Error("Gagal update post");
      return res.json();
    },
    onSuccess: () => toast.success("Post berhasil diupdate"),
    onError: () => toast.error("Gagal update post"),
  });

  if (authLoading || postLoading) {
    return <Loading />;
  }

  if (!post) {
    return <p>Post tidak ditemukan</p>;
  }

  return (
    <div>
      <PostVisitorTracker postId={id} />
      <VisitorCount postId={ id} />
      <PostForm
        mode="edit"
        initialData={post}
        onSubmit={(formData) => mutation.mutateAsync(formData)}
        isPending={mutation.isPending}
        user={user}
      />
    </div>
  );
}
