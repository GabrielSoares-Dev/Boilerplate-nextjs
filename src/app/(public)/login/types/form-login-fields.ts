import z from 'zod'
import { formLoginSchema } from '@/app/(public)/login/schemas'

export type FormLoginFields = z.infer<typeof formLoginSchema>
