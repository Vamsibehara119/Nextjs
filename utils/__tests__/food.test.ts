import { generateFoodId, isValidDescription } from "@/utils/food";

describe("Food utilities", () => {
  test("generates unique food id", () => {
    const id1 = generateFoodId();
    const id2 = generateFoodId();

    expect(id1).toBeDefined();
    expect(id2).toBeDefined();
    expect(id1).not.toBe(id2);
  });

  test("validates description length", () => {
    expect(isValidDescription("Too short")).toBe(false);
    expect(
      isValidDescription("This is a valid description")
    ).toBe(true);
  });
});
