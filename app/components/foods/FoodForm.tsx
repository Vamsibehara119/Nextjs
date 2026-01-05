'use client';

import { useState } from 'react';
import clsx from 'clsx';
import "../../globals.css"
export type Food = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type FoodFormProps = {
  mode: 'create' | 'edit';
  initialValues?: Omit<Food, 'id'>;
  foodId?: string;
  onSubmitSuccess?: (food: Food) => void;
};

const defaultValues: Omit<Food, 'id'> = {
  name: '',
  description: '',
  price: 0,
};

export default function FoodForm({ mode, initialValues, foodId, onSubmitSuccess }: FoodFormProps) {
  const [values, setValues] = useState(initialValues ?? defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLabel = mode === 'create' ? 'Create' : 'Save Changes';

  function handleChange<K extends keyof Omit<Food, 'id'>>(key: K, value: Omit<Food, 'id'>[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: Food = {
      id: foodId ?? crypto.randomUUID(),
      ...values,
    };

    onSubmitSuccess?.(payload);
    setIsSubmitting(false);

    if (mode === 'create') {
      setValues(defaultValues);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={values.description}
          onChange={(e) => handleChange('description', e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          rows={4}
          required
        />
      </div>

      {/* Price */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          min={0}
          step="0.01"
          value={values.price}
          onChange={(e) => handleChange('price', Number(e.target.value))}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={clsx(
          'btn w-full',
          isSubmitting ? 'bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-500'
        )}
      >
        {isSubmitting ? 'Submitting…' : submitLabel}
      </button>
    </form>
  );
}
