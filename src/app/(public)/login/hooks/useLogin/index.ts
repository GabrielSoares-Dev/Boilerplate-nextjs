'use client'
import { formLoginSchema } from '@/app/(public)/login/schemas'
import type { FormLoginFields } from '@/app/(public)/login/types'
import { authServices } from '@services'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ShowToast } from '@components'
import type { AxiosError } from 'axios'
import type { LoginProps } from '@/services/types'
import { useAuthStore } from '@store'

export function useLogin() {
  const { setUserState } = useAuthStore()
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormLoginFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
    resolver: zodResolver(formLoginSchema),
  })

  const handleNavigation = (url: string) => push(url)
  const { mutate, isLoading } = useMutation(
    (data: LoginProps) => authServices.login(data),
    {
      onSuccess: (data) => {
        setUserState(data)
        handleNavigation('/home')
      },
      onError: (error: AxiosError) => {
        const isNotAuthorized = error.response?.status === 403

        ShowToast({
          title: 'Error',
          description: isNotAuthorized
            ? 'Sua conta ainda está em revisão por favor aguarde um pouco'
            : 'Credenciais Inválidas',
          toastType: 'ERROR',
        })
        setError('email', { message: 'Credenciais Inválidas' })
        setError('password', { message: 'Credenciais Inválidas' })
      },
    },
  )

  const onSubmit = (data: FormLoginFields) => mutate(data)

  return {
    errors,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  }
}
