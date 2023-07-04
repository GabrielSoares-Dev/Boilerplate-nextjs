import { permissionsUrls } from '@constants'
export type DefaultResponse = {
  statusCode: number
  message: string
}

export type DefaultResponseWithContent<TContent> = DefaultResponse & {
  content: TContent
}

export type DefaultPaginate<TItems> = {
  currentPage: number
  totalRegisters: number
  totalPages: number
  registersPerPage: number
  items: TItems[]
}
export type FormType = 'VIEW' | 'EDIT' | 'CREATE'

export type Permissions =
  | 'createPermission'
  | 'deletePermission'
  | 'updatePermission'
  | 'viewPermission'
  | 'createRole'
  | 'updateRole'
  | 'viewRole'
  | 'deleteRole'
  | 'syncRolesPermissions'

export type Paths = keyof typeof permissionsUrls
