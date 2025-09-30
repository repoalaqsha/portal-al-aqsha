"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { getYoutubeEmbedUrl } from "@/utils/youtube";
import Reveal from "@/components/reveal";
import VisitorCount from "@/components/visitor-count";
import { Post, PostBlock } from "@/types/SchoolTypes";

async function fetchPosts({
  pageParam = null,
  category,
}: {
  pageParam?: number | null;
  category?: string;
}) {
  const url = new URL("/api/posts", window.location.origin);
  url.searchParams.set("limit", "3");
  if (category) url.searchParams.set("category", category);
  if (pageParam) url.searchParams.set("cursor", String(pageParam));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function PostsPage({
  category = "PPDB",
}: {
  category?: string;
}) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", category],
      queryFn: ({ pageParam }) => fetchPosts({ pageParam, category }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: null,
    });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    observer.observe(loadMoreRef.current);
    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
      {data?.pages.map((page, i) =>
        page.posts.map((post: Post) => {
          const firstImage = post.blocks.find(
            (b: PostBlock) => b.type === "IMAGE" && b.image
          );
          const firstVideo = post.blocks.find((b: PostBlock) => b.type === "VIDEO");

          return (
            <Reveal key={post.id}>
              <Link href={`/ppdb-mts-al-aqsha/${post.id}`} className="group">
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition">
                      {post.title}
                      <Badge>{post.category}</Badge>
                    </CardTitle>

                    <p className="text-sm text-gray-500">
                      Oleh {post.author} •{" "}
                      {new Date(post.createdAt).toLocaleDateString("id-ID")}
                    </p>
                    <VisitorCount postId={post.id} />
                  </CardHeader>
                  <CardContent>
                    {post.style === 1 && firstImage && (
                      <div className="relative w-full h-48 md:h-100 mb-4">
                        <Image
                          src={firstImage.image?.url || ""}
                          alt={firstImage.image?.caption || "Thumbnail"}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    )}

                    {post.style === 2 && firstImage && (
                      <div className="relative w-full h-96 mb-4">
                        <Image
                          src={firstImage.image?.url || ""}
                          alt={firstImage.image?.caption || "Thumbnail"}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    )}

                    {post.style === 3 && firstVideo && (
                      <div className="aspect-video mb-4">
                        <iframe
                          src={getYoutubeEmbedUrl(firstVideo.content ?? "")}
                          title="Video"
                          className="w-full h-full rounded-xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {(() => {
                      const firstText = post.blocks.find(
                        (b: PostBlock) => b.type === "PARAGRAPH" && b.content
                      );
                      if (!firstText) return null;
                      const excerpt =
                        firstText?.content?.slice(0, 120) +
                        (firstText?.content && firstText.content.length > 120
                          ? "..."
                          : "");
                      return (
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                          {excerpt}
                        </p>
                      );
                    })()}

                    {!firstImage && !firstVideo && (
                      <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500 rounded-xl">
                        No Media
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          );
        })
      )}

      <div ref={loadMoreRef} className="col-span-full text-center py-6">
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Scroll untuk load lebih banyak..."
          : "Tidak ada lagi postingan"}
      </div>
    </div>
  );
}
