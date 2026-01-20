
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Pizza,
  Sandwich,
  Soup,
  Salad,
  CookingPot,
  Utensils,
  Pencil,
  Tag,
} from "lucide-react";
import "../globals.css";

type Food = {
  id: string;
  name: string;
  label: string;
  description: string;
  price: number;
};


const foodVisuals = (name: string) => {
  const key = name.toLowerCase();

  if (key.includes("pizza"))
    return {
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=800&auto=format&fit=crop",
      Icon: Pizza,
    };

  if (key.includes("burger"))
    return {
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
      Icon: Sandwich,
    };

  if (key.includes("pasta") || key.includes("pista"))
    return {
      image:
        "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop",
      Icon: CookingPot,
    };

  if (key.includes("soup") || key.includes("ramen"))
    return {
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
      Icon: Soup,
    };

  if (key.includes("salad"))
    return {
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c35?q=80&w=800&auto=format&fit=crop",
      Icon: Salad,
    };

  return {
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop",
    Icon: Utensils,
  };
};

export default function FoodsPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch("/api/foods");
        if (!res.ok) throw new Error("Failed to fetch foods");
        const data = await res.json();
        setFoods(data.data);
      } catch {
        setError(new Error("API failed"));
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  if (error) throw error;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Title */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Foods
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Cute, compact & delicious menu
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-end">
          <Link
            href="/food/new"
            className="
              inline-flex
              w-full
              sm:w-auto
              sm:min-w-[140px]
              justify-center
              rounded-lg
              bg-emerald-600
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-emerald-500
              active:scale-95
            "
          >
            + Add Food
          </Link>
        </div>
      </div>


      {loading && (
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[230px] w-[260px] animate-pulse rounded-xl bg-gray-200"
            />
          ))}
        </div>
      )}

      {!loading && foods.length > 0 && (
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => {
            const { image, Icon } = foodVisuals(food.name);

            return (
              <div
                key={food.id}
                className="w-[300px] overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-32">
                  <img
                    src={image}
                    alt={food.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-2 top-2 rounded-full bg-white p-1.5 shadow">
                    <Icon size={16} className="text-emerald-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-gray-800">
                      {food.name}
                    </h3>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                      <Tag size={12} /> ${food.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="mb-2 line-clamp-2 text-xs text-gray-500">
                    {food.description}
                  </p>

                  <div className="flex justify-end">
                    <Link
                      href={`/food/${food.id}`}
                      className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-emerald-600 transition hover:bg-emerald-50"
                    >
                      <Pencil size={14} />
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
