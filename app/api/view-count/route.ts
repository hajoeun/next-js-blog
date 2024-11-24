import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();
    
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { error: "Slug is required and must be a string" },
        { status: 400 }
      );
    }

    // 조회수 증가 쿼리 실행
    await sql`
      INSERT INTO views (slug, count)
      VALUES (${slug}, 1)
      ON CONFLICT (slug) DO UPDATE 
      SET count = views.count + 1
    `;

    // 결과 반환
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error incrementing view:", error);
    return NextResponse.json(
      { error: "Failed to increment view" },
      { status: 500 }
    );
  }
}