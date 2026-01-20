import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";

export const schemaQuotasCreditCard = toTypedSchema(
  yup.object({
    name: yup.string().required("Nombre requerido."),
    price: yup
      .number()
      .min(1000, "Mínimo $1.000")
      .required("Precio requerido."),
    totalQuotas: yup
      .number()
      .min(1, "Mínimo 1 cuota.")
      .max(60, "Maxímo 60 cuotas.")
      .integer("Solo números enteros.")
      .required("Cantidad de cuotas requeridas."),
    creditCardId: yup.string().required("Tarjeta de credito requerida."),
    paidQuotas: yup
      .number()
      .min(0, "No se permiten cuotas inferiores a 0")
      .required("Cantidad de cuotas requeridas."),
    purchaseDate: yup.date().required("Fecha de compra requerida."),
  }),
);
