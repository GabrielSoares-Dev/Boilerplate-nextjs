'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { checkUserIsAuthenticated } from '@functions'
import { appRoutes } from '@constants'
export function useProtectedRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { push } = useRouter()

  const userAuthenticated = checkUserIsAuthenticated()
  useEffect(() => {
    if (!userAuthenticated) {
      push(appRoutes.public.login)
    }

    setIsAuthenticated(userAuthenticated)
  }, [userAuthenticated, push])

  return {
    isAuthenticated,
  }
}
