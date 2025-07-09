import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, we'll log the submission and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString()
    });

    // Here you would typically:
    // 1. Send email to your business email
    // 2. Send confirmation email to the user
    // 3. Store in database if needed
    // 4. Integrate with CRM if needed

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 