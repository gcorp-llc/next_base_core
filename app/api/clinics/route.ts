import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "1",
      name: "کلینیک جردن",
      type: "clinic",
      address: "تهران، خیابان جردن، کوچه تندیس",
      phones: [{ number: "۰۲۱-۸۸۸۸۸۸۸۸", isActive: true }],
      workingHours: [
        { day: "saturday", isOpen: true, shifts: [{ start: "09:00", end: "17:00" }] },
        { day: "monday", isOpen: true, shifts: [{ start: "09:00", end: "17:00" }] },
      ],
      createdAt: new Date(),
    }
  ]);
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ ...data, id: "new-id" });
}
