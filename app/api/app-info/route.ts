import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const data: any = await fetch(`${process.env.NEXT_PUBLIC_API_END_URL}/wechat/login?code=${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const res = await data.json()
  return NextResponse.json(res)
}
