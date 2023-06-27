import { toast, Slide } from 'react-toastify'
import { Toast } from '@/components'
import type { ShowToastProps } from '@/components/types'

export const ShowToast = ({
  title = '',
  toastType = 'INFO',
  description = '',
}: ShowToastProps) => {
  toast(Toast({ title, toastType, description }), {
    autoClose: 5000,
    transition: Slide,
    position: 'top-center',
    hideProgressBar: true,
    closeButton: false,
  })
}
