import { Food } from "../lib/food-api";

export default function FoodItem({ food }: { food: Food }) {
  // if (food.name === "Burger") {
  //   throw new Error("Burger component crashed 🍔");
  // }

  return <li>{food.name}</li>;
}
