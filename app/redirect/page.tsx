'use client'
import type { FC } from 'react'
import React, { useEffect } from 'react'
import Loading from '@/app/components/base/loading'
import { fetchAppInfo } from '@/service'
import { local } from '@/store'

const Redirect: FC = () => {
  const fetch = async (code: string) => {
    try {
      const data: any = await fetchAppInfo(code)
      if (data?.UserId) {
        local.set('UserId', data?.UserId)
        window.location.href = '/'
      }
    }
    catch {
    }
  }
  useEffect(() => {
    const searchURL = location.search
    const params = new URLSearchParams(searchURL)
    const valueObj = Object.fromEntries(params)
    fetch(valueObj.code)
  }, [])

  return (
    <Loading type='app' />
  )
}

export default React.memo(Redirect)
