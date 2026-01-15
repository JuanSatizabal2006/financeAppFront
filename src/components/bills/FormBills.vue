<script setup lang="ts">
import { useForm } from "vee-validate";
import { useCategories } from "@src/composables/useReferences";
import { schemaBills } from "@src/helpers/validations/bills";

import InputField from "../InputField.vue";
import SelectField from "../SelectField.vue";
import ButtonCustom from "../ButtonCustom.vue";

const { data, isFetching } = useCategories();

const { handleSubmit, meta } = useForm({
  validationSchema: schemaBills,
});

const onSubmit = handleSubmit((values) => {
  console.log("=>", values);
});

</script>

<template>
  <form @submit="onSubmit" class="form">
    <div class="form__content">
      <input-field input-id="name" label="Nombre" :is-required="true" />
      <input-field
        input-id="price"
        label="Valor"
        type="number"
        :is-required="true"
      />
      <select-field
        input-id="categoryId"
        label="Categoría"
        :options="data?.data || []"
        :is-required="true"
      />
    </div>
    <button-custom
      label="Guardar"
      type="submit"
      :is-disabled="!meta.valid"
      :loading="isFetching"
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
