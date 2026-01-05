"use client";

import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";
import "../../globals.css"
const addFoodSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(250, "Description can’t exceed 250 characters"),
  price: z
    .number()
    .refine((val) => Number.isFinite(val), {
      message: "Price must be a number",
    })
    .min(1, "Price must be at least 1")
    .max(1000, "Price cannot exceed 1000"),
  category: z.enum(["starter", "main", "dessert"], "Choose a category"),
  isVeg: z.boolean(),
  rating: z
    .number()
    .refine((val) => Number.isFinite(val), {
      message: "Rating must be a number",
    })
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5"),
  spiceLevel: z.enum(["mild", "medium", "hot"]),
  availableOn: z
    .string()
    .refine(
      (val) => {
        const date = new Date(val);
        return !Number.isNaN(date.getTime());
      },
      { message: "Select a valid date" }
    ),
});

type AddFoodFormValues = z.infer<typeof addFoodSchema>;

const initialValues: AddFoodFormValues = {
  title: "",
  description: "",
  price: 0,
  category: "starter",
  isVeg: false,
  rating: 3,
  spiceLevel: "mild",
  availableOn: "",
};

export default function AddFoodForm() {
  const [submittedData, setSubmittedData] = useState<AddFoodFormValues | null>(
    null
  );

  const formik = useFormik<AddFoodFormValues>({
    initialValues,
    validationSchema: toFormikValidationSchema(addFoodSchema),
    onSubmit: async (values, helpers) => {
      // Simulate server call
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmittedData(values);
      helpers.resetForm();
    },
  });

  const renderError = (field: keyof AddFoodFormValues) =>
    formik.touched[field] && formik.errors[field] ? (
      <p className="text-sm text-red-600">{formik.errors[field]}</p>
    ) : null;

  return (
    <div className="max-w-xl space-y-4 rounded-md border p-6 shadow">
      <h2 className="text-xl font-semibold">Add Food Item</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Text Input */}
        <div>
          <label className="block text-sm font-medium" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full rounded border px-3 py-2"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Paneer Tikka"
          />
          {renderError("title")}
        </div>

        {/* Textarea */}
        <div>
          <label className="block text-sm font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full rounded border px-3 py-2"
            rows={3}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Smoky paneer cubes cooked in tandoor…"
          />
          {renderError("description")}
        </div>

        {/* Number Input */}
        <div>
          <label className="block text-sm font-medium" htmlFor="price">
            Price (₹)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="w-full rounded border px-3 py-2"
            value={formik.values.price}
            onChange={(event) =>
              formik.setFieldValue("price", Number(event.target.value))
            }
            onBlur={formik.handleBlur}
          />
          {renderError("price")}
        </div>

        {/* Select */}
        <div>
          <label className="block text-sm font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full rounded border px-3 py-2"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="starter">Starter</option>
            <option value="main">Main</option>
            <option value="dessert">Dessert</option>
          </select>
          {renderError("category")}
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="isVeg"
            name="isVeg"
            type="checkbox"
            checked={formik.values.isVeg}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="isVeg" className="text-sm font-medium">
            Vegetarian
          </label>
          {renderError("isVeg")}
        </div>

        {/* Range Slider */}
        <div>
          <label className="block text-sm font-medium" htmlFor="rating">
            Rating: {formik.values.rating}
          </label>
          <input
            id="rating"
            name="rating"
            type="range"
            min={1}
            max={5}
            className="w-full"
            value={formik.values.rating}
            onChange={(event) =>
              formik.setFieldValue("rating", Number(event.target.value))
            }
            onBlur={formik.handleBlur}
          />
          {renderError("rating")}
        </div>

        {/* Radio Group */}
        <fieldset>
          <legend className="text-sm font-medium">Spice Level</legend>
          <div className="mt-2 flex gap-4">
            {["mild", "medium", "hot"].map((level) => (
              <label key={level} className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="spiceLevel"
                  value={level}
                  checked={formik.values.spiceLevel === level}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {level}
              </label>
            ))}
          </div>
          {renderError("spiceLevel")}
        </fieldset>

        {/* Date Input */}
        <div>
          <label className="block text-sm font-medium" htmlFor="availableOn">
            Available On
          </label>
          <input
            id="availableOn"
            name="availableOn"
            type="date"
            className="w-full rounded border px-3 py-2"
            value={formik.values.availableOn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {renderError("availableOn")}
        </div>

        <button
          type="submit"
          className="btn w-full"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Saving…" : "Add Food"}
        </button>
      </form>

      {submittedData && (
        <div className="rounded bg-emerald-50 p-4 text-sm">
          <p className="font-semibold text-emerald-900">Submitted payload:</p>
          <pre className="mt-2 whitespace-pre-wrap break-words text-emerald-800">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// import { useState } from "react";

// export default function AddFoodButton() {
//   const [error, setError] = useState<string | null>(null);

//   const handleAdd = async () => {
//     // try {
//     //   throw new Error("Add food failed ❌");
//     // } catch (err: any) {
//     //   setError(err.message);
//     // }
//   };

//   return (
//     <>
//       <button onClick={handleAdd}>Add Food</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </>
//   );
// }


