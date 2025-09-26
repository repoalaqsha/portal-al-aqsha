"use client";

import { useEffect, useState } from "react";

export default function VisitorCount({ postId }: { postId: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchVisitors() {
      const res = await fetch(`/api/posts/${postId}/visitor`);
      const data = await res.json();
      if (data.success) {
        setCount(data.count);
      }
    }
    fetchVisitors();
  }, [postId]);

  return <p className="text-xs text-gray-500">{count !== null ? `dilihat ${count} orang` : "Loading..."}</p>;
}
