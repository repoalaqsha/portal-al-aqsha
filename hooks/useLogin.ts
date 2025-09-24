"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type LoginPayload = {
  username: string;
  password: string;
};

async function loginUser(payload: LoginPayload) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Login gagal");
  }

  const data = await res.json();

  // simpan token di localStorage
  localStorage.setItem("token", data.token);

  return data;
}

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/admin-area/dashboard");
    },
  });
}
