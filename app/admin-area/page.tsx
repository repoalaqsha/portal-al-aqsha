"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
 const router = useRouter();
  return (
    <div className="w-full text-center ">
      <p>You are logged in!</p>
      <Button
        onClick={() => router.push("/admin-area/dashboard")}
        className="rounded-2xl px-6 py-2 shadow-md"
      >
        Go to Dashboard
      </Button>
    </div>
  );
}
