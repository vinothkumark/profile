import axios from "axios";
import { NextResponse } from "next/server";
import {data} from "@/app/lib/projects/projects";

export async function GET() {
  const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

  try {
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}