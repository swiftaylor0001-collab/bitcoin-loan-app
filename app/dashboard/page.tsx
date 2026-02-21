"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Status: No active loan</p>
      <div className="mt-6 flex gap-4">
        <button onClick={() => router.push("/dashboard/calculator")}
                className="bg-green-600 px-6 py-3 rounded">
          Calculator
        </button>
        <button onClick={() => router.push("/dashboard/apply")}
                className="bg-zinc-800 px-6 py-3 rounded">
          Apply for Loan
        </button>
      </div>
    </div>
  );
}
