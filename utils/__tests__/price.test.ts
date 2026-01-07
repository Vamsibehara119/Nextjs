export function generateFoodId(): string {
  return crypto.randomUUID();
}

export function isValidDescription(desc: string): boolean {
  return desc.trim().length >= 10;
}
import { formatPrice, isValidPrice } from "@/utils/price";

describe("Price utilities", () => {
  test("formats price correctly", () => {
    expect(formatPrice(10)).toBe("₹10.00");
    expect(formatPrice(99.5)).toBe("₹99.50");
  });

  test("validates price correctly", () => {
    expect(isValidPrice(10)).toBe(true);
    expect(isValidPrice(0)).toBe(false);
    expect(isValidPrice(-5)).toBe(false);
    expect(isValidPrice(NaN)).toBe(false);
  });
});
