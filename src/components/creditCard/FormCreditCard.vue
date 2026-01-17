<script setup lang="ts">
import { useForm } from "vee-validate";

import { general } from "@src/language/general";
import { schemaCreditCard } from "@src/helpers/validations/creditCard";
import { FORM_CREDIT_CARD } from "@src/constants/keysForms.constants";

import InputField from "../shared/InputField.vue";
import ButtonCustom from "../shared/ButtonCustom.vue";
import { useCreateCreditCard } from "@src/composables/useCreditCard";
import type { CreateCreditCard } from "@src/models/core/creditCard.interface";
import { setFieldErrors } from "@src/helpers/setFieldErrors";

const emit = defineEmits(["finishForm"]);

const { handleSubmit, meta, setFieldError } = useForm({
  validationSchema: schemaCreditCard,
});

const { mutate: submitCreate, isPending: loadingCreate } =
  useCreateCreditCard();

const onSubmit = handleSubmit((values) => {
  console.log(values);
  create(values);
});

function create(values: CreateCreditCard) {
  submitCreate(values, {
    onSuccess: () => {
      emit("finishForm");
    },
    onError: (e) => {
      const errors = e?.errors;

      if (errors) {
        setFieldErrors(errors, values, setFieldError);
      }
    },
  });
}

// function edit(values: BillUpdate) {
//   submitEdit(values, {
//     onSuccess: () => {
//       emit("finishForm");
//     },
//     onError: (e) => {
//       const errors = e?.errors;
//       const { price, categoryId, name } = values;
//       const newValues: Omit<BillUpdate, "id"> = { categoryId, name, price };

//       if (errors) {
//         setFieldErrors(errors, newValues, setFieldError);
//       }
//     },
//   });
// }
</script>

<template>
  <form @submit="onSubmit" class="form">
    <div class="form__content">
      <input-field :input-id="FORM_CREDIT_CARD.NAME" label="Banco" />
      <input-field
        :input-id="FORM_CREDIT_CARD.TOTAL"
        label="Cupo"
        type="number"
      />
      <input-field
        :input-id="FORM_CREDIT_CARD.QUOTA_MANAGE"
        label="Cuota de manejo"
        type="number"
      />
      <input-field
        :input-id="FORM_CREDIT_CARD.INTEREST"
        label="Tasa de interés"
        type="number"
      />
    </div>
    <button-custom
      type="submit"
      :label="general.forms.btnSave"
      :is-disabled="!meta.valid"
      :loading="loadingCreate"
    />
  </form>
</template>
