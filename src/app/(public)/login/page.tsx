'use client'
import React from 'react'
import { Input, InputLabel } from '@components'
import { useLogin } from '@/app/(public)/login/hooks'
import { checkHasError } from '@functions'

export default function Login() {
  const { errors, isLoading, handleSubmit, onSubmit, register } = useLogin()

  return (
    <>
      <Input
        {...register('email')}
        hasError={checkHasError(errors.email)}
        type="text"
        name="email"
        label={() => <InputLabel>Email</InputLabel>}
        placeholder="Insira seu endereço de email"
      />

      <Input
        {...register('password')}
        hasError={checkHasError(errors.password)}
        type="password"
        name="password"
        label={() => <InputLabel>Senha</InputLabel>}
        placeholder="*************"
      />

      <button onClick={handleSubmit(onSubmit)}>Entrar</button>
    </>
  )
}
