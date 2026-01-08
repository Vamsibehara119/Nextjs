'use client';

import { use, useMemo, useState } from 'react';
import Link from 'next/link';
import FoodForm, { Food } from '../../components/foods/FoodForm';

type Props = { params: Promise<{ id: string }> };

const seededFoods: Food[] = [
  { id: '1', name: 'Pizza', description: 'Cheesy goodness with your favorite toppings.', price: 12 },
  { id: '2', name: 'Burger', description: 'Juicy patty loaded with fresh veggies.', price: 10 },
  { id: '3', name: 'Pasta', description: 'Classic Italian comfort food.', price: 11 },
  { id: '4', name: 'Sushi', description: 'Fresh rolled bites of seafood and rice.', price: 14.99 },
  { id: '5', name: 'Salad', description: 'Crisp greens with zesty dressing.', price: 7.99 },
  { id: '6', name: 'Soup',  description: 'Crisp greens with zesty dressing.', price: 7.99 },
  { id: '7', name: 'Rice ball', description: 'Crisp greens with zesty dressing.', price: 7.99 },
  { id: '8', name: 'Pista', description: 'Crisp greens with zesty dressing.', price: 7.99 }
];

export default function EditFoodPage({ params }: Props) {
  const { id } = use(params);
  const [foods, setFoods] = useState<Food[]>(seededFoods);

  const food = useMemo(() => foods.find((item) => item.id === id), [foods, id]);

  function handleFoodUpdate(updatedFood: Food) {
    setFoods((prev) => prev.map((item) => (item.id === updatedFood.id ? updatedFood : item)));
  }

  if (!food) {
    return (
      <section className="px-6 py-8">
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-sm">
          <h1 className="mb-4 text-2xl font-semibold">Food not found</h1>
          <p className="text-sm text-gray-600">
            No seeded item with ID <span className="font-semibold">{id}</span>.
          </p>
          <Link
            href="/food"
            className="mt-6 inline-flex rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
          >
            Back to list
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold">Edit Food</h1>
        <FoodForm mode="edit" initialValues={food} foodId={food.id} onSubmitSuccess={handleFoodUpdate} />

        <div className="mt-6 rounded border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900">
          <p className="font-semibold">Live preview</p>
          <p className="mt-1">
            <span className="font-medium">Name:</span> {food.name}
          </p>
          <p className="mt-1">
            <span className="font-medium">Description:</span> {food.description}
          </p>
          <p className="mt-1">
            <span className="font-medium">Price:</span> ₹{food.price.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}
