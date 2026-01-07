import { NextResponse } from "next/server";
import { seededFoods } from "../../lib/data"; 

export async function GET() {
  return NextResponse.json({
    success: true,
    data: seededFoods,
  });
}
