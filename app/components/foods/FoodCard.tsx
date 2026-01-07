import Link from 'next/link';

type FoodCardProps = {
  food: {
    id: string;
    name: string;
    label:string;
    description: string;
    price: number;
    // imageUrl: string;
  };
};

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col sm:flex flex-row items-center gap-2">
            <span>🍰</span>
            <h2 className="text-lg font-semibold text-gray-800">{food.name} <span className="hidden sm:inline text-gray-600">{food.label}</span> </h2>
          </div>
          <span className="text-emerald-600 font-semibold">${food.price.toFixed(2)}</span>
        </div>
        <p className="hidden sm:text-yellow-600 text-lg mt-1">{food.description}</p>
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
