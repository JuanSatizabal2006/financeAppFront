<script setup lang="ts">
import { useForm } from "vee-validate";

import { useCategories } from "@src/composables/useReferences";
import { useCreateBills, useUpdateBills } from "@src/composables/useBill";
import { schemaBills } from "@src/helpers/validations/bills";

import { FORM_BILL } from "@src/constants/keysForms.constants";
import InputField from "../InputField.vue";
import SelectField from "../SelectField.vue";
import ButtonCustom from "../ButtonCustom.vue";
import type { BillCreate, BillUpdate } from "@src/models/bill.interface";
import { computed, ref } from "vue";
import { setFieldErrors } from "@src/helpers/setFieldErrors";

const { data, isFetching } = useCategories();
const { mutate: submitCreate, isPending: pendingCreate } = useCreateBills();
const { mutate: submitEdit, isPending: pendingEdit } = useUpdateBills();

const emit = defineEmits(["finishForm"]);
const idBill = ref("");
const loading = computed(() => isFetching || pendingCreate || pendingEdit);

const { handleSubmit, meta, setFieldError, setValues } = useForm({
  validationSchema: schemaBills,
});

const onSubmit = handleSubmit((values) => {
  if (idBill.value) {
    edit({ ...values, id: idBill.value });
  } else {
    create(values);
  }
});

function create(values: BillCreate) {
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

function edit(values: BillUpdate) {
  submitEdit(values, {
    onSuccess: () => {
      emit("finishForm");
    },
    onError: (e) => {
      const errors = e?.errors;
      const { price, categoryId, name } = values;
      const newValues: Omit<BillUpdate, "id"> = { categoryId, name, price };

      if (errors) {
        setFieldErrors(errors, newValues, setFieldError);
      }
    },
  });
}

function setFormEdit(bill: BillUpdate) {
  setValues({
    categoryId: bill.categoryId,
    name: bill.name,
    price: bill.price,
  });
  idBill.value = bill.id;
}

defineExpose({ setFormEdit });
</script>

<template>
  <p style="color: white"></p>
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
      :loading="loading.value"
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
