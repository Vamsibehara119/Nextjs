import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginClient from "./LoginClient";
import ErrorBoundary from "../components/ErrorBoundary";
export default async function LoginPage() {
    
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth")?.value;
  const role = cookieStore.get("role")?.value;
  // ✅ Already logged in → redirect
  if (auth && role === "admin") {

    redirect("/food");
  }

  // ❌ Not logged in → show login UI
  return (
  <LoginClient/>)
}
