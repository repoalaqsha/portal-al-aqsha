import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function BtnLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.refresh()
  };
    return (
      <Button variant="outline" onClick={handleLogout}>
        🚪 Logout
      </Button>
    );
}
