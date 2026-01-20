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
      .required("Cantidad de cuotas requeridas."),
    creditCardId: yup.string().required("Tarjeta de credito requerida."),
    paidQuotas: yup.number().positive("No se permiten números negativos."),
    purchaseDate: yup.date().required("Fecha de compra requerida."),
  }),
);

// NAME: "name",
//   PRICE: "price",
//   TOTAL_QUOTAS: "totalQuotas",
//   CREDIT_CARD: "creditCardId",
//   PAID_QUOTAS: "paidQuotas",
//   PURCHASE_DATE: "purchaseDate",
