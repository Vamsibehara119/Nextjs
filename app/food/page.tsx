"use client";
import { useEffect,useState } from 'react';
import FoodCard from '../components/foods/FoodCard';
// import ErrorBoundary from '@/ErrorBoundary/ErrorBoundary';
// import FallbackUI from '@/ErrorBoundary/FallbackUI';
import Link from 'next/link';
import "../globals.css";
export default function FoodsPage() {
  type Food=
  {
   id:string;
   name:string;
   label:string;
   description:string;
   price:number
  }
  const [foods,setFoods]=useState<Food[]>([]);
  const [loading,setLoading]=useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch("/api/foods");
        const data = await res.json();
        setFoods(data.data);
      } catch (e: any) {
        setError(new Error("API failed"));
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  // ‼️ throw DURING render — React boundary catches this
  if (error) {
    throw error;
  }
  return (
    <section className="space-y-6 px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Foods</h1>
        <Link
          href="/food/new"
          className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
        >
          Add Food
        </Link>
      </div>

          {loading && (
            <div className="center-text">
              Loading...
            </div>
          )}

          {/* Empty */}
          {!loading && !foods.length && (
            <div className="center-text">
              No food items available
            </div>
          )}

          {/* List */}
          {/* <ErrorBoundary fallback={<FallbackUI area="Failed to load food items." />}> */}
          {!loading && foods.length > 0 && (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {foods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          )}
          {/* </ErrorBoundary> */}
    </section>
  );
}

