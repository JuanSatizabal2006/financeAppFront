<script setup lang="ts">
import { useForm } from "vee-validate";

import { general } from "@src/language/general";
import { schemaCreditCard } from "@src/helpers/validations/creditCard";
import { FORM_CREDIT_CARD } from "@src/constants/keysForms.constants";

import InputField from "../shared/InputField.vue";
import ButtonCustom from "../shared/ButtonCustom.vue";
import {
  useCreateCreditCard,
  useUpdateCreditCard,
} from "@src/composables/useCreditCard";
import type {
  CreateCreditCard,
  UpdateCreditCard,
} from "@src/models/core/creditCard.interface";
import { setFieldErrors } from "@src/helpers/setFieldErrors";
import { computed } from "vue";

const emit = defineEmits(["finishForm"]);
let idCreditCard = "";
const loading = computed(() => loadingCreate || loadingEdit);

const { handleSubmit, meta, setFieldError, setValues } = useForm({
  validationSchema: schemaCreditCard,
});

const { mutate: submitCreate, isPending: loadingCreate } =
  useCreateCreditCard();
const { mutate: submitEdit, isPending: loadingEdit } = useUpdateCreditCard();

const onSubmit = handleSubmit((values) => {
  if (idCreditCard) {
    edit({ ...values, id: idCreditCard });
  } else {
    create(values);
  }
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

function edit(values: UpdateCreditCard) {
  submitEdit(values, {
    onSuccess: () => {
      emit("finishForm");
    },
    onError: (e) => {
      const errors = e?.errors;
      const { interests, maxTotal, quotaManage, name } = values;
      const newValues: Omit<UpdateCreditCard, "id"> = {
        interests,
        maxTotal,
        name,
        quotaManage,
      };

      if (errors) {
        setFieldErrors(errors, newValues, setFieldError);
      }
    },
  });
}

function setFormEdit(values: UpdateCreditCard) {
  setValues({
    ...values,
  });
  idCreditCard = values.id;
}

defineExpose({ setFormEdit });
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
      :loading="loading.value"
    />
  </form>
</template>
