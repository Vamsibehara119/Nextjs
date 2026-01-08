"use client";

import { useEffect, useState } from "react";
import { getFoods, Food } from "../lib/food-api";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import FoodItem from "./FoodItem";
import "../globals.css"
import FallbackUI from "@/ErrorBoundary/FallbackUI";
function FoodListContent() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getFoods()
      .then(setFoods)
      .catch((err) => setError(err));
  }, []);

  // THIS is the critical part
  if (error) {
    throw error; // ← React ErrorBoundary will catch this
  }

  return (
    <ul>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </ul>
  );
}

export default function FoodList() {
  return (
    <ErrorBoundary
      fallback={<FallbackUI area="Food List" />}
    >
      <FoodListContent />
    </ErrorBoundary>
  );
}
