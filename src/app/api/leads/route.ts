import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo purposes (replace with database in production)
const leads: Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  createdAt: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, program } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ""))) {
      return NextResponse.json(
        { error: "Invalid phone number. Enter a valid 10-digit Indian mobile number" },
        { status: 400 }
      );
    }

    // Create lead record
    const lead = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      program: program || "Not specified",
      createdAt: new Date().toISOString(),
    };

    // Store in memory (replace with database call in production)
    leads.push(lead);

    console.log("New lead captured:", lead);

    return NextResponse.json(
      { success: true, message: "Thank you! We'll contact you soon.", data: lead },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return all leads (for demo/admin purposes)
  return NextResponse.json({ leads }, { status: 200 });
}
