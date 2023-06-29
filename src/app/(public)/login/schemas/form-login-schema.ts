import { z } from 'zod'
import { ShowToast } from '@/components'

export const formLoginSchema = z
  .object({
    email: z.string().nonempty('Por favor, insira o email'),
    password: z.string().nonempty('Por favor, insira uma senha'),
  })
  .superRefine((values) => {
    const isInvalidFields = values.email === '' || values.password === ''

    if (isInvalidFields) {
      ShowToast({
        title: 'Error',
        description: 'Credenciais Inválidas',
        toastType: 'ERROR',
      })
    }
  })
