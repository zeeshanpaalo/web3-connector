import { NextResponse } from "next/server";
import axios from "axios";

// Handle GET request
export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("query");
  // console.log(searchQuery);
  const API_KEY = process.env.GOOGLE_SEARCH_ENGINE_API_KEY;
  const SEARCH_ENGINE_ID = process.env.GOOGLE_SEARCH_ENGINE_ID;
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchQuery}`
  );
  // console.log(response.data.items[0]);
  return NextResponse.json({ results: response.data.items });
}

// Handle POST request
export async function POST(request: Request) {
  // const body = await request.json();
  return NextResponse.json({ results: [`User  added!`] });
}
