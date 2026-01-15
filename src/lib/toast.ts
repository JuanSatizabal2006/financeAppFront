import {
  toast,
  type ToastContainerOptions,
  type ToastOptions,
} from "vue3-toastify";

export const showToast = (content: string, options: ToastOptions) => {
  toast(content, {
    ...options,
  });
};

export const configToast: ToastContainerOptions = {
  autoClose: 3000,
  theme: "dark",
  toastClassName: "glass-toast",
  bodyClassName: "toast-body",
};
