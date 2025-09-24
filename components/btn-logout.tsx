import { Button } from "./ui/button";

export default function BtnLogout() {
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    window.location.reload()
  };
    return (
      <Button variant="outline" onClick={handleLogout}>
        🚪 Logout
      </Button>
    );
}
