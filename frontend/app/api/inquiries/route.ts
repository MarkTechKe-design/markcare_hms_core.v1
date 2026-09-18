import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const raw = await req.json();

    // Normalize field names from legacy or third-party lead forms
    const name = (raw.name || raw.fullName || "").trim();
    const email = (raw.email || "").trim();
    const phone = (raw.phone || raw.phoneNumber || "").trim();
    const organization = (raw.organization || raw.facilityName || "Unspecified Facility").trim();
    const message = (raw.message || raw.comments || "Inquiry submitted via public portal").trim();
    
    // Whitelist valid backend inquiry types
    const validTypes = ["DEMO_REQUEST", "GENERAL_CONTACT", "TECHNICAL_OVERVIEW"];
    const type = validTypes.includes(raw.type) ? raw.type : "DEMO_REQUEST";

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      phone,
      organization,
      type,
      message,
    };

    const backendUrl =
      process.env.BACKEND_API_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "https://invinceible-core-hms-api-production-c978.up.railway.app";

    const backendRes = await fetch(`${backendUrl}/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await backendRes.json().catch(() => null);

    if (backendRes.ok && data?.success) {
      return NextResponse.json(data, { status: 201 });
    }

    const safeMessage = data?.message
      ? Array.isArray(data.message)
        ? data.message.join(", ")
        : data.message
      : "Failed to record inquiry with MarkCare systems.";

    return NextResponse.json(
      { success: false, message: safeMessage },
      { status: backendRes.status || 400 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to connect to MarkCare inquiry service. Please try again later.",
      },
      { status: 503 }
    );
  }
}
