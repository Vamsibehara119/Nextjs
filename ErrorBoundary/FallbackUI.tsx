"use client";

import { useError } from "./ErrorContext";

export default function FallbackUI({ area }: { area?: string }) {
  const err = useError();

  return (
    <div className="p-4 bg-red-100 text-red-800 text-sm">
      <strong>{area} failed</strong>
      <pre className="text-xs mt-1 whitespace-pre-wrap">
        {err?.error?.message}
      </pre>
    </div>
  );
}
