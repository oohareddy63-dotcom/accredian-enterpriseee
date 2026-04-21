import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  program: string;
  message?: string;
}

// In-memory store (replace with a real DB in production)
const leads: LeadData[] = [];

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();

    if (!body.name || !body.email || !body.program) {
      return NextResponse.json({ error: 'name, email and program are required' }, { status: 400 });
    }

    leads.push({ ...body, name: body.name.trim(), email: body.email.trim() });

    return NextResponse.json({ success: true, message: 'Lead captured successfully' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ total: leads.length, leads });
}
