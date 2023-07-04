import type { ReactNode } from 'react'
import { PublicMiddleware } from '@middlewares'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicMiddleware>{children}</PublicMiddleware>
}
