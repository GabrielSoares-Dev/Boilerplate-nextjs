'use client'
import type { LayoutProviderProps } from '@/providers/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainerCustom } from '@components'

const queryClient = new QueryClient()

export function LayoutProvider({ children }: LayoutProviderProps) {
  const enabledDevTools = process.env.NEXT_PUBLIC_MODE === 'development'

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainerCustom />
      {enabledDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  )
}
