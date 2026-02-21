"use client";

import { useEffect, useState } from "react";

export default function WaitingApprovalPage() {
  const [seconds, setSeconds] = useState(86400); // 24 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Waiting for Approval</h1>
      <p className="mb-2">Your collateral payment is confirmed.</p>
      <p className="text-green-500 font-bold">
        Please wait {hours}h {minutes}m
      </p>
      <p className="mt-4 text-sm text-zinc-400">
        You will receive an email within 24 hours.
      </p>
    </div>
  );
}
