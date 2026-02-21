"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Bitcoin Loan App</h1>
      <p className="mb-8 text-center">
        Get instant Bitcoin-backed loans with 10% collateral
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/register")}
          className="bg-green-600 px-6 py-3 rounded"
        >
          Register
        </button>
        <button
          onClick={() => router.push("/login")}
          className="bg-zinc-800 px-6 py-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
