'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { local, setSession } from '@/store'

import type { IMainProps } from '@/app/components'
import Loading from '@/app/components/base/loading'
import Main from '@/app/components'

const App: FC<IMainProps> = ({
  params,
}: any) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    if (!local.get('UserId')) {
      window.location.href
        = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ef8799c2a79ecae&redirect_uri=http://ciandtbot-test.platform.ciandt.tech:7860/redirect&response_type=code&scope=snsapi_base&state=STATE&agentid=1000049&connect_redirect=1#wechat_redirect'
    }
    else {
      setSession(local.get('UserId'))
      setRender(true)
    }
  }, [])
  return (
    render ? <Main params={params} /> : <Loading type='app' />
  )
}

export default React.memo(App)
