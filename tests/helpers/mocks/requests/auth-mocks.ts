import { server } from '@tests/helpers'
import { rest } from 'msw'

export const loginMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_API}v1/auth/login`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Authenticated',
            content: {
              accessToken: {
                type: 'bearer',
                token:
                  'Ng.b97dVl42kAceEHxwSr1Tun4n9F5OsGmwr_dzZZEO_BhjwQW9PImQ4hx1wl4e',
              },
              user: {
                id: 2,
                name: 'Isis e Aline Pães e Doces Ltda',
                email: 'posvenda@daniloeheloisaentulhosltda.com.br',
                phoneNumber: '14991538823',
                roleName: 'ADMIN',
                createdAt: '11/06/2023 20:29:46',
                permissions: [],
              },
            },
          }),
        )
      },
    ),
  )
}
export const logoutMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/auth/logout`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(ctx.status(status))
      },
    ),
  )
}
