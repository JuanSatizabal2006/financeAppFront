<script setup lang="ts">
import { useForm } from "vee-validate";
import { computed } from "vue";

import { general } from "@src/language/general";

import { FORM_QUOTA_CREDIT_CARD } from "@src/constants/keysForms.constants";

import InputField from "../shared/InputField.vue";
import ButtonCustom from "../shared/ButtonCustom.vue";

import { setFieldErrors } from "@src/helpers/setFieldErrors";
import SelectField from "../shared/SelectField.vue";
import InfoCard from "../shared/InfoCard.vue";
import { schemaQuotasCreditCard } from "@src/helpers/validations/quotasCreditCard";

import { useGetCreditCardOptions } from "@src/composables/useReferences";

// const emit = defineEmits(["finishForm"]);
// let idCreditCard = "";
// const loading = computed(() => loadingCreate || loadingEdit);

const { handleSubmit, meta, setFieldError, setValues } = useForm({
  validationSchema: schemaQuotasCreditCard,
  initialValues: {
    paidQuotas: 0,
  },
});

const { data: creditCards } = useGetCreditCardOptions();

// const { mutate: submitCreate, isPending: loadingCreate } =
//   useCreateCreditCard();
// const { mutate: submitEdit, isPending: loadingEdit } = useUpdateCreditCard();

const onSubmit = handleSubmit((values) => {
  console.log(values);
  // if (idCreditCard) {
  //   edit({ ...values, id: idCreditCard });
  // } else {
  //   create(values);
  // }
});

// function create(values: CreateCreditCard) {
//   submitCreate(values, {
//     onSuccess: () => {
//       emit("finishForm");
//     },
//     onError: (e) => {
//       const errors = e?.errors;

//       if (errors) {
//         setFieldErrors(errors, values, setFieldError);
//       }
//     },
//   });
// }

// function edit(values: UpdateCreditCard) {
//   submitEdit(values, {
//     onSuccess: () => {
//       emit("finishForm");
//     },
//     onError: (e) => {
//       const errors = e?.errors;
//       const { interests, maxTotal, quotaManage, name } = values;
//       const newValues: Omit<UpdateCreditCard, "id"> = {
//         interests,
//         maxTotal,
//         name,
//         quotaManage,
//       };

//       if (errors) {
//         setFieldErrors(errors, newValues, setFieldError);
//       }
//     },
//   });
// }

// function setFormEdit(values: UpdateCreditCard) {
//   setValues({
//     ...values,
//   });
//   idCreditCard = values.id;
// }

// defineExpose({ setFormEdit });
</script>

<template>
  <form @submit="onSubmit" class="form">
    <div class="form__content">
      <input-field
        :input-id="FORM_QUOTA_CREDIT_CARD.NAME"
        label="Nombre de la compra"
      />
      <select-field
        label="Tarjeta"
        :options="creditCards || []"
        :input-id="FORM_QUOTA_CREDIT_CARD.CREDIT_CARD"
      />
      <input-field
        :input-id="FORM_QUOTA_CREDIT_CARD.PURCHASE_DATE"
        label="Fecha de compra"
        type="date"
      />
      <input-field
        :input-id="FORM_QUOTA_CREDIT_CARD.PRICE"
        label="Valor compra"
        type="number"
      />
      <input-field
        :input-id="FORM_QUOTA_CREDIT_CARD.TOTAL_QUOTAS"
        label="Cantidad de cuotas"
        type="number"
      />
      <input-field
        :input-id="FORM_QUOTA_CREDIT_CARD.PAID_QUOTAS"
        label="Cuotas pagadas"
        type="number"
      />
      <info-card message="El valor de cada cuota será de $100.000" />
    </div>
    <button-custom
      type="submit"
      :label="general.forms.btnSave"
      :is-disabled="!meta.valid"
    />
  </form>
</template>
