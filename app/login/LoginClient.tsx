"use client"

import { useState } from "react"
import { loginAction } from "./actions"
import "../globals.css"
export default function LoginClient() {
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const res = await loginAction(formData)
    if (res?.error) {
      setError(res.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        action={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1>

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded mb-3 text-black"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border p-2 rounded mb-4 text-black"
        />

        <button
          type="submit"
          className="btn w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
}
