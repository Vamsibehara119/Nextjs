'use client';

import { useState } from 'react';
import FoodForm, { Food } from '../../components/foods/FoodForm';

export default function CreateFoodPage() {
  const [foods, setFoods] = useState<Food[]>([]);

  function handleFoodAdd(newFood: Food) {
    setFoods((prev) => [...prev, newFood]);
  }

  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-2xl space-y-8 rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-black">Create Food</h1>
        <FoodForm mode="create" onSubmitSuccess={handleFoodAdd} />

        <div>
          <h2 className="mb-2 text-xl font-semibold">Preview</h2>
          {foods.length === 0 ? (
            <p className="text-sm text-gray-500">No foods yet. Add one!</p>
          ) : (
            <ul className="space-y-3">
              {foods.map((food) => (
                <li key={food.id} className="rounded border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{food.name}</span>
                    <span className="text-sm font-semibold text-emerald-600">₹{food.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{food.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
