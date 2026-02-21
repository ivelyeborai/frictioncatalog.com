import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  const res = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      tags: ["website", "organic"],
    }),
  });

  if (res.ok) {
    return NextResponse.json({ success: true });
  }

  const data = await res.json().catch(() => null);

  if (res.status === 409) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: data?.detail || "Something went wrong. Please try again." },
    { status: res.status }
  );
}
