export type LoginProps = {
  email: string
  password: string
}

export type AccessToken = {
  type: string
  token: string
}

export type User = {
  id: number
  name: string
  email: string
  phoneNumber: string
  roleName: string
  createdAt: string
  permissions: string[]
}

export type ContentLogin = {
  accessToken: AccessToken
  user: User
}
