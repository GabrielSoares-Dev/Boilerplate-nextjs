import type { ReactNode } from 'react'
import { ProtectedRoutes } from '@middlewares'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return <ProtectedRoutes>{children}</ProtectedRoutes>
}
