export type User = {
  email: string
  password: string
  role: "admin" | "user"
}

export const users: User[] = [
  {
    email: "admin@test.com",
    password: "admin123",
    role: "admin",
  },
  {
    email: "user@test.com",
    password: "user123",
    role: "user",
  },
]
