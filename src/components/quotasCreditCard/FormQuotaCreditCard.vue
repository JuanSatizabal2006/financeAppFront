<script setup lang="ts">
import { useForm } from "vee-validate";
import { ref, watch } from "vue";

import { general } from "@src/language/general";

import { FORM_QUOTA_CREDIT_CARD } from "@src/constants/keysForms.constants";

import InputField from "../shared/InputField.vue";
import ButtonCustom from "../shared/ButtonCustom.vue";

import { setFieldErrors } from "@src/helpers/setFieldErrors";
import SelectField from "../shared/SelectField.vue";
import InfoCard from "../shared/InfoCard.vue";
import { schemaQuotasCreditCard } from "@src/helpers/validations/quotasCreditCard";

import { useGetCreditCardOptions } from "@src/composables/useReferences";
import { useCreateQuotaCreditCard } from "@src/composables/useQuotasCreditCard";
import type { QuotaCreditCardCreate } from "@src/models/core/quotaCreditCard.interface";

const emit = defineEmits(["finishForm"]);
const priceQuota = ref("");

const { handleSubmit, meta, setFieldError, values } = useForm({
  validationSchema: schemaQuotasCreditCard,
  initialValues: {
    paidQuotas: 0,
  },
});

const { data: creditCards } = useGetCreditCardOptions();

const { mutate: submitCreate, isPending: loadingCreate } =
  useCreateQuotaCreditCard();

watch(
  values,
  ({ price, totalQuotas }) => {
    if (price && totalQuotas) {
      setPriceQuota(price, totalQuotas);
    } else {
      priceQuota.value = "";
    }
  },
  // { deep: true },
);

function setPriceQuota(pricePurchase: number, totalQuotas: number) {
  if (isNaN(pricePurchase) || isNaN(totalQuotas)) {
    return;
  }

  priceQuota.value =
    "$" + (pricePurchase / totalQuotas).toLocaleString("de-DE");
}

const onSubmit = handleSubmit((values) => {
  create(values);
});

function create(values: QuotaCreditCardCreate) {
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
      <info-card
        v-show="priceQuota"
        :message="`El valor de cada cuota será de ${priceQuota}`"
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
