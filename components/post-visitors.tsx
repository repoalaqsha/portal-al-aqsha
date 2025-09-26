"use client";
import { useEffect } from "react";

export default function PostVisitorTracker({ postId }: { postId: string }) {
  useEffect(() => {
    fetch(`/api/posts/${postId}/visitor`, { method: "POST" }).catch(() => {});
  }, [postId]);

  return null;
}
