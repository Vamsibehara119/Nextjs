"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { users } from "../../data"

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const user = users.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    return { error: "Invalid email or password" }
  }

  const cookieStore = await cookies()
  cookieStore.set("auth", "true", { httpOnly: true })
  cookieStore.set("role", user.role, { httpOnly: true })

  redirect(user.role === "admin" ? "/food" : "/dashboard")
}
