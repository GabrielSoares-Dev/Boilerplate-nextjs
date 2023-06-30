import type { ReactNode } from 'react'
import { PublicRoutes } from '@middlewares'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicRoutes>{children}</PublicRoutes>
}
