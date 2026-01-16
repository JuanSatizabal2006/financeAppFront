import Swal, { type SweetAlertIcon } from "sweetalert2";

interface ShowAlert {
  title: string;
  text?: string;
  icon: SweetAlertIcon;
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
}

export const showAlert = async (params: ShowAlert) => {
  const paramsAlert: ShowAlert = {
    ...params,
    confirmButtonText: "Si, aceptar",
    cancelButtonText: "No, cancelar",
  };

  return await Swal.fire({
    ...paramsAlert,
    customClass: {
      popup: "glass-strong",
    },
    theme: "dark",
  });
};
