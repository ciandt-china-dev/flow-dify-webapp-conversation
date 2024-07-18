'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import Loading from '@/app/components/base/loading'
import { fetchAppInfo } from '@/service'

const Redirect: FC = () => {
  const [user, setUser] = useState('')
  const fetch = async (code: string) => {
    const data: any = await fetchAppInfo(code)
    console.log(data, 'ooo')
    setUser(data?.UserId)
  }
  useEffect(() => {
    const searchURL = location.search
    const params = new URLSearchParams(searchURL)
    const valueObj = Object.fromEntries(params)
    console.log(valueObj)
    fetch(valueObj.code)
  }, [])

  return (
    <><div>{user}</div>
      <Loading type='app' />
    </>
  )
}

export default React.memo(Redirect)
