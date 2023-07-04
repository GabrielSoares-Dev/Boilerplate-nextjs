import { checkHasPermission } from '@/functions/check-has-permission'
jest.mock('@/functions/check-has-permission')

export const mockCheckHasPermission = checkHasPermission as jest.MockedFunction<
  typeof checkHasPermission
>
