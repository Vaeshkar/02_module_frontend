import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  const response = NextResponse.json({ success: true, user: { email } });
  response.cookies.set('user', email);

  return response;
}