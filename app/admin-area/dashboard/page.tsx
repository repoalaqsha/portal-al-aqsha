"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BtnLogout from "@/components/btn-logout";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

      <div className="flex gap-4">
        <Button
          onClick={() => router.push("/admin-area/dashboard/create-post")}
          className="rounded-2xl px-6 py-2 shadow-md"
        >
          ➕ Create Post
        </Button>

       <BtnLogout/>
      </div>
    </div>
  );
}
