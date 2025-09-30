"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Post, PostBlock } from "@/types/SchoolTypes";

// 🔹 fetch posts
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

export default function Berita({ category = "BERITA" }: { category?: string }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const { data } = useInfiniteQuery({
    queryKey: ["posts-carousel", category],
    queryFn: ({ pageParam }) => fetchPosts({ pageParam, category }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: null,
  });

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  return (
    <div className="overflow-hidden relative" ref={emblaRef}>
      <div className="flex">
        {posts.map((post: Post) => {
          const firstImage = post.blocks.find(
            (b: PostBlock) => b.type === "IMAGE" && b.image
          );
          const bgImage = firstImage?.image?.url;

          return (
            <div
              key={post.id}
              className="min-w-full flex-shrink-0 flex items-center justify-center"
            >
              <Link
                href={`/berita/${post.id}`}
                className="group relative w-full h-[220px] md:h-[420px] overflow-hidden shadow-xl rounded-"
              >
                {/* Background image */}
                {bgImage && (
                  <Image
                    src={bgImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-24 left-6 right-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg leading-snug">
                    {post.title}
                  </h2>
                </div>

                {/* Tombol Selengkapnya */}
           
                <div
                  className="
      absolute bottom-6 left-6
      transform translate-y-20 opacity-0
      group-hover:translate-y-0 group-hover:opacity-100
      transition-all duration-1000
    "
                >
                  <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-teal-400/50  px-5 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                    Selengkapnya →
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Indicator dummy */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {posts.map((_: Post, i: number) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
