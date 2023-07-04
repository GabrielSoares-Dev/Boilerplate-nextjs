'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { checkUserIsAuthenticated } from '@functions'
import { appRoutes } from '@constants'

export function usePublicMiddleware() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { push } = useRouter()

  const userAuthenticated = checkUserIsAuthenticated()
  useEffect(() => {
    if (userAuthenticated) {
      push(appRoutes.private.home)
    }

    setIsAuthenticated(userAuthenticated)
  }, [userAuthenticated, push])

  return {
    isAuthenticated,
  }
}
