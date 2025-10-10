"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { getYoutubeEmbedUrl } from "@/utils/youtube";
import Reveal from "./reveal";
import { Post, PostBlock } from "@/types/SchoolTypes";
import VisitorCount from "./visitor-count";
import HoverLiftAnimated from "./hover-animated";

async function fetchPosts(category: string) {
  const url = new URL("/api/posts", window.location.origin);
  url.searchParams.set("limit", "3"); 
  url.searchParams.set("category", category);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function PostsAside({
  category = "",
}: {
  category?: string;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["aside-posts", category],
    queryFn: () => fetchPosts(category),
  });

  if (isLoading) return <p>Loading</p>
  if (error) return <p>Gagal memuat berita</p>;

  return (
    <aside className="lg:col-span-3 bg-white     shadow-md hover:shadow-xl transition-shadow rounded-xl p-6  flex flex-col gap-2 relative">
      <h2 className="text-lg font-bold border-b border-gray-300">
        Trending Topics
      </h2>

      <div className="space-y-2">
        {data?.posts?.slice(0, 3).map((post: Post) => {
          const firstImage = post.blocks.find(
            (b: PostBlock) => b.type === "IMAGE" && b.image
          );
          const firstVideo = post.blocks.find(
            (b: PostBlock) => b.type === "VIDEO"
          );

          return (
            <Reveal key={post.id}>
              <HoverLiftAnimated>
                <Link href={`/berita/${post.id}`} className="flex  gap-3 group ">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 flex-shrink-0 ">
                    {firstImage ? (
                      <Image
                        src={firstImage.image?.url || ""}
                        alt={firstImage.image?.caption || "Thumbnail"}
                        fill
                        sizes="18rem"
                        className="object-cover rounded-md"
                      />
                    ) : firstVideo ? (
                      <iframe
                        src={getYoutubeEmbedUrl(firstVideo.content ?? "")}
                        title="Video"
                        className="w-20 h-20 rounded-md"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center bg-gray-200 text-gray-500 text-xs rounded-md">
                        No Media
                      </div>
                    )}
                  </div>

                  {/* Info singkat */}
                  <div className="">
                    <p className="font-semibold  group-hover:text-teal-600 line-clamp-2">
                      {post.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString("id-ID")}
                    </p>
                    <p className="text-gray-500 ">
                      {post.author} • {post.category}
                    </p>
                    <VisitorCount postId={post.id} />
                  </div>
                </Link>
              </HoverLiftAnimated>
            </Reveal>
          );
        })}
      </div>
    </aside>
  );
}
