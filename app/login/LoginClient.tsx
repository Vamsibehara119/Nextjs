"use client";
import { redirect } from "next/navigation";
export default function LoginClient() {
  const login = () => {
    // ✅ set cookies (one per line)
    document.cookie = "auth=true; path=/";
    document.cookie = "role=admin; path=/"; // change to admin if needed
    // 🔑 hard reload so middleware & server see cookies
    redirect("/food");
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={login}>Login</button>
    </div>
  );
}
