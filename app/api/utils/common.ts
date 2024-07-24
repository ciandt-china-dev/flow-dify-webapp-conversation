import { type NextRequest } from 'next/server'
import { ChatClient } from 'dify-client'
import { API_KEY, API_URL } from '@/config'
export const getInfo = (request: NextRequest) => {
  const sessionId = request.cookies.get('session_id')?.value
  const user = sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession = (sessionId: string) => {
  return { 'Set-Cookie': `session_id=${sessionId}` }
}
export const client = new ChatClient(API_KEY, API_URL || undefined)
