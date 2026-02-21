"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [amount, setAmount] = useState(0);

  const collateral = amount * 0.1;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Loan Calculator</h1>

      <label className="block mb-2">Amount you want to borrow ($)</label>
      <input
        type="number"
        className="w-full p-3 rounded bg-zinc-800 mb-6"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <div className="bg-zinc-900 p-6 rounded">
        <p className="text-lg">Collateral Required (10%)</p>
        <p className="text-2xl font-bold text-green-500">
          ${collateral.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
