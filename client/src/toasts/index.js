import { toast } from 'react-toastify';

const toastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  pauseOnHover: false
};

export const makeToast = (type, message) => {
  switch (type) {
    case 'success':
      return toast.success(message, toastOptions);
    case 'info':
      return toast.info(message, toastOptions);
    case 'error':
      return toast.error(message, toastOptions);
    default:
      return toast.info(message, toastOptions);
  }
};