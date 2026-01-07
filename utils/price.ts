export function formatPrice(price: number): string {
  return `₹${price.toFixed(2)}`;
}

export function isValidPrice(price: number): boolean {
  return Number.isFinite(price) && price > 0;
}
