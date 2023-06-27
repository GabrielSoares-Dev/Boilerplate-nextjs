import { ShowToast } from '@components'
import { toast } from 'react-toastify'

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
  ToastContainer: jest.fn(),
}))
describe('Show toast', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('Should be render a toast with show toast', () => {
    ShowToast({
      description: 'description test',
      title: 'test',
      toastType: 'SUCCESS',
    })

    expect(toast).toBeCalledTimes(1)
  })
})
