// import FoodList from "../components/FoodList";
// import AddFoodForm from "../components/AddFoodForm";

// export default function FoodPage() {
//   return (
//     <div>
//       <h1>Food Menu</h1>
//       <AddFoodForm />
//       <FoodList />
//     </div>
//   );
// }
import FoodCard from '../components/foods/FoodCard';
import Link from 'next/link';

const dummyFoods = [
 { id: '1', name: 'Pizza', description: 'Cheesy goodness with your favorite toppings.', price: 12 },
  { id: '2', name: 'Burger', description: 'Juicy patty loaded with fresh veggies.', price: 10 },
  { id: '3', name: 'Pasta', description: 'Classic Italian comfort food.', price: 11 },
  { id: '4', name: 'Sushi', description: 'Fresh rolled bites of seafood and rice.', price: 14.99 },
  { id: '5', name: 'Salad', description: 'Crisp greens with zesty dressing.', price: 7.99 },
];

export default function FoodsPage() {
  const foods = dummyFoods;

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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

