import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: 'User not fount' }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: 'Dima' });
}
