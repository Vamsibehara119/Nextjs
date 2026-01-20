"use client";

import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import clsx from "clsx";
import "../../globals.css";

export type Food = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type FoodFormProps = {
  mode: "create" | "edit";
  initialValues?: Omit<Food, "id">;
  foodId?: string;
  onSubmitSuccess?: (food: Food) => void;
};

const foodSchema = z.object({
  name: z.preprocess(
    (val) => (val === undefined || val === null ? "" : val),
    z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
  ),

  description: z.preprocess(
    (val) => (val === undefined || val === null ? "" : val),
    z
      .string()
      .trim()
      .min(10, "Description must be at least 10 characters")
  ),

  price: z.preprocess(
    (val) => {
      if (val === "" || val === undefined || val === null) return NaN;
      return Number(val);
    },
    z
      .number({
        message: "Price must be a number",
      })
      .min(1, "Price must be greater than 0")
  ),
});


type FoodFormValues = z.infer<typeof foodSchema>;

const defaultValues: FoodFormValues = {
  name: "",
  description: "",
  price: 0,
};

export default function FoodForm({
  mode,
  initialValues,
  foodId,
  onSubmitSuccess,
}: FoodFormProps) {
  const submitLabel = mode === "create" ? "Create" : "Save Changes";

  const formik = useFormik<FoodFormValues>({
    initialValues: initialValues ?? defaultValues,
    validationSchema: toFormikValidationSchema(foodSchema),
    onSubmit: async (values, helpers) => {
      const payload: Food = {
        id: foodId ?? crypto.randomUUID(),
        ...values,
      };

      await new Promise((r) => setTimeout(r, 500));
      onSubmitSuccess?.(payload);

      helpers.setSubmitting(false);
      if (mode === "create") helpers.resetForm();
    },
  });

  const inputClass = (field: keyof FoodFormValues) =>
  clsx(
    "form-input",
    formik.touched[field] &&
      formik.errors[field] &&
      "input-error",
    formik.touched[field] &&
      !formik.errors[field] &&
      "input-success"
  );


  const error = (field: keyof FoodFormValues) =>
    formik.touched[field] && formik.errors[field] ? (
      <p className="mt-1 text-sm text-red-600">{formik.errors[field]}</p>
    ) : null;

  return (
    <div className="mx-auto w-full max-w-md sm:max-w-lg px-4 sm:px-6">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 sm:space-y-5"
      >
        {/* Name */}
        <div>
          <label className="form-label text-sm sm:text-base">Name</label>
          <input
            name="name"
            type="text"
            className={inputClass("name")}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {error("name")}
        </div>

        {/* Description */}
        <div>
          <label className="form-label text-sm sm:text-base">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            className={inputClass("description")}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {error("description")}
        </div>

        {/* Price */}
        <div>
          <label className="form-label text-sm sm:text-base">Price</label>
          <input
            name="price"
            type="number"
            step="0.01"
            className={inputClass("price")}
            value={formik.values.price || ""}
            onChange={(e) =>
              formik.setFieldValue("price", Number(e.target.value))
            }
            onBlur={formik.handleBlur}
          />
          {error("price")}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={clsx(
            "btn w-full py-3 text-sm sm:text-base",
            formik.isSubmitting
              ? "bg-emerald-400"
              : "bg-emerald-600 hover:bg-emerald-500"
          )}
        >
          {formik.isSubmitting ? "Submitting…" : submitLabel}
        </button>
      </form>
    </div>
  );
}
