import type { ReactNode } from 'react'
import { PermissionsMiddleware, ProtectedMiddleware } from '@middlewares'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      <PermissionsMiddleware>{children}</PermissionsMiddleware>
    </ProtectedMiddleware>
  )
}
