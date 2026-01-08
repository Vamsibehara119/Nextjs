"use client";

import { useError } from "./ErrorContext";

export default function FallbackUI({ area }: { area?: string }) {
  const {error ,reset} = useError();

  return (
    <div className="p-4 bg-red-100 text-red-800 text-sm">
      <strong>{area} failed</strong>
      <pre className="text-xs mt-1 whitespace-pre-wrap">
        {error?.message}
      </pre>
      <button onClick={reset} 
       className="mt-2 rounded bg-red-600 px-3 py-1 text-white text-xs"
      >Retry</button>
    </div>
  );
}
