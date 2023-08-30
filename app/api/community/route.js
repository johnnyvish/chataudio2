import Generation from "@/models/generation";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();

    const generations = await Generation.find()
      .sort({ date: -1 }) // -1 for descending order, so most recent first
      .limit(6);

    return NextResponse.json({
      status: 200,
      data: generations,
    });
  } catch (error) {
    return new Response("Error occured", {
      status: 400,
    });
  }
}
