"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    if (user) router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form className="bg-zinc-900 p-8 rounded-xl w-full max-w-md" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <input type="email" placeholder="Email" className="w-full mb-6 p-3 rounded bg-zinc-800"
               onChange={(e) => setEmail(e.target.value)} required />
        <button className="w-full bg-green-600 p-3 rounded font-semibold">Login</button>
      </form>
    </div>
  );
}
