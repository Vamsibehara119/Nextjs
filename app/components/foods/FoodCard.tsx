import Link from 'next/link';

type FoodCardProps = {
  food: {
    id: string;
    name: string;
    description: string;
    price: number;
    // imageUrl: string;
  };
};

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* <img src={food.imageUrl} alt={food.name} className="h-52 w-full rounded-t-2xl object-cover" /> */}
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{food.name}</h2>
          <span className="text-emerald-600 font-semibold">${food.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{food.description}</p>
        <Link
          href={`/food/${food.id}`}
          className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500"
        >
          Edit
        </Link>
      </div>
    </article>
  );
}
