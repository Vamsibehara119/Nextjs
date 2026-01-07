export function generateFoodId(): string {
  return crypto.randomUUID();
}

export function isValidDescription(desc: string): boolean {
  return desc.trim().length >= 10;
}
