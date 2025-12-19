export type Food = {
  id: number;
  name: string;
};

export async function getFoods(): Promise<Food[]> {
  await new Promise((res) => setTimeout(res, 1000));

  // const shouldFail = true; // toggle for testing

  // if (shouldFail) {
  //   throw new Error("Failed to fetch food data 🍽️");
  // }

  return [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Pasta" },
  ];
}
