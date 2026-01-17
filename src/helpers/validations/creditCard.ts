import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";

export const schemaCreditCard = toTypedSchema(
  yup.object({
    name: yup.string().required("Nombre del banco requerido."),
    maxTotal: yup
      .number()
      .min(300000, "Mínimo 300.000")
      .max(999999999, "Monto excesivo")
      .required("Cupo requerido."),
    quotaManage: yup.number().min(0).required("Cuota de manejo requerida"),
    interests: yup
      .number()
      .max(50, "Interés excesivo")
      .required("Tasa de interés requerida."),
  })
);
