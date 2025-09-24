"use client"; // WAJIB di baris pertama

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // next/navigation untuk app router
import { useAuth } from "@/hooks/useAuth";
import Loading from "../loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { error, isLoading } = useAuth();

  useEffect(() => {
    if (error) {
      router.replace("/login");
    }
  }, [error, router]);

  if (isLoading) return <Loading />;
  return (
    <div className="w-full flex">
      <div className="w-[20%] "></div>
      <section className="flex-1 w-2/4 h-screen">{children}</section>
      <div className="w-[20%] "></div>
    </div>
  );
}
