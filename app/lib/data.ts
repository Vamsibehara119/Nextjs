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

export const seededFoods: {id:string;name:string;label:string;description:string;price:number}[] = [
 { id: '1', name: 'Pizza', label:'Food',description: 'Cheesy goodness with your favorite toppings.', price: 12 },
  { id: '2', name: 'Burger', label:'Food', description: 'Juicy patty loaded with fresh veggies.', price: 10 },
  { id: '3', name: 'Pasta', label:'Food', description: 'Classic Italian comfort food.', price: 11 },
  { id: '4', name: 'Sushi', label:'Food', description: 'Fresh rolled bites of seafood and rice.', price: 14.99 },
  { id: '5', name: 'Ramen', label:'Food', description: 'Crisp greens with zesty dressing.', price: 7.99 },
  { id: '6', name: 'Soup', label:'Food', description: 'Crisp greens with zesty dressing.', price: 7.99 },
  { id: '7', name: 'Rice ball', label:'Food', description: 'Crisp greens with zesty dressing.', price: 7.99 },
  { id: '8', name: 'Pista', label:'Food', description: 'Crisp greens with zesty dressing.', price: 7.99 },
];