"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);

  const collateral = amount * 0.1;

  const submitApplication = () => {
    localStorage.setItem(
      "loan",
      JSON.stringify({
        amount,
        collateral,
        status: "pending",
      })
    );
    router.push("/dashboard/waiting-approval");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Apply for Loan</h1>

      <input
        type="number"
        placeholder="Enter loan amount"
        className="w-full p-3 rounded bg-zinc-800 mb-4"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <p className="mb-4">
        Collateral required (10%):{" "}
        <span className="text-green-500 font-bold">
          ${collateral.toFixed(2)}
        </span>
      </p>

      <button
        onClick={submitApplication}
        className="bg-green-600 px-6 py-3 rounded font-semibold"
      >
        Confirm & Apply
      </button>
    </div>
  );
}
