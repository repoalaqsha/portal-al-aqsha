"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/hello").then((res) => setMessage(res.data.message));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Next.js Fullstack</h1>
      <p>{message}</p>
    </div>
  );
}
