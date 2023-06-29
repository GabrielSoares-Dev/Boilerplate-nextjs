import type { ReactNode } from 'react'

type LayoutLoginProps = {
  children: ReactNode
}

export default function LayoutLogin({ children }: LayoutLoginProps) {
  return <div>{children}</div>
}
