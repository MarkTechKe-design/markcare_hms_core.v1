import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic server-side sanity validation
    if (!body.name || !body.email || !body.phone || !body.organization || !body.message) {
      return NextResponse.json({ message: 'All required fields must be completed.' }, { status: 400 });
    }

    const backendUrl =
      process.env.BACKEND_API_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      'http://localhost:4000';

    try {
      const backendRes = await fetch(`${backendUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await backendRes.json().catch(() => null);

      if (backendRes.ok && data?.success) {
        return NextResponse.json(data, { status: backendRes.status });
      }

      // Forward truthful failure without exposing database internals or stack traces
      const safeMessage = data?.message
        ? Array.isArray(data.message)
          ? data.message.join(', ')
          : data.message
        : 'Failed to record inquiry with MarkCare systems.';

      return NextResponse.json(
        { success: false, message: safeMessage },
        { status: backendRes.status || 502 },
      );
    } catch {
      // Backend unreachable or offline: report truthful service unavailable error
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to connect to the MarkCare inquiry service. Please verify your connection or try again later.',
        },
        { status: 503 },
      );
    }
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid inquiry payload received.' }, { status: 400 });
  }
}
