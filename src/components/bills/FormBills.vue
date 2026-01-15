<script setup lang="ts">
import { useForm } from "vee-validate";

import { useCategories } from "@src/composables/useReferences";
import { useCreateBills } from "@src/composables/useBill";
import { schemaBills } from "@src/helpers/validations/bills";

import { FORM_BILL } from "@src/constants/keysForms.constants";
import InputField from "../InputField.vue";
import SelectField from "../SelectField.vue";
import ButtonCustom from "../ButtonCustom.vue";

const emit = defineEmits(["finishForm"]);

const { data, isFetching } = useCategories();
const { mutate, isPending } = useCreateBills();

const { handleSubmit, meta, setFieldError } = useForm({
  validationSchema: schemaBills,
});

const onSubmit = handleSubmit((values) => {
  mutate(values, {
    onSuccess: () => {
      emit("finishForm");
    },
    onError: (e) => {
      const errors = e?.errors;
      if (errors) {
        Object.entries(errors).forEach(([key, message]) => {
          if (key in values) {
            setFieldError(key as keyof typeof values, message);
          }
        });
      }
    },
  });
});
</script>

<template>
  <form @submit="onSubmit" class="form">
    <div class="form__content">
      <input-field
        :input-id="FORM_BILL.NAME"
        label="Nombre"
        :is-required="true"
      />
      <input-field
        :input-id="FORM_BILL.PRICE"
        label="Valor"
        type="number"
        :is-required="true"
      />
      <select-field
        :input-id="FORM_BILL.CATEGORY"
        label="Categoría"
        :options="data?.data || []"
        :is-required="true"
      />
    </div>
    <button-custom
      label="Guardar"
      type="submit"
      :is-disabled="!meta.valid"
      :loading="isFetching || isPending"
    />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: space-between;
}

.form__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
