"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email }));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form className="bg-zinc-900 p-8 rounded-xl w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>
        <input type="email" placeholder="Email" className="w-full mb-4 p-3 rounded bg-zinc-800"
               onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full mb-6 p-3 rounded bg-zinc-800"
               onChange={(e) => setPassword(e.target.value)} required />
        <button className="w-full bg-green-600 p-3 rounded font-semibold">Register</button>
      </form>
    </div>
  );
}
