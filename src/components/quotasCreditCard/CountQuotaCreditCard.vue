<script setup lang="ts">
import { computed } from "vue";
import { useGetQuotasCreditCard } from "@src/composables/useQuotasCreditCard";
import FormatedValue from "../shared/FormatedValue.vue";

import { getCountCreditCards } from "@src/helpers/getCountCreditCards";

const { data, isFetching } = useGetQuotasCreditCard();

const count = computed(() => {
  return getCountCreditCards(data.value?.data || []);
});

</script>

<template>
  <section class="list-grid">
    <div
      class="card"
      v-for="{ id, name, priceMin, totalPurchases } in count"
      :key="id"
    >
      <header class="card__header">
        <div class="card__header__content">
          <p class="card__title">{{ name }}</p>
        </div>
      </header>
      <section class="card__info">
        <formated-value
          :value="priceMin"
          title="Pago mínimo"
          symbol="$"
          size="xl"
          type="number"
        />
        <formated-value title="Cantidad de compras" :value="totalPurchases" />
      </section>
    </div>
  </section>
</template>
