import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";

export const schemaBills = toTypedSchema(
  yup.object({
    name: yup.string().required("Nombre es requerido"),
    price: yup.number().required("Precio es requerido").min(100),
    categoryId: yup.string().required("Categoría es requerido"),
  })
);
