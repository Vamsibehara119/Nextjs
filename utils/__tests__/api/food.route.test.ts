import { GET } from "@/app/api/foods/route";
import { seededFoods } from "../../../app/lib/data";

describe("GET /api/foods", () => {
  it("returns food list with success true", async () => {
    const response = await GET();

    // NextResponse behaves like a Response
    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body.success).toBe(true);
    expect(body.data).toEqual(seededFoods);
  });
});
