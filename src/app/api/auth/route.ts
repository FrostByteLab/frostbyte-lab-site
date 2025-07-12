import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

// In production, you should store this in environment variables
const SITE_PASSWORD = process.env.SITE_PASSWORD || 'frostbyte2024'
const SESSION_SECRET = process.env.SESSION_SECRET || 'frostbyte-session-secret'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      )
    }

    // Compare the provided password with the stored password
    const isValidPassword = await bcrypt.compare(password, await bcrypt.hash(SITE_PASSWORD, 10))

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    // Create response with authentication cookie
    const response = NextResponse.json(
      { success: true, message: 'Authentication successful' },
      { status: 200 }
    )

    // Set authentication cookie (expires in 24 hours)
    response.cookies.set('frostbyte-auth', SESSION_SECRET, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  // Logout endpoint
  const response = NextResponse.json(
    { success: true, message: 'Logged out successfully' },
    { status: 200 }
  )

  // Clear the authentication cookie
  response.cookies.set('frostbyte-auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })

  return response
} 