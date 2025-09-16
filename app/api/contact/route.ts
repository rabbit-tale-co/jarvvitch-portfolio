import { NextResponse } from "next/server";

export async function POST(req: Request) {
const data = await req.formData();
// TODO: wyślij e‑mail lub zapisz w bazie
console.log("[CONTACT]", Object.fromEntries(data.entries()));
return NextResponse.json({ ok: true });
}
