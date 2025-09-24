"use client";

import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const res = await fetch("/api/auth/me", {
        credentials: "include", 
      });
      if (!res.ok) throw new Error("Unauthorized");
      return res.json();
    },
    retry: false,
  });
}
